/**
 * 
 */
app.controller('Admincontroller',['Adminservice','Personservice','$location', '$http','$rootScope',function($rootScope,Personservice,Adminservice,$location, $http){
	
	var admins=this;
 
	var newusers=[]
	admins.preg={username : '',
			mobile : '',
			password : '',
			email : '',
			dateofbirth : '',
			role : '',
			address : '',
			status : ''	   
	    	   
	 };
	
	
	//getAllUsers
	admins.allUsers=function(){
		Personservice.fetchAllUsers()
	.then(
		function(fetchs){
			console.log("fetching in admincontroller")
			admins.newusers=fetchs;
			},
		function(errorResponse) {
			console.log("error")
		})
		}

	
	admins.statusupdate=function(username,status){
		Adminservice.statusupdate(username,status)
		.then(
			function(d){
	             admins.getallusers();

				},
			function(errorResponse) {
				console.log("error")
			})
			

	}
	
	admins.roleupdate=function(username,role){
		Adminservice.roleupdate(username,role)
		.then(
				
			function(d){
	             admins.getallusers();

				},
			function(errorResponse) {
				console.log("error")
			})

	};
	
             admins.allUsers();

}])
