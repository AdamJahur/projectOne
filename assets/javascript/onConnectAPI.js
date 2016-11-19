$(document).ready(function () {

	function zipCode () {

		var query = {
			api_key: "26ghhgmvg4vrn4eq7ctg236f"
		}

		var queryURL = "http://data.tmsapi.com/v1.1/theatres?zip=78701&api_key=26ghhgmvg4vrn4eq7ctg236f"

		console.log(queryURL);

		var request = {
			url: queryURL,
			method: 'GET'
		}

		$.ajax(request).done(function(respone) {

			console.log(response);

		})
	}

	zipCode();
})

