'use strict';

/*app.controller('mapGeographiesCtrl',function($scope, mapGeographiesService) {
	mapGeographiesService.getMapGeographies().then(function(response){
		$scope.mapsGeo = response.data.Entries;
		console.log($scope.mapsGeo);
	});
});
*/

var appMapGeo = angular.module('appMG', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('mapGeoService', function($http){
		this.getMapGeographies = function(){
			return $http.get("map-gallery2.json");
		}
	});

appMapGeo.config(function($interpolateProvider) { 
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appMapGeo.controller('mapGeographiesCtrl', ['$scope', '$sce', 'mapGeoService', '$filter', function($scope, $sce, mapGeoService, $filter) {
	mapGeoService.getMapGeographies().then(function(response) {
		$scope.mapsGeo = response.data.Entries;
		console.log($scope.mapsGeo);
	});
}]);