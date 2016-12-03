$(document).ready(function () {

    var counter = 0;
    var movieTitle = localStorage.getItem('movieTitle');

    $('#description').html(movieTitle);

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

        var queryURL = "https://data.tmsapi.com/v1.1/theatres?" + $.param(query);

        var request = {
            url: queryURL,
            method: 'GET'
        }

        $.ajax(request).done(function(response) {

            for (i = 0; i < response.length; i++) {

				var theatreDiv = $('<div>');
				var timeDiv = $('<div>');
				timeDiv.addClass('timeDiv' + i + " time");
				timeDiv.attr('id', response[i].theatreId);

                var theatreName = response[i].name;
                var theatreNameDiv = $('<div>');

                theatreNameDiv.text(theatreName);
                theatreNameDiv.attr('theatre-name', theatreName);

                theatreDiv.addClass('theatreDiv');
                theatreDiv.append(theatreNameDiv);
                theatreDiv.append(timeDiv);

                $('#theatreName').append(theatreDiv);

                counter++;

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

            for (i = 0; i < response.length; i++) {
                
                if(response[i].title === movieTitle) {

                    var movie = response[i]
                    
                    for (i = 0; i < movie.showtimes.length; i++) {

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


	$(function() {
		// IMPORTANT: Fill in your client key
		var clientKey = "js-9lXAZk1OMqgcC5WEI65A5ljbHbXa4J4e41O3lPS8g9lSfhwXnCxtXREF2CP6lTkp";
		
		var cache = {};
		var container = $("#zip");
		var errorDiv = container.find("div.text-error");
		console.log(errorDiv);
		
		/** Handle successful response */
		function handleResp(data)
		{
			// Check for error
			if (data.error_msg)
				errorDiv.text(data.error_msg);
					
		// Set up event handlers
		container.find("input[name='zipcode']").on("keyup change", function() {
			// Get zip code
			var zipcode = $(this).val().substring(0, 5);
			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
			{
				// Clear error
				errorDiv.empty();
				
				// Check cache
				if (zipcode in cache)
				{
					handleResp(cache[zipcode]);
				}
				else
				{
					// Build url
					var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
					
					// Make AJAX request
					$.ajax({
						"url": url,
						"dataType": "json"
					}).done(function(data) {
						handleResp(data);
						
						// Store in cache
						cache[zipcode] = data;
					}).fail(function(data) {
						if (data.responseText && (json = $.parseJSON(data.responseText)))
						{
							// Store in cache
							cache[zipcode] = json;
							
							// Check for error
							if (json.error_msg)
								errorDiv.text(json.error_msg);
						}
						else
							errorDiv.text('Request failed.');
					});
				}
			}
		}).trigger("change");
	}});


			for (i = 0; i < counter; i++) {
				
				if ( $('.timeDiv' + i).is(':empty') ) {

					var noShowDiv = $('.timeDiv' + i)
					var timeButton = $('<button type="button" class="btn btn-warning">');
					timeButton.text("No Show Time");

                    noShowDiv.append(timeButton);
                }
            }        
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