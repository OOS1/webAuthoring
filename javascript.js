document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const blogPosts = document.querySelectorAll('.blog-post');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();

        blogPosts.forEach(post => {
            const title = post.querySelector('h2').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = 'flex';
            } else {
                post.style.display = 'none';
            }
        });
    });
});