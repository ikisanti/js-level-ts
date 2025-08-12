
const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
const { name, age } = user;
function showUserInfo(user) {
    const { name, age } = user;
    console.log(`${name} is ${age} years old`);
}


showUserInfo(user); // "Alice is 30 years old"
