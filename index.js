async function getPosts() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
        console.log("Fetched posts:", data);
        displayPosts(data);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
getPosts();

function displayPosts(posts) {
    const ul = document.getElementById("post-list");
    posts.forEach(post => {
        console.log("Post title:", post.title);
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        h1.textContent = post.title;
        const p = document.createElement("p");
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}