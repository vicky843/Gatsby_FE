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
	
	.when('/createblog',
	{
		templateUrl:'g_blog/createblog.html',
		controller:'Blogcontroller'
			
		
	})
	.when('/viewblog',
			{
		templateUrl:'g_blog/viewblog.html',
			controller:'Blogcontroller'
				
			})
			
	.otherwise({
		 redirectTo:'/'
		 })
	
	
		})