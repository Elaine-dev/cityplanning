app.controller('homepageCtrl', function($scope, homepageService) {
	// Instagram feeds
	homepageService.getInstagramFeed().then(function(response){
		$scope.instaFeeds = response.data;
	});
})
.service('homepageService', function ( $http ){
	this.getInstagramFeed = function () {
		return $http.get("http://10.68.8.109:2016/ladcp/api/v1/instagram/planning4la");
	}
});