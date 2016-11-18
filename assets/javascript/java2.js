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

			numImages = 4;

			var largeImage = $('#bigImage');
			largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);

			for (i = 0; i < numImages; i++) {

				var imageSource = 'https://image.tmdb.org/t/p/w500' + response.backdrops[i].file_path;
				var columnBlock = $('<div class="column">');
				var imageBlock = $('<img id=smallImage' + [i] + ' class=thumbnail src=' + imageSource + '>')

				columnBlock.attr('src', imageSource);
				columnBlock.append(imageBlock);
				columnBlock.on('click', movieImage);

				$('.smallImage').append(columnBlock);

<<<<<<< HEAD
			// 	var imageField = $('#smallImage' + i);
=======
				var divField = $('<div class=column>')
				divField.attr(response.backdrops[i].file_path);	
				var imageField = $('#smallImage' + i);
				var imageSource = response.backdrops[i].file_path;
>>>>>>> c556bb2b56311b786fb5fb9cb93cc40c1f7249f4

			// 	imageField.attr('src', 'https://image.tmdb.org/t/p/w500' + imageSource);
			}


		});

		console.log(queryURL);
	}

<<<<<<< HEAD
	function movieImage () {

		var imageSource = $(this).attr('src');
		$('#bigImage').attr('src', imageSource);
		console.log("Test");
	};
=======
	$('.smallImage').on('click', function() {

		var imageSource = $(this).attr('src');
		$('#bigImage').attr('src', imageSource);
	})
>>>>>>> c556bb2b56311b786fb5fb9cb93cc40c1f7249f4

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