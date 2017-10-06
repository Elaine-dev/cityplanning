app.controller('homepageCtrl', function($scope, homepageService) {
  // Instagram feeds
	homepageService.getInstagramFeed().then(function(response){
    $scope.instaFeeds = response.data;
	});
})
.service('homepageService', function ( $http ){
	this.getInstagramFeed = function () {
		return $http.get("http://ladcp.westus.cloudapp.azure.com/api/v1/instagram/planning4la");
	}
});