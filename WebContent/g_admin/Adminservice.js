/**
 * 
 */
app.service('Adminservice',['$http',function($http){
	var URL='http://localhost:4000/Gatsby_BE/';
	return{

 
	statusupdate:function(username,status){
		
		return $http.get(URL+"status/"+username+"/"+status).then
		(function(response) {
			
			console.log("statusupdate")
var ad=response.data;
			return ad;
		}
	)},

	
/*		
   //fetchAllUser
	fetchAllUsers:function(preg){
	return	$http.get(URL+"/personlist").then
		(function(response){
			console.log("list")
			var ads=response.data;
			return ads;
			return response.data;
	})
		},*/
		
		
roleupdate:function(username,role){
		
		return $http.get(URL+"role/"+username+"/"+role).then
		(function(response) {
			console.log("roleupdate")
			var ade=response.data;
			return ade;
		})
	}
	}

}])