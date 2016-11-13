	function searchMovieImage() {

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
			query: "The+Avengers" 
		}

		var queryURL = "https://api.themoviedb.org/3/search/movie?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		console.log(queryURL);

		$.ajax(request).done(function(response) {

			var movieID = response.results[0].id;
			$('.thumbnail').attr("data-movieID", movieID);

			
		});

	}	

	searchMovieImage();

	$('.button').on('click', displayMovieImage);

	function displayMovieImage() {

		var movieID = $('#smallImage01').attr('data-movieID');
		
		var query = {
			api_key: "0735005732556ad68ab1353886fe6517", 
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "/images?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response);	

			var movieBackdrop = response.backdrops[0].file_path;
			var filePath = "https://image.tmdb.org/t/p/w500/" + movieBackdrop;
			$('#largeImage').attr('src', filePath);

			// var movieImage = $('<img>');
			// var movieBackdrop = response.backdrops[0].file_path;
			// var filePath = "https://image.tmdb.org/t/p/w500/" + movieBackdrop;
			// movieImage.attr('src', filePath);
			// $('.appendSpace').append(movieImage);

		})
	
	}

	displayMovieImage();