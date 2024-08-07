document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const blogPosts = document.querySelectorAll('.blog-post');

    // Search functionality
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

    // Like functionality
    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('fas');
            this.classList.toggle('far');
            let likeCount = parseInt(this.nextSibling.textContent);
            if (this.classList.contains('fas')) {
                likeCount++;
            } else {
                likeCount--;
            }
            this.nextSibling.textContent = likeCount;
        });
    });

    // Retweet functionality
    const retweetButtons = document.querySelectorAll('.fa-retweet');
    retweetButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('retweeted');
            let retweetCount = parseInt(this.nextSibling.textContent);
            if (this.classList.contains('retweeted')) {
                retweetCount++;
            } else {
                retweetCount--;
            }
            this.nextSibling.textContent = retweetCount;
        });
    });

    // Comment functionality (placeholder)
    const commentButtons = document.querySelectorAll('.fa-comment');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Comment functionality coming soon!');
        });
    });

    // Share functionality (placeholder)
    const shareButtons = document.querySelectorAll('.fa-share-square');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Share functionality coming soon!');
        });
    });
});