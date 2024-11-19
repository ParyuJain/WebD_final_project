// Blog data
const blogs = [
    {
        title: "First Blog Post",
        content: "This is a sample blog post. Enjoy reading!",
    },
    {
        title: "Second Blog Post",
        content: "Another insightful post to keep you engaged.",
    },
];

// Render blogs dynamically
const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
    blogs.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.className = "col-md-4";
        blogCard.innerHTML = `
            <div class="card blog-card">
                <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <p class="card-text">${blog.content.substring(0, 50)}...</p>
                    <a href="blog.html" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;
        blogContainer.appendChild(blogCard);
    });
}


