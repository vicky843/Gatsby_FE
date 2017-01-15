/**
 * 
 */


app.controller('Personcontrol',['Personservice','$rootScope','$location',
                                function($rootScope,$location)
           {                    
	console.log("in personcontroler")
	var self=this;
	self.person={username:'',mobile:'',password:'',email:'',dateofbirth:'',role:''};
	
self.register=function(person){
	console.log("registerfecntrl")
Personservice.register(person)
.then(function(errorresponse)
{
	console.log("working")
	}		
)

};
self.submitbtn=function()
{
	self.register(person)
	console.log("in save process")
	$location.path('/home')
	};
           }])