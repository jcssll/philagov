const url = 'https://www.phila.gov/wp-json/wp/v2/posts/';
const postsContainer = 'document.querySelector(.latestPosts)'; 

fetch(url)
.then(response => response.json())
.then(data => console.log(data));  
