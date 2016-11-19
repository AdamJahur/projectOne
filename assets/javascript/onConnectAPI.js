$(document).ready(function () {

	function zipCode () {

		var query = {
			zip: "32765",
			api_key: "gpsby6z4y9kttvza5n2yyqha"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-11-19&zip=78701&api_key=gpsby6z4y9kttvza5n2yyqha"

		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(respone) {


		})
	}

	zipCode();
})