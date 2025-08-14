
class Hero {
    constructor ({ name, age, power, hp }) {
        this.name = name
        this.age = age
        this.power = power
        this.hp = hp ?? 200
    }

    static attack() {
        return 'atack!!!!'
    }
}


const diegui = { 
    name: 'Diegui',
    age: 32,
    power: 'Beard',
    hp: 250,
}


const Diegui = new Hero(diegui).attack()
console.table({Diegui})

Hero.attack()

