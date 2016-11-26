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
			
			var copyright = $('<div class="copyright">').attr('id', copyright).text(response.copyright);
	
			var author = $('<div class="author">').attr('id', "review").text(review.byline);
			var head = $('<div class="head">').attr('id', "head").text(review.headline);
			var pubdate = $('<div class="pubdate">').attr('id', "date").text(review.publication_date);
			var summary = $('<div class="summary">').attr('id', "short").text(review.summary_short);
	
			var linkMessage = $('<div class="linkMessage">').attr('id', "link")
			var link = $('<a href=' + review.link.url + '>').text("Click here to visit article page.");

			linkMessage.append(link);
	
			$('#review').append(head);
			$('#review').append(author);
			$('#review').append(pubdate).append('<br/>');
			$('#review').append(summary).append('<br/>'); 
			$('#review').append(linkMessage);
			$('#review').append(copyright); 

		})
	}

	nytReview();
	
})