var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
	$routeProvider.when('/', {
		controller:'MoviesController',
		templateUrl: 'views/movies.html'
	})
    
	.when('/movies', {
		controller:'MoviesController',
		templateUrl: 'views/movies.html'
	})
    
	.when('/movies/add',{
		controller:'MoviesController',
		templateUrl: 'views/add_movie.html'
	})
    
	.otherwise({
		redirectTo: '/'
	});
});