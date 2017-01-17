/**
 * 
 */
app.controller('Personcontroller',['Personservice','$rootScope','$location','$http',
                                function(Personservice,$rootScope,$location,$http)
           {                    
	console.log("in personcontroler")
	var self=this;
	self.preg={
			username:'',mobile:'',password:'',email:'',dateofbirth:'',role:'',address:'',status:''
				};
	
	//registering part
self.register=function(preg){
	console.log("registerfecntrl")
Personservice.register(preg)
.then(function(reg)
{
	self.preg=reg;
	console.log(reg)
	console.log("working")
	}		
)

}
//submit button part
self.submitbtn=function()
{
	self.register(self.preg)
	console.log("in save process")
	$location.path('/home')
	}
           }])