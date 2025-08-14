
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
            message: this.message
        };
    }
}

// --- Endpoints backend Simulation  ---
function getUser() {
    return ResponseBuilder.create()
        .ok({ id: 1, name: "Alice" })
        .messageText("User found")
        .build();
}

function getError() {
    return ResponseBuilder.create()
        .error("User not found")
        .messageText('User not found')
        .build();
}

// --- Testing ---
console.log("✅ Usuario encontrado:", getUser());
console.log("🚫 Usuario no encontrado:", getError());
