$(document).ready(function () {

	var movieTitle = "Doctor Strange";

	function zipCode () {

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
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

			// console.log(response[0].title);

			for (i = 0; i < response.length; i++) {
				
				if(response[i].title === "Doctor Strange") {
					console.log(response[i].title);
				}
			}

		})
	}

	zipCode();
})

