$(document).ready(function () {

	function imagePosters() {

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/now_playing?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		console.log(queryURL);

		$.ajax(request).done(function(response) {

			var results = response.results;

			for (i = 0; i < results.length; i++) {

				
				var columnBlock = $('<div class="col-md-2">');
				var imagePoster = $('<img>');
				var selectButton = $('<a href="secondPage.html">');
				var movieID = results[i].id;
				var imagePoster_link = $('<a href="secondPage.html">');

				columnBlock.on('click', myFunction);
				columnBlock.attr('movie-id', movieID);
				columnBlock.attr('movie-poster', results[i].poster_path)
				columnBlock.attr('movie-title', results[i].title);

				if (results[i].poster_path === null) {

					return;

				} else {
					
					var posterURL = 'https://image.tmdb.org/t/p/w500' + results[i].poster_path;
					imagePoster.attr('src', posterURL);
				}

				selectButton.attr('movie-id', movieID);

				imagePoster_link.append(imagePoster);
				columnBlock.append(imagePoster_link);
				columnBlock.append(selectButton);
				$('.row').append(columnBlock);

			}

			console.log(results);
		});

	};

	imagePosters();

	function myFunction () {

		localStorage.clear();
		var movieID = $(this).attr('movie-id');
		var moviePoster = $(this).attr('movie-poster');
		var movieTitle = $(this).attr('movie-title');

		localStorage.setItem('movieID', movieID);
		localStorage.setItem('movieURL', moviePoster);
		localStorage.setItem('movieTitle', movieTitle);
		console.log(movieID);
	};

});

