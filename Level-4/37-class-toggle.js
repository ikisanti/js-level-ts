//? Class with State Toggle
//? Prompt:
//? Create a class `Toggle` with a method `.switch()` that toggles an internal boolean state.

class Toggle {
    #on = false;

    switch() {
        this.#on = !this.#on;
        return this.#on;
    }

    status() {
        return this.#on;
    }
}

const t = new Toggle();
console.log(t.switch()); // true
console.log(t.switch()); // false
