class UserBuilder {
  private name?: string;
  private age?: number;

  static create() { return new UserBuilder(); }

  setName(name: string) { 
    this.name = name; 
    console.log("this in setName:", this);
    return this; 
  }

  setAge(age: number) { 
    this.age = age; 
    console.log("this in setAge:", this);
    return this; 
  }

  build() {
    if (!this.name) throw new Error("Name is required");
    if (this.age === undefined) throw new Error("Age is required");
    return { name: this.name, age: this.age };
  }
}

const user = UserBuilder.create()
  .setName("Alice") // `this` ---> { name: "Alice", age: undefined }
  .setAge(30)       // `this` ---> { name: "Alice", age: 30 }
  .build();

console.log("Final user object:", user);
