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

			console.log(response);

			numImages = 4;

			if (response.backdrops.length === 0) {
				var blankImage = $('<img id="bigImage" class="thumbnail" src="http://placehold.it/650x350?text=No+Images">')
				$('#movieImages').append(blankImage);
			} else {

				var largeImage = $('#bigImage');
				largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);
			}

			// var largeImage = $('#bigImage');
			// largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);

			for (i = 0; i < numImages; i++) {

				var imageSource = 'https://image.tmdb.org/t/p/w500' + response.backdrops[i].file_path;
				var columnBlock = $('<div class="column">');
				var imageBlock = $('<img id=smallImage' + [i] + ' class=thumbnail src=' + imageSource + '>')

				columnBlock.attr('src', imageSource);
				columnBlock.append(imageBlock);
				columnBlock.on('click', movieImage);

				$('.smallImage').append(columnBlock);

			}


		});

		console.log(queryURL);
	}

	function movieImage () {

		var imageSource = $(this).attr('src');
		$('#bigImage').attr('src', imageSource);
		console.log("Test");
	};

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