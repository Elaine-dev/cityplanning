'use strict';

var app = angular.module('appEventDetail', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('eventDetailService', function($http){
		this.getRecord = function(q) {
			return $http.get("http://10.68.8.144/dcpapi/meetings/upcoming/calendar/"+q);
		}
});

app.config(function($interpolateProvider, $locationProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	
	// Enabled html5Mode to get query string.
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});

app.controller('EventDetailCtrl', ['$scope', 'eventDetailService', '$timeout', '$location', function($scope, hpozService, $timeout, $location) {
	var query_string = $location.search();
	var q = (query_string.q !== undefined) ? query_string.q : 'null';
		
	hpozService.getRecord(q).then(function(response) {
		$scope.data = response.data;
		//console.log($scope.data);
	});
}]);