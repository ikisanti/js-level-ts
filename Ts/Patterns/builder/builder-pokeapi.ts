// poke-builder-demo.ts
// Run --->  deno run --allow-net builder-pokeapi.ts

type Resource =
    | "pokemon"
    | "ability"
    | "type"
    | "move"
    | "item"
    | "pokemon-species";

class PokeRequestBuilder {
    private base = "https://pokeapi.co/api/v2";
    private resource?: Resource;
    private idOrName?: string | number;
    private limit?: number;
    private offset?: number;

    static start() { return new PokeRequestBuilder(); }
    static pokemon(idOrName: string | number) { return new PokeRequestBuilder().pokemon(idOrName); }
    static listPokemon() { return new PokeRequestBuilder().list("pokemon"); }

    baseUrl(v: string) { this.base = v.replace(/\/$/, ""); return this; }

    list(res: Resource) { this.resource = res; this.idOrName = undefined; return this; }
    pokemon(idOrName: string | number) { this.resource = "pokemon"; this.idOrName = idOrName; return this; }
    ability(idOrName: string | number) { this.resource = "ability"; this.idOrName = idOrName; return this; }
    type(idOrName: string | number) { this.resource = "type"; this.idOrName = idOrName; return this; }
    move(idOrName: string | number) { this.resource = "move"; this.idOrName = idOrName; return this; }
    item(idOrName: string | number) { this.resource = "item"; this.idOrName = idOrName; return this; }

    paginate(limit: number, offset = 0) { this.limit = limit; this.offset = offset; return this; }

    build(): string {
        if (!this.resource) throw new Error("resource is required (e.g., 'pokemon')");
        const path = `${this.base}/${this.resource}${this.idOrName != null ? `/${this.idOrName}` : ""}/`;

        const qs = new URLSearchParams();
        const isList = this.idOrName == null;

        if (isList) {
            if (this.limit != null) {
                if (this.limit < 1 || this.limit > 200) throw new Error("limit must be 1..200");
                qs.set("limit", String(this.limit));
            }
            if (this.offset != null) {
                if (this.offset < 0) throw new Error("offset must be >= 0");
                qs.set("offset", String(this.offset));
            }
        } else {
            if (this.limit != null || this.offset != null) {
                throw new Error("pagination parameters are not allowed for detail endpoints");
            }
        }

        const query = qs.toString();
        return query ? `${path}?${query}` : path;
    }
}

async function pokeFetch<T = unknown>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json() as Promise<T>;
}

async function main() {
    const pikachuUrl = PokeRequestBuilder.pokemon("pikachu").build();
    const pikachu = await pokeFetch<{ id: number; name: string }>(pikachuUrl);
    console.log("✅ Pikachu:", pikachu.name, "id:", pikachu.id, "url:", pikachuUrl);

    const listUrl = PokeRequestBuilder.start().list("pokemon").paginate(5, 10).build();
    const list = await pokeFetch<{ results: { name: string; url: string }[] }>(listUrl);
    console.log("✅ Lista (5 desde offset 10):", list.results.map(r => r.name).join(", "), "url:", listUrl);

    const fireUrl = PokeRequestBuilder.start().type("fire").build();
    const fire = await pokeFetch<any>(fireUrl);
    const strongAgainst = fire.damage_relations.double_damage_to.map((t: any) => t.name);
    console.log("✅ Tipo FUEGO es fuerte contra:", strongAgainst.join(", "), "url:", fireUrl);

    // Errores esperados
    try {
        PokeRequestBuilder.start().pokemon(1).paginate(10).build();
    } catch (e) {
        console.log("🚫 Error esperado (detalle + paginación):", (e as Error).message);
    }
    try {
        PokeRequestBuilder.start().list("pokemon").paginate(0).build();
    } catch (e) {
        console.log("🚫 Error esperado (limit inválido):", (e as Error).message);
    }
}

await main().catch(err => {
    console.error("❌ Demo error:", err);
    throw err;
});

export { };
