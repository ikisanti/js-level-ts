// Use Promise.all to fetch multiple users
// 🎯 Goal:

// Create a function that:

//     Fetches 3 users in parallel from:

//         https://jsonplaceholder.typicode.com/users/1

//         https://jsonplaceholder.typicode.com/users/2

//         https://jsonplaceholder.typicode.com/users/3

//     Waits for all responses using Promise.all

//     Logs each user's name

async function getMultipleUsers() {
    try {
        const urls = [
            'https://jsonplaceholder.typicode.com/users/1',
            'https://jsonplaceholder.typicode.com/users/2',
            'https://jsonplaceholder.typicode.com/users/3',
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        const users = await Promise.all(responses.map(res => res.json()));

        users.forEach((user, index) => {
            console.log(`User ${index + 1}: ${user.name}`);
        });
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
}

getMultipleUsers();
