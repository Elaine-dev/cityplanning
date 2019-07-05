'use strict';

var app = angular.module('appHPOZ', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('hpozService', function($http){
		this.getRecord = function(q) {
			return $http.get("https://planning.lacity.org/dcpapi/meetings/upcoming/calendar/"+q);
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

app.controller('HPOZCtrl', ['$scope', 'hpozService', '$timeout', '$location', function($scope, hpozService, $timeout, $location) {
	// https://planning.lacity.org/dcpapi/meetings/upcoming/calendar/628ef369a44bd01945eb433ae373510f
	var query_string = $location.search();
	var q = (query_string.q !== undefined) ? query_string.q : 'null';
		
	hpozService.getRecord(q).then(function(response) {
		$scope.data = response.data;
		console.log($scope.data);
	});
}]);