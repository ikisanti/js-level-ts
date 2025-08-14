

class Hero {

    name?: string;
    age?: number;

    static create () {
        return new Hero();
        
    }
    

    setName(name:string) {
        this.name = name
        return this
    }

    setAge(age:number) {
        this.age = age
        return this
    }

    build() {
        const result: { name?: string; age?: number } = {};
        if (this.name !== undefined) result.name = this.name;
        if (this.age !== undefined) result.age = this.age;
        return result;
    }
}

const viking = Hero.create().setName("Ragnar").setAge(40).build()
console.log(viking)

const archer = Hero.create().setName("Loki").build()
console.log(archer)


