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

		var review = response.results[0];
		
		var copyright = $('<div>').attr('id', copyright).text(response.copyright);

		var author = $('<div>').attr('id', review.byline).text(review.byline);
		var headline = $('<div>').attr('id', "head").html(review.headline);
		var pubdate = $('<div>').attr('id', "date").text(review.publication_date);
		var summary = $('<div>').attr('id', "short").text(review.summary_short);
		// var link = $('<div>').attr('id', "link").html(review.link.url);

		console.log(summary);
		console.log(author);

		})
	}

	nytReview();
	
})