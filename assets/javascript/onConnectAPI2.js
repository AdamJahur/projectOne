var movies = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-11-17&zip=32822&api_key=gpsby6z4y9kttvza5n2yyqha";
console.log(movies);


$(document).ready(function() {

          

           // send off the query
$.ajax({url: movies, method: 'GET'})
		.done(function(response) {
			console.log(response);

			//for (var movie in response)
		//	{
				//if (movieTitle == movie.title)
				//{
				//	if (movie.showtimes.length > 0)
				//	{
					//	for(var showtime in movie.showtimes)
					//	{
					//		var date = new Date(showtime.datetime);
						//	showtime.theatre.id or showtime.theatre.name
					//	}
				//	}
				//}	
			//}
			
           });

         });