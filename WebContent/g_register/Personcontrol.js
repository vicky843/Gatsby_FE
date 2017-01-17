/**
 * 
 */
app.controller('Personcontroller', [ 'Personservice', '$rootScope','$location',
		'$location', '$http',
		function(Personservice, $rootScope, $location, $http,$location) {
			console.log("in personcontroler")
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
					console.log("working")
				})

			};
			// submit button part
			self.submitbtn = function() {
				self.register(self.preg)
				console.log("in save process")
				$location.path('/home')
			};
/*//fetching users
			self.getallusers=function()
			{
				self.fetchAllUsers().then(
				function(fetch){
					var self=fetch;
					console.log(self);
					return fetch;
					
					
				}		
				)
				
				
				
			}
			*/
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
						if(ctrl.preg.status=="Admin")
							$location.path("/Admin");
						}
					else (ctrl.preg.status=="Alumni"||ctrl.preg.status=="Student"||ctrl.preg.status=="Employee")
				$location.path("/home");
				})
			}
		
			self.submit=function(){
				self.loginauthenicate(self.preg)
				console.log("in login process")
				/*$location.path('/home')*/
			}
			

} ])