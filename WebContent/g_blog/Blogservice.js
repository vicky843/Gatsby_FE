/**
 * 
 */
app.service('Blogservice',['$http',function($http)
                           {
                           console.log("blogservice")
                           var Utl="http://localhost:4000/Gatsby_BE/";
                           
return{
	
	save:function(blogs){
		return $http.post(Utl+'/saveblog',blogs)
		.then (function(response){
		console.log("saveblogservice")
			var m=response.data;
		return m;
		})
		
		
		
	}
	
}                           
                           
                           
                           }])









