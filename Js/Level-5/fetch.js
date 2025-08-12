// Fetch data using async/await
// 🎯 Goal:

// Create an async function called getUserData that:

//     Uses fetch to get data from this public API:
//     👉 https://jsonplaceholder.typicode.com/users/1

//     Waits for the response and converts it to JSON.

//     Logs the user’s name and email.

async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
}

getUserData();
