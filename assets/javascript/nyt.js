$(document).ready(function () {

	var movieTitle = localStorage.getItem("movieTitle");

	function nytReview () {

		var query = {
			api_key: "b515280c6c434e528a5f8973a59a157c",
			 query: movieTitle
		}

		var queryURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" + $.param(query);

		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

	$.ajax(request).done(function(response) {

		console.log(response);

		})
	}

	nytReview();
	
})