
var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider)
		{
	$routeProvider
		
.when('/',{
	templateUrl : 'g_home/home.html'
	})
	.when('/home',{
		templateUrl :'g_home/home.html'
	})
	.otherwise({
		redirectTo: "/"
	})
	
		});