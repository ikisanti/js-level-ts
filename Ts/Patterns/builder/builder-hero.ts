


interface HeroInterface { 
    name: string;
    age: number;
    power: string;
    hp?: number;
}


class Hero {
    name: string;
    age: number;
    power: string;
    hp: number;

    constructor ({ name, age, power, hp }: HeroInterface) {
        this.name = name
        this.age = age
        this.power = power
        this.hp = hp ?? 200
    }
}


const diegui: HeroInterface = { 
    name: 'Diegui',
    age: 32,
    power: 'Beard',
    hp: 250,
}


const Diegui = new Hero(diegui)
console.table({Diegui})

