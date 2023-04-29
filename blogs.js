const blogPostsEl = document.getElementById('blog-posts');

fetch('posts.md')
  .then(response => response.text())
  .then(text => {
    const html = marked(text);
    blogPostsEl.innerHTML = html;
  });