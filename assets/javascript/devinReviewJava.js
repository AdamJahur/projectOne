$(document).ready(function () {

	function renderReview () {

		var query = {
			api_key: "0735005732556ad68ab1353886fe6517",
		}

		var queryURL = "http://api.rottentomatoes.com/api/public/v1.0.json?" + $.param(query);

		console.log(queryURL);
	}

	console.log("Test");
	renderReview();
});

// $('.media-object').clone().appendTo('#panel1');