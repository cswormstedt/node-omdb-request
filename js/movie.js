var  http = require('http');


function movieTitle(title){
	var request = http.get('http://www.omdbapi.com/?t=' + title, function(response){
		console.log('got response' + response.statusCode);
		var body ="";

		response.on('data', function(chunk){
			// console.log('BODY: ' + chunk)
			body += chunk
		})
		response.on('end', function(){
			if(response.statusCode === 200){
				// console.log(typeof body);
				var movie = JSON.parse(body);
				// console.log(movie);
				console.log(movie.Title);
				console.log("Genre: " + movie.Genre);
				console.log("Directed by " + movie.Director);
				console.log(movie.Awards);
			}
			else {
				console.log("error")
			}
		})
	})
}

// movieTitle("the empire strikes back");

module.exports.get = movieTitle;