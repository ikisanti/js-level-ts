//? AbortController for Fetch
//? Prompt:
//? Create a fetch request that auto-aborts after 2 seconds.

const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 2000);

fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => res.json())
    .then(data => console.log("✅ Success:", data))
    .catch(err => {
        if (err.name === "AbortError") {
            console.warn("⚠️ Request aborted");
        } else {
            console.error("Fetch error:", err);
        }
    });
