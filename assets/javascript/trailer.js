
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

			var image = ('https://image.tmdb.org/t/p/w500' + moviePoster);
			var title = response.title;
			var tagLine = response.tagline;
			var runtime = ("Runtime: " + response.runtime + " min");
			var overview = response.overview;

			$('#trailer').html(trailer);

		})
	}

	trailer();
	