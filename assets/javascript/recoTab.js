$(document).ready(function () {

	var movieID = localStorage.getItem('movieID');

	function recoTab () {
	
		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "/similar?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		console.log(queryURL);

		$.ajax(request).done(function(response) {

			
			var results = response.results;
			var numPosters = 4;

			console.log(results);

			for (i = 0; i < numPosters; i++) {

				var posterBlock = $('<div class=col-md-3>');
				var imageBlock = $('<img>');
				var movieTitle = $('<h5>');

				if (results[i].backdrop_path === null) {

					imageBlock.attr("src", "http://placehold.it/246.68x138.63?text=No+Image");
	
				} else {

					imageBlock.attr("src", "https://image.tmdb.org/t/p/w500" + results[i].backdrop_path);

				}

				movieTitle.addClass("recoTab");
				movieTitle.text(results[i].title);
				
				posterBlock.attr("movie-name", results[i].title);
				posterBlock.append(imageBlock);
				posterBlock.append(movieTitle);
	
				$('#recoPosters').append(posterBlock);
			}


		});
	}

	recoTab();
});