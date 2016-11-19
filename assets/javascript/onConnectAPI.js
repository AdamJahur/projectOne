$(document).ready(function () {

	var movieTitle = "Doctor Strange";

	function zipCode () {

		var query = {
			api_key: "gpsby6z4y9kttvza5n2yyqha",
			zip: "32765",
			startDate: "2016-11-19"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?" + $.param(query);

		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response);
			
			var theatreName = response[0].showtimes[0].theatre.name;

			$('#theatreName').text(theatreName);
			// console.log(theatreName);

			for (i = 0; i < response.length; i++) {
				
				if(response[i].title === movieTitle) {

					// console.log(response[i].title);

					for (i = 0; response[0].showtimes.length; i++) {

						var timeButton = $('<button type="button" class="btn btn-warning">');
						var time = response[0].showtimes[i].dateTime;


						$('.movieTheaterOne').append(timeButton);

						var formatTime = time.substring(11, 16);

						timeButton.attr('movie-time', time);
						timeButton.text(formatTime);

					}

				}	
			}
		})
	}

	zipCode();
})

