$(document).ready(function () {

	var movieTitle = localStorage.getItem('movieTitle');

	function theatreLocation () {

		var code = $('#middle-label').val();

		var date = $('#date').val();

		console.log(date);

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: "32765",
			startDate: "2016-11-22",
			radius: "10"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/theatres?" + $.param(query);

		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response)

			for (i = 0; i < response.length; i++) {

				var theatreDiv = $('<div>');
				theatreDiv.addClass('theatreDiv');
				theatreDiv.attr('id', response[i].theatreId);

				var theatreName = response[i].name;
				theatreDiv.text(theatreName);
				$('#theatreName').append(theatreDiv);
			}
		});
	};

	// theatreLocation();

	function theatreTime () {

		var code = $('#middle-label').val();

		var date = $('#date').val();

		$('#movieTimes').empty();
		$('#theatreName').empty();

		var query = {
			api_key: "f46d2w5jhyj3nb8xvkrxwmj6",
			zip: "32765",
			startDate: "2016-11-22",
			radius: "10"
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
					
					for (i = 0; movie.showtimes.length; i++) {

						// Time

						var timeButton = $('<button type="button" class="btn btn-warning">');
						var time = movie.showtimes[i].dateTime;
						var theatreId = movie.showtimes[i].theatre.id;

						console.log(theatreId);

						$('#' + theatreId).append(timeButton);

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

						// if (movie.showtimes[i].theatre.id === $(+)) {}

					}
				}	
			}
		})
	}


	$('#submit').on('click', function() {

		theatreLocation();
		theatreTime();
	});

})

