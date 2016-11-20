$(document).ready(function () {

	var movieTitle = "Doctor Strange";

	function zipCode () {

		var query = {
			api_key: "6guksevvakb73kx992znf3pv",
			zip: "32765",
			startDate: "2016-11-20"
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
						//for (formatTime) {
						//	var parts = times[formatTime].split(':'),
							//hour = parts[0],
						//	minutes = parts[1];

						//	if (hour > 12) {
						//		times[time] = (hour - 12) + ':' + minutes + ' pm';
						//	} else if (hour == 0) {
						//		times[time] = 12 + ':' + minutes + ' am';
						//	} else if (hour == 12) {
							//	times[time] += ' pm';
							//} else {
							//	times[time] += ' am';
							//}
//}

//console.log(times);

					}

				}	
			}
		})
	}

	zipCode();
})

