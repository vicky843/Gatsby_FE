/**
 * 
 */
app.controller('Personcontroller', [ 'Personservice', '$rootScope','$location', '$http','$cookies',
		
		function(Personservice, $rootScope, $location, $http, $cookies) {
			console.log("in personcontroler")
			/* $rootScope.logincookie=$cookies.getObject("logincookie")*/
			var self = this;
			self.preg = {
				username : '',
				mobile : '',
				password : '',
				email : '',
				dateofbirth : '',
				role : '',
				address : '',
				status : ''
			};

			// registering part
			self.register = function(preg) {
				console.log("registerfecntrl")
				Personservice.register(preg).then(function(reg) {
					self.preg = reg;
					console.log(reg)
					console.log("working")//$cookies.remove('loginData')$rootScope.loginData='';
				})

			};
			// submit button part
			self.submitbtn = function() {
				self.register(self.preg)
				console.log("in save process")
				$location.path('/home')
			};
//fetching users
			self.getallusers=function()
			{
				Personservice.fetchAllUsers().then(
				function(fetch){
					var preg=fetch;
					console.log(self);
				},function(errorResponse){
					console.log("error")
				})
					
					
				
				
				
				
			}
			
//loginfunctionality
			self.loginauthenicate=function(preg){
				
				console.log("loginfecontrol");
				Personservice.loginauthenicate(preg).then(
				function(logi)
				{
					self.preg=logi;
					console.log(logi);
					console.log("user.errorcode:"+self.preg.errorcode)
					if(self.preg.errorcode=="200")
						{
						if(self.preg.status=="Admin")
						/*	$location.path("/Admin");*/
							console.log("adminfecontrl")
							$rootScope.logincookie=logi
							$cookies.put('logincookie',logi);/*
							 $cookies.putObject("logincookie",logi)*///it will sets a value to cookie
			        	$location.path("/admin");
						}
					else (self.preg.status=="Alumni"||self.preg.status=="Student"||self.preg.status=="Employee")
                    
							$rootScope.logincookie=logi;           
					$cookies.putObject("logincookie",logi)
                  				
					$location.path("/home");
				})
			}
		
			self.submit=function(){
				self.loginauthenicate(self.preg)
				console.log("in login process")
				/*$location.path('/home')*/
			};
			
//logout functionality
			self.logout=function(){
				console.log("logout");
				$rootScope.logincookie={};
				$cookieStore.remove('logincookie');
				Personservice.logout()
				$location.path("/login")
				
			}
} ])