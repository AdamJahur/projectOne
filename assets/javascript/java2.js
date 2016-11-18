$(document).ready(function () {

	var movieID = localStorage.getItem('movieID');
	var moviePoster = localStorage.getItem('movieURL')

	function multiImageFunction () {

		// var movieID = "284052";

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "/images?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			var largeImage = $('#bigImage');
			largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);

			for (i = 0; i < 4; i++) {

				var imageField = $('#smallImage' + i);
				var imageSource = response.backdrops[i].file_path;

				imageField.attr('src', 'https://image.tmdb.org/t/p/w500' + imageSource);
			}


		});

		console.log(queryURL);
	}

	$('img').on('click', function() {

		var imageSource = $(this).attr('src');
		$('#largeImage').attr('src', imageSource);
	})

	function movieDescription () {

		// var movieID = "284052";

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "?" +  $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response);

			var image = ('https://image.tmdb.org/t/p/w500' + moviePoster);
			var title = response.title;
			var tagLine = response.tagline;
			var runtime = ("Runtime: " + response.runtime + " min");
			var overview = response.overview;

			$('#poster').attr('src', image);
			$('#movieName').html(title);
			$('#movieDescription').html(overview);
			$('#runtime').html(runtime);
			$('#movieTitle').html(title);

			// Testing & Debugging
				console.log(image);
				console.log(title);
				console.log(tagLine);
				console.log(runtime);
				console.log(overview);
		
		})
	}

	multiImageFunction();
	movieDescription();

	// Testing & Debugging
	

});