//? Parallel Fetch with Promise.all
//? Prompt:
//? Fetch posts 1, 2, and 3 in parallel and log all their titles.

async function fetchPosts() {
    const urls = [1, 2, 3].map(id =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
    );
    const posts = await Promise.all(urls);
    console.log(posts.map(p => p.title));
}

fetchPosts();
