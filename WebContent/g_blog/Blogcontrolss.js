/**
 * 
 */


app.controller('Blogcontroller', [ 'Blogservice', '$rootScope', '$location',
		'$http', function(Blogservice, $rootScope, $location, $http ) {
			console.log("blog creation")
			var bloge = this;
			
			bloge.blogs = {
				blogname : '',
				description : '',
				blogid : '',
				status : '',
				dateadded : '',
				username : ''
			};
			bloge.alblog=[];
			console.log("blogservice")
			bloge.save = function(blogs) {
				console.log("saving blogfecntrl")
				Blogservice.save(blogs).then(function(bloging) {
					bloge.blogs = bloging;
					console.log("bloging")
					console.log("savedd blog")
				/*	$location.path('/home')*/
					bloge.fetchblogs();
				})
			};
			bloge.submitbt = function() {
				console.log("submitsaveblog")
				bloge.save(bloge.blogs);
				$location.path('/home')
			};

		},
/*
blo.fetchblogs=function(){
	Blogservice.allblog().then
	(function(b){
		blo.bloging=b;
	}
			)
},*/
	

])