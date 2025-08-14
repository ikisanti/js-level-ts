// server.ts
// Run: deno run --allow-net server.ts
// Open in browser: http://localhost:9000/user or http://localhost:9000/error

class ResponseBuilder<T = unknown> {
    private status: "success" | "error" = "success";
    private data: T | null = null;
    private message = "";

    static create<U = unknown>() {
        return new ResponseBuilder<U>();
    }

    ok(data: T) {
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
            timestamp: new Date().toISOString()
        };
    }
}

Deno.serve({ port: 9000 }, (req) => {
    const url = new URL(req.url);

    if (url.pathname === "/user") {
        // Correct endpoint using builder
        const res = ResponseBuilder.create<{ id: number; name: string }>()
            .ok({ id: 1, name: "Alice" })
            .messageText("User found")
            .build();

        return new Response(JSON.stringify(res), {
            headers: { "Content-Type": "application/json" }
        });
    }

    if (url.pathname === "/error") {
        // Error simulation using builder
        const res = ResponseBuilder.create<null>()
            .error("User not found")
            .build();

        return new Response(JSON.stringify(res), {
            headers: { "Content-Type": "application/json" }
        });
    }

    return new Response("Not found", { status: 404 });
});
