const mongoose = require('mongoose');

// Movie Schema
const movieSchema = mongoose.Schema({
	title:{
		type: String 
	},
	description:{
		type: String
	},
	director:{
		type: String
	},
	year:{
		type: String
	},
    screenwriter:{
		type: String
	},
    genre:{
		type: String
	},
    rate:{
		type: String
	}
});

const Movie = module.exports = mongoose.model('Movie', movieSchema);

// Get Movies
module.exports.getMovies = (callback, limit) => {
	Movie.find(callback).limit(limit);
}

// Get Movie
module.exports.getMovieById = (id, callback) => {
	Movie.findById(id, callback);
}

// Add Movie
module.exports.addMovie = (movie, callback) => {
	Movie.create(movie, callback);
}

// Delete Movie
module.exports.removeMovie = (id, callback) => {
	var query = {_id: id};
	Movie.remove(query, callback);
}
