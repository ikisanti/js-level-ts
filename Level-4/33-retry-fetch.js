//? Retry Fetch on Failure
//? Prompt:
//? Implement a function that retries fetch up to 3 times if it fails.

async function retryFetch(url, attempts = 3) {
    for (let i = 0; i < attempts; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Status not OK");
            return await res.json();
        } catch (err) {
            if (i === attempts - 1) throw err;
            console.warn(`Retrying... (${i + 1})`);
        }
    }
}

retryFetch('https://jsonplaceholder.typicode.com/posts/1000')
    .then(data => console.log(data))
    .catch(err => console.error("Final error:", err));
