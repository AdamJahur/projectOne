$(document).ready(function () {

	function theatreList() {

		var query = {
			radius: 10,
			api_key: "sdapwy7m532tt42yh6y2wf79"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-11-13&zip=32765&" + $.param(query); 
		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			var showName = "Doctor Strange";

			var timeArray = [];

			// console.log(response);

			var divBox = $('<div>');

			for (i = 0; i < response.length; i++) {

				if (showName === response[i].title) {
					console.log(showName);

					var list = response[i].showtimes;
				}
			}

			console.log(list);
				var firstTheatre = list[0].theatre.name;
				console.log(firstTheatre);

			for (i = 0; i < list.length; i++) {


				if (list[i].theatre.name === firstTheatre) {
					var newTheatre = list[i].dateTime;
					console.log(newTheatre);
				} else {
					var secondTheatre = list[i].theatre.name;
					console.log(secondTheatre);
					return;
				}

				if (list[i].theatre.name === secondTheatre) {
					var newTheatre = list[i].dateTime;
				}
			}
		});

	}


	theatreList();
});