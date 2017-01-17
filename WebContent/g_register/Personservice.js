/**
 * 
 */
app.service('Personservice',['$http',function($http){
	console.log("personservice")
	var URL='http://localhost:8093/Gatsby_BE/';
	
	return{
		register:function(preg){
		
		return $http.post(URL+'/person',preg)//it will get data from self.person line11.
		.then(function(response){
		console.log("registerservice")
			/*return response.data;
			*/
	var pr=response.data;
		return pr;
	
		}
				
		)},
		
	loginauthenicate:function(preg)
	{
		console.log("fepersonservice");
		return $http.post(URL+'/loginauth',preg).
		then (function(response)
		{
			console.log("fe2service");
			var lo=response.data;
			return lo;
			}		
		)
	}
	}

}
   ])