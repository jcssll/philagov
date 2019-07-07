const url = 'https://www.phila.gov/wp-json/wp/v2/posts?per_page=20';
const postsContainerTitle = document.querySelector(".latest-post"); 


fetch(url)
.then(response => response.json())
.then(data => {
	//data brings back an array so use array method> Then provide a parameter that will be able to modify each item in the array 
	data.map(post => {
		const innerContent = 
		`
 <div class="row">
  <div class="column left" style="">
  	<a href ="${post.link}"><h1>${post.title.rendered}</h1></a>

  </div>
  <div class="column right" style="">
  	<h3  class="column right">${post.date}</h3></a>
  </div>
</div>
<hr class ="article-hr">
		`
		postsContainerTitle.innerHTML += innerContent;

	})

}); 

//get search 

