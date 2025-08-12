//! 03 bankAccount
//? "Create a BankAccount class that has:
//? An owner name
//? A balance (initialized at 0)
//? A deposit(amount) method
//? A withdraw(amount) method
//? A balance getter that returns the balance
//? Validates that no more than the current balance can be withdrawn"
//*-----------------------------------------------------------------
// class BankAccount {
//     constructor(ownerName) {
//         this.ownerName = ownerName;
//         this._balance = 0;
//     }

//     deposit(amount) {
//         if (amount < 0) throw new Error("Invalid amount");
//         this._balance += amount;
//     }

//     get balance() {
//         return this._balance;
//     }
// }


// const user = new BankAccount("Joe");

// user.deposit(200);
// console.log(user._balance);

// user._balance = -500;
// console.log(user._balance); 
//*-----------------------------------------------------------------

class BankAccount {

    #balance = 0
    constructor(ownerName) {
        this.ownerName = ownerName
    }

    validationNumber(amount) {
        if (typeof amount !== "number" || amount < 0) {
            throw new Error("Only non-negative numbers are allowed");
        }
    }

    deposit(amount) {
        this.validationNumber(amount)
        this.#balance += amount;
    }

    withdraw(amount) {
        this.validationNumber(amount)
        if (this.#balance >= amount) {
            this.#balance -= amount
        }
    }

    get balance() {
        return this.#balance
    }

}

const user = new BankAccount("Joe");

user.deposit(200);
console.log(user.balance);

user.withdraw(50);
console.log(user.balance);


