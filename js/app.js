var movie = require("./movie.js");
var threeFavouriteMovies = ["fight club", "the empire strikes back", "pulp fiction"];
threeFavouriteMovies.forEach(function(film){
		console.log(film);
		 return movie.get(film);
});

// movie.get("fight club");
