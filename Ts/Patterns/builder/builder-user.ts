class UserBuilder {
  private name?: string;
  private age?: number;

  static create() { return new UserBuilder(); }

  setName(name: string) { this.name = name; return this; }
  setAge(age: number) { this.age = age; return this; }

  build() {
    if (!this.name) {
      throw new Error("Name is required");
    }
    if (this.age === undefined) {
      throw new Error("Age is required");
    }
    return { name: this.name, age: this.age };
  }
}

const user = UserBuilder.create()
  .setName("Alice")
  .setAge(30)
  .build(); // ✅ works

// UserBuilder.create().setAge(30).build(); // ❌ throws "Name is required"
console.log(user)