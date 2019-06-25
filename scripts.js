const url = 'https://www.phila.gov/wp-json/wp/v2/posts/';
const postsContainer = document.querySelector(".latest-post"); 

fetch(url)
.then(response => response.json())
.then(data => {
	//data brings back an array so use array method> Then provide a parameter that will be able to modify each item in the array 
	data.map(post => {
		const innerContent = 
		`
		<li>
			<h2>${post.title.rendered}</h2>
			<a href = "${post.link}"></a>
		</li>
		`
		postsContainer.innerHTML += innerContent;
	})

}); 