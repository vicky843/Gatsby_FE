/**
 * 
 */
'use strict';

app.controller('Blogcontroller', [ 'Blogservice', '$rootScope', '$location',
		'$http', function(Blogservice, $rootScope, $location, $http ) {
			console.log("blog creation")
			var blo = this;
			blo.blogs = {
				blogname : '',
				description : '',
				blogid : '',
				status : '',
				dateadded : '',
				username : ''
			};
			blo.save = function(blogs) {
				console.log("saving blogfecntrl")
				Blogservice.save(blogs).then(function(bloging) {
					blo.blogs = bloging;
					console.log("bloging")
					console.log("savedd blog")
				/*	$location.path('/home')*/
				})
			};
			blo.submitbt = function() {
				console.log("submitsaveblog")
				blo.save(blo.blogs);
				$location.path('/home')
			};

		}

])