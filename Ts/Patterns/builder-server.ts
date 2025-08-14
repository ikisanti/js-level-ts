// server.ts
// Ejecuta: deno run --allow-net server.ts
// Abre en el navegador: http://localhost:8000/user o http://localhost:8000/error

class ResponseBuilder {
    private status: "success" | "error" = "success";
    private data: any = null;
    private message: string = "";

    static create() {
        return new ResponseBuilder();
    }

    ok(data: any) {
        this.status = "success";
        this.data = data;
        return this;
    }

    error(msg: string) {
        this.status = "error";
        this.message = msg;
        this.data = null;
        return this;
    }

    messageText(msg: string) {
        this.message = msg;
        return this;
    }

    build() {
        return {
            status: this.status,
            data: this.data,
            message: this.message,
            timestamp: new Date().toISOString() // ejemplo extra
        };
    }
}

Deno.serve({ port: 9000 }, (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/user") {
        // Endpoint correcto usando builder
        const res = ResponseBuilder.create()
            .ok({ id: 1, name: "Alice" })
            .messageText("User found")
            .build();

        return new Response(JSON.stringify(res), {
            headers: { "Content-Type": "application/json" }
        });
    }

    if (url.pathname === "/error") {
        // Simulación de error usando builder
        const res = ResponseBuilder.create()
            .error("User not found")
            .build();

        return new Response(JSON.stringify(res), {
            headers: { "Content-Type": "application/json" }
        });
    }

    return new Response("Not found", { status: 404 });
});
