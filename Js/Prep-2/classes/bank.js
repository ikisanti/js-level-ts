//! BankAccount Class

//? Create a BankAccount class that simulates a bank account with the following characteristics:
// Properties:

//? accountHolder(holder name, string)

// ?balance(current balance, number, starts at 0)

//? history(array of transactions made: deposits or withdrawals, with date)

// Methods:

//? deposit(amount)

//? Increases the balance by the amount if valid.

//? Records the transaction in history.

//? withdraw(amount)

//? Decreases the balance if there is enough money.

//? Records the transaction in history.

//? Returns true if the transaction was successful, false if there is not enough balance.

//? getBalance()

//? Returns the current balance.

//? getHistory()

//? Returns the history in order from newest to oldest, in this format:

// [
// { type: 'deposit', amount: 100, date: '2025-10-01' },
// { type: 'withdraw', amount: 50, date: '2025-10-02' }
// ]



class BankAccount {
    constructor(accountHolder) {
        // Input validation
        if (typeof accountHolder !== 'string' || accountHolder.trim() === '') {
            throw new Error('El nombre del titular debe ser una cadena no vacía');
        }

        this.accountHolder = accountHolder;
        this.balance = 0;
        this.history = [];
    }

    // Get current date
    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    }

    // Deposit money
    deposit(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('El monto debe ser un número positivo');
        }

        this.balance += amount;
        this.history.unshift({
            type: 'deposit',
            amount,
            date: this.getCurrentDate()
        });
    }

    // Método para retirar dinero
    withdraw(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('El monto debe ser un número positivo');
        }

        if (amount > this.balance) {
            throw new Error('Fondos insuficientes');
        }

        this.balance -= amount;
        this.history.unshift({
            type: 'withdraw',
            amount,
            date: this.getCurrentDate()
        });

        return true;
    }

    // Get back current balance
    getBalance() {
        return this.balance;
    }

    // Get back balance history 
    getHistory() {
        return [...this.history]; // Secure copy
    }
}


const account = new BankAccount("Bob Marley");

account.deposit(1000);
account.withdraw(300);
account.deposit(200);
// account.withdraw(3000);

console.log("Saldo actual:", account.getBalance()); // 900
console.log("Historial:");
console.log(account.getHistory());
