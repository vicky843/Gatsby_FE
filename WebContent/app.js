var app = angular.module('myApp', ['ngRoute','ngCookies']);
app.config(function($routeProvider)
		{
	$routeProvider
		
.when('/',{
	templateUrl : 'g_home/home.html'
	})
	.when('/home',{
		templateUrl :'g_home/home.html'
	})
	.when('/register',
	{
		templateUrl :'g_register/register.html',
		controller :'Personcontroller'
		
	})
	.when('/login',
	{
	templateUrl:'g_register/login.html'	,
		controller :'Personcontroller'
	})
	.otherwise({
		 redirectTo:'/'
		 })
	
	
		})