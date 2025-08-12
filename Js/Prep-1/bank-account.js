class BankAccount {
    constructor() {
        this.name = '';
        this.balance = 0;
        this.history = [];
    }

    getCurrentDate() {
        return new Date().toISOString().split('T')[0];
    }

    deposit(amount) {
        if (typeof amount !== 'number') {
            throw new Error('its not a number')
        }

        this.balance = this.balance + amount
        this.history.push({ type: 'deposit', amount: this.balance, date: this.getCurrentDate() })
        return 'sucess transaction!!!'
    }

    getBalace() {
        return this.balance
    }

    withDraw(amount) {
        if (typeof amount !== 'number') {
            throw new Error('its not a number')
        }
        if (amount < this.balance) {
            this.balance = this.balance - amount
            this.history.push({ type: 'withdraw', amount: this.balance, date: this.getCurrentDate() })
            return true
        }
        if (amount > this.balance) {
            return false
        }

    }
    getHistory() {
        return [...this.history.reverse()]
    }
}


const user = new BankAccount('Jaimitochupetin')
console.table(user)

let deposit = user.deposit(200)
console.log(deposit)

let balance = user.getBalace()
console.log(balance)

let deposit1 = user.deposit(400)
console.log(deposit1)

let balance1 = user.getBalace()
console.log(balance1)

let withDraw = user.withDraw(100)
console.log(withDraw)

let balance3 = user.getBalace()
console.log(balance3)

let withDraw2 = user.withDraw(1000)
console.log(withDraw2)

let history = user.getHistory()
console.log(history)
