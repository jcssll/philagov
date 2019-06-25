const url = 'https://www.phila.gov/wp-json/wp/v2/posts/';
const postsContainer = document.querySelector(".latest-post"); 

fetch(url)
.then(response => response.json())
.then(data => {
	//data brings back an array so use array method> Then provide a parameter that will be able to modify each item in the array 
	data.map(post => {
		const innerContent = 
		`
		 <tr>
    		<th>Title</th>
    		<th>Date</th> 
  		</tr>
  		<tr>
    		<td><a href ="${post.link}"><h1>${post.title.rendered}</h1> </a></td>
  		</tr>

		`
		postsContainer.innerHTML += innerContent;
	})

}); 