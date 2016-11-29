$(document).ready(function () {

	var movieTitle = localStorage.getItem('movieTitle');

	function theatreLocation () {

		var code = $('#middle-label').val();

		var date = $('#datepicker2').val();

		console.log($('#datepicker2').val());

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date,
			radius: "10"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/theatres?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			for (i = 0; i < response.length; i++) {

				var theatreDiv = $('<div>');
				var timeDiv = $('<div>');
				timeDiv.addClass('time');
				timeDiv.attr('id', response[i].theatreId);

				var theatreName = response[i].name;
				var theatreNameDiv = $('<div>');

				theatreNameDiv.text(theatreName);
				theatreNameDiv.attr('theatre-name', theatreName);

				theatreDiv.addClass('theatreDiv');
				theatreDiv.append(theatreNameDiv);
				theatreDiv.append(timeDiv);

				$('#theatreName').append(theatreDiv);
			}
		});
	};

	function theatreTime () {

		var code = $('#middle-label').val();

		var date = $('#datepicker2').val();

		$('#movieTimes').empty();
		$('#theatreName').empty();

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date,
			radius: "10"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?" + $.param(query);
		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			for (i = 0; i < response.length; i++) {
				
				if(response[i].title === movieTitle) {

					var movie = response[i]
					
					for (i = 0; movie.showtimes.length; i++) {

						// Time

						var timeButton = $('<button type="button" class="btn btn-warning">');
						var time = movie.showtimes[i].dateTime;
						var theatreId = movie.showtimes[i].theatre.id;
						console.log("time", time);


						$('#' + theatreId).append(timeButton);

						var hours = time.substring(11, 13);
						var minutes = time.substring(14, 16);

						var isPM = false;

						if (hours >= 13){

							hours-=12;
							isPM = true;
						} else if (hours == 12){

							isPM = true;
						};

						if  (time === null) {
							$(".time").html("No time available.");

						};

						var formatTime = hours + ":" + minutes;
						formatTime+= (isPM) ? " PM" : " AM";

						timeButton.attr('movie-time', time);
						timeButton.text(formatTime);

						// if (movie.showtimes[i].theatre.id === $(+)) {}

					};
				};	

			};
		})
	}

	$('#submit').on('click', function() {

		theatreLocation();
		theatreTime();
	});

})
