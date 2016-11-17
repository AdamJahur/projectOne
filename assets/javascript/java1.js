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
				var selectButton = $('<a href="secondPage.html"><button class="selectButton"></button></a>');

				var movieID = results[i].id;
				
				imagePoster.attr('movie-id', movieID);
				imagePoster.attr('src', 'https://image.tmdb.org/t/p/w500' + results[i].poster_path);

				selectButton.text("Select Movie");
				selectButton.attr('movie-id', movieID);

				var imagePoster_link = $('<a href="secondPage.html">');
				imagePoster_link.append(imagePoster);
				columnBlock.append(imagePoster_link);
				columnBlock.append(selectButton);
				$('.row').append(columnBlock);

			}

			console.log(results);
		});

	};

	imagePosters();

});

