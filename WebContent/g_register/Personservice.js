/**
 * 
 */
app.service('Personservice',['$http',function($http){
	console.log("personservice")
	/*var URL='http://localhost:8093/Gatsby_BE/';*/
	var URL='http://localhost:4000/Gatsby_BE/';
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
	},
	
	fetchAllUsers:function()
	{
		console.log("fetchingusersservice")
		return $http.get(URL+'/personlist').then
		(function(response)
				{
			console.log("fetchuserservice2")
			var fe=response.data;
			return fe;
			
				},null)
		
	}
	}

}
   ])