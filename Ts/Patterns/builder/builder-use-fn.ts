type User = { name: string; age: number };

function createUserBuilder() {
  let name: string | undefined;
  let age: number | undefined;

  return {
    setName(n: string) { name = n; return this; },
    setAge(a: number) { age = a; return this; },
    build(): User {
      if (!name) throw new Error("Name is required");
      if (age === undefined) throw new Error("Age is required");
      return { name, age };
    }
  };
}

//
const user = createUserBuilder()
  .setName("Alice")
  .setAge(30)
  .build();

console.log(user)
