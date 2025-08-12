//? Problem: Shopping Cart Class

// Create a class ShoppingCart that simulates a basic e - commerce cart system.
// ✅ Requirements:

//     The class must support the following methods:

// addItem(itemName: string, price: number): void

//     removeItem(itemName: string): void

//         getTotal(): number

// getItems(): Array < { name: string, price: number } >

//     clear(): void

//         Prevent adding items with the same name more than once.

//     When removing an item that does not exist, do nothing.

// 🧪 Example usage:

// const cart = new ShoppingCart();
// cart.addItem("Shirt", 30);
// cart.addItem("Pants", 50);
// console.log(cart.getTotal()); // 80
// cart.removeItem("Shirt");
// console.log(cart.getTotal()); // 50
// console.log(cart.getItems()); // [{ name: 'Pants', price: 50 }]

// 💡 Hint:

//     Use a Map or Array internally to store items.

//     Focus on clean OOP: encapsulation, no direct access to internal data.

//     Expect follow - ups: “Now make it persist in localStorage”, or “Add quantities”.

//! 1.
class ShoppingCart {
    #items; // private field (ES2022)

    constructor() {
        this.#items = new Map(); // key: itemName, value: price
    }

    addItem(itemName, price) {
        if (!this.#items.has(itemName)) {
            this.#items.set(itemName, price);
        }
    }

    removeItem(itemName) {
        // Do nothing if item does not exist
        this.#items.delete(itemName);
    }

    getTotal() {
        let total = 0;
        for (let price of this.#items.values()) {
            total += price;
        }
        return total;
    }

    getItems() {
        return Array.from(this.#items.entries()).map(([name, price]) => ({
            name,
            price
        }));
    }

    clear() {
        this.#items.clear();
    }
}

const cart = new ShoppingCart();
cart.addItem("Shirt", 30);
cart.addItem("Pants", 50);
cart.addItem("Shirt", 30); // duplicate, won't be added
console.log(cart.getTotal()); // 80
cart.removeItem("Shirt");
console.log(cart.getTotal()); // 50
console.log(cart.getItems()); // [{ name: 'Pants', price: 50 }]
cart.clear();
console.log(cart.getItems()); // []

//! 2.
class ShoppingCart {
    constructor() {
        this.items = {}; // key: itemName, value: price
    }

    addItem(itemName, price) {
        if (!(itemName in this.items)) {
            this.items[itemName] = price;
        }
    }

    removeItem(itemName) {
        delete this.items[itemName];
    }

    getTotal() {
        return Object.values(this.items).reduce((sum, price) => sum + price, 0);
    }

    getItems() {
        return Object.entries(this.items).map(([name, price]) => ({ name, price }));
    }

    clear() {
        this.items = {};
    }
}
