$(document).ready(function () {

	var movieID = localStorage.getItem('movieID');
	var moviePoster = localStorage.getItem('movieURL');
	
	function defaultDate () {

		var date = new Date();
	
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
	
		if (month < 10) month = "0" + month;
		if (day < 10) day = "0" + day;
	
		var today = year + "-" + month + "-" + day;       
		$("#date").attr("value", today);
	}

	function multiImageFunction () {

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

			if (response.backdrops.length === 0) {

				$('#movieImages').empty();

				var blankImage = $('<img id="bigImage" class="thumbnail" src="http://placehold.it/650x350?text=No+Images">')
				$('#movieImages').append(blankImage);
				
			} else {

				var largeImage = $('#bigImage');
				largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);
			}

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

	}

	function movieImage () {

		var imageSource = $(this).attr('src');
		$('#bigImage').attr('src', imageSource);
	};

	function movieDescription () {

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "?" +  $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {
			var image = ('https://image.tmdb.org/t/p/w500' + moviePoster);
			var title = response.title;
			var tagLine = response.tagline;
			var runtime = ("Runtime: " + response.runtime + " min");
			var overview = response.overview;
			var production = ("Production Company: " + response.production_companies[0].name);
			var genre =  ("Genre: " + response.genres[0].name);
			

			$('#poster').attr('src', image);
			$('#movieName').html(title);
			$('#movieDescription').html(overview);
			$('#runtime').html(runtime);
			$('#movieTitle').html(title);
			$('#production').html(production);
			$('#genre').html(genre);

		})
	}

	function actorsName () {
	
		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}
	
		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "/credits?" +  $.param(query);
	
		var request = {
			url: queryURL,
			method: 'GET'
		}
	
		$.ajax(request).done(function(response) {
				
			$('#actors').html("Starring: ")
	
			for(i = 0; i < response.cast.length && i < 5; i++) {
	
				var crew = response.cast[i].name;
				$('#actors').append(crew).append(", ");
			}
		});
	};

	function trailer () {

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "https://api.themoviedb.org/3/movie/" + movieID + "/videos" +  "?" + $.param(query) + "&language=en-US";

		var request = {
			url: queryURL,
			method: 'GET'
		}
		
		$.ajax(request).done(function(response) {

			var data = response.results[0].key;
			

			if (response.results[0].key) {


			var trailerlink = ('https://www.youtube.com/embed/' + data);
			$(".trailer").attr('data', trailerlink);
				
			}
				else {

					$(".notrailer").attr('src', "http://placehold.it/100x100");

			}

		})

	
}
	

	// Start Up Functions		
	multiImageFunction();
	movieDescription();
	actorsName();
	trailer();
	defaultDate();


});



