const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Movie =require('./models/movie');

// POŁĄCZENIE Z MONGOOSE
mongoose.connect('mongodb://localhost/przyrost3');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/movies');
});

// POBRANIE FILMÓW
app.get('/api/movies', (req, res) => {
	Movie.getMovies((err, movies) => {
		if(err){
			throw err;
		}
		res.json(movies);
	});
});

// POBRANIE FILMU
app.get('/api/movies/:_id', (req, res) => {
	Movie.getMovieById(req.params._id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

// DODANIE FILMÓW
app.post('/api/movies', (req, res) => {
	var movie = req.body;
	Movie.addMovie(movie, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

// USUNIĘCIE FILMU
app.delete('/api/movies/:_id', (req, res) => {
	var id = req.params._id;
	Movie.removeMovie(id, (err, movie) => {
		if(err){
			throw err;
		}
		res.json(movie);
	});
});

app.listen(800);
console.log('Running on port 800');
