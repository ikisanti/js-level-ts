
//! 05-start-session
//? "Create a function that receives an array of users with this structure:
//? [
//?     { name: "Ana", lastLogin: "2024-12-20" },
//?     { name: "Luis", lastLogin: "2022-03-15" },
//?     { name: "Sofía", lastLogin: "2025-06-01" }
//? ]
//? And return a new array with the names of users who have logged in in the last 365 days.

const arr = [
    { name: "Ana", lastLogin: "2024-12-20" },
    { name: "Luis", lastLogin: "2022-03-15" },
    { name: "Sofía", lastLogin: "2025-06-01" }
]

const getActiveUsers = (users) => {
    const oneYearAgo = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

    return users
        .filter(user => new Date(user.lastLogin) >= oneYearAgo)
        .map(user => user.name);
};

console.log(getActiveUsers(arr))