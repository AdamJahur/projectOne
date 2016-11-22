
$(document).ready(function () {
		var movieTitle = localStorage.getItem('movieTitle');

	function zipCode () {

		var code = $('#middle-label').val();

		var date = $('#date').val();

		console.log(date);

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?" + $.param(query);

		console.log(queryURL);

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

						var hours = time.substring(11, 13);
						var minutes = time.substring(14, 16);

						var isPM = false;

						if (hours > 12){
							hours-=12;
							isPM = true;
						}

						var formatTime = hours + ":" + minutes;
						formatTime+= (isPM) ? " PM" : " AM";

						timeButton.attr('movie-time', time);
						timeButton.text(formatTime);

					}
				}	
			}
		})
	}


	$('#submit').on('click', zipCode);

})

