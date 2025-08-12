// Use Promise.race with a timeout
// 🎯 Goal:

// Create a function that:

//     Fetches user data from
//     👉 https://jsonplaceholder.typicode.com/users/1

//     Uses Promise.race to:

//         Either return the user if the fetch is fast enough

//         Or log a timeout error if it takes longer than 3 seconds

async function getUserWithTimeout() {
    const fetchPromise = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json());

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("❌ Request timed out after 3 seconds"));
        }, 3000);
    });

    try {
        const user = await Promise.race([fetchPromise, timeoutPromise]);
        console.log(`✅ Name: ${user.name}`);
    } catch (error) {
        console.error(error.message);
    }
}

getUserWithTimeout();
