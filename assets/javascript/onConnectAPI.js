$(document).ready(function () {

	var movieTitle = localStorage.getItem('movieTitle');

	$('#description').html(movieTitle);

	function theatreLocation () {

		var code = $('#middle-label').val();

		var date = $('#datepicker2').val();

		var radius = $('#radiusSelect').val();

		var counter = 0;

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date,
			radius: radius
		}

		var queryURL = "https://data.tmsapi.com/v1.1/theatres?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			for (i = 0; i < response.length; i++) {

				var theatreDiv = $('<div>');
				var timeDiv = $('<div>');
				timeDiv.addClass('time' + i);
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

		var radius = $('#radiusSelect').val();

		$('#movieTimes').empty();
		$('#theatreName').empty();

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date,
			radius: radius
		}

		var queryURL = "https://data.tmsapi.com/v1.1/movies/showings?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			var counter = 0;

			for (i = 0; i < response.length; i++) {
				
				if(response[i].title === movieTitle) {

					var movie = response[i]
					
					for (i = 0; movie.showtimes.length; i++) {

						// Time

						var timeButton = $('<button type="button" class="btn btn-warning">');
						timeButton.on('click', click);
						timeButton.attr('theatre', movie.showtimes[i].theatre.name);
						var time = movie.showtimes[i].dateTime;
						var theatreId = movie.showtimes[i].theatre.id;


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

						var formatTime = hours + ":" + minutes;
						formatTime+= (isPM) ? " PM" : " AM";

						timeButton.attr('movie-time', time);
						timeButton.text(formatTime);

						// if (movie.showtimes[i].theatre.id === $(+)) {}
					};
				};	
			};

			console.log(counter);
		})
	}

	$('#submit').on('click', function() {

		theatreLocation();
		theatreTime();

	});

	function click () {

		var time = $(this).text();
		var date = $(this).attr('movie-time');
		var theatre = $(this).attr('theatre');

		date = date.substring(0, 10);

		$('#date').html(date);
		$('#start').html(time);
		$('#location').html(theatre);
	}

})
