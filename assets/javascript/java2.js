$(document).ready(function () {

	function multiImageFunction () {

		var movieID = "284052";

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

			var largeImage = $('#largeImage');
			largeImage.attr('src', 'https://image.tmdb.org/t/p/w500' + response.backdrops[0].file_path);

			for (i = 0; i < 4; i++) {

				var imageField = $('#smallImage' + i);
				var imageSource = response.backdrops[i].file_path;
				console.log(imageSource)

				imageField.attr('src', 'https://image.tmdb.org/t/p/w500' + imageSource);
			}


		});

		console.log(queryURL);
	}

	$('img').on('click', function() {

		var imageSource = $(this).attr('src');
		$('#largeImage').attr('src', imageSource);
	})

	multiImageFunction();

$(function (){
	$("#date-picker").datepicker();

});

});