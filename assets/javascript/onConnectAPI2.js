$(document).ready(function () {

	var movieTitle = localStorage.getItem('movieTitle');

	function theatreLocation () {

		var code = $('#middle-label').val();

		var date = $('#datepicker2').val();

		var radius = $('#radiusSelect').val();

		var query = {
			api_key: "c8j5g22c7auwnc6s39v86ep8",
			zip: code,
			startDate: date,
			radius: radius
		}

		var queryURL = "http://data.tmsapi.com/v1.1/showings?" + $.param(query);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(response) {

			console.log(response);
		}
	}
});