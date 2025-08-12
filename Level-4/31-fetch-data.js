//? Fetch Data (Async/Await)
//? Prompt:
//? Write a function that fetches data from an API and logs the result using async/await.
//? Use https://jsonplaceholder.typicode.com/posts/1

async function getPost() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

getPost();
