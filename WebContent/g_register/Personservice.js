/**
 * 
 */


app.service('Personservice',['$http',function($http){
	console.log("personservice")
	var URL='http://localhost:8093/Gatsby_BE/';
	
	return{
		register:function(person){
		
		return $http.post(URL+'/person',person)
		.then(function(response){
		console.log("registerservice")
			return response.data;
			
		}
				
		)},
		
	}

}
   ]);