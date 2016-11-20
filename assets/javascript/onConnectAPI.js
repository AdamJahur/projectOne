$(document).ready(function () {

		var movieTitle = localStorage.getItem('movieTitle');

	function zipCode () {

		var code = $('#middle-label').val();

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: "2016-11-21"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?" + $.param(query);

		// console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response);

			
			for (i = 0; i < response.length; i++) {
				
				if(response[i].title === movieTitle) {

					var movie = response[i]

					//Theatre Name

					$('#movieTimes').empty();
					$('#theatreName').empty();

					var theatreName = movie.showtimes[0].theatre.name;
					$('#theatreName').append(theatreName);

					for (i = 0; movie.showtimes.length; i++) {

						// Time

						var timeButton = $('<button type="button" class="btn btn-warning">');
						var time = movie.showtimes[i].dateTime;

						$('#movieTimes').append(timeButton);

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

	$('#submit').on('click', zipCode);

})

