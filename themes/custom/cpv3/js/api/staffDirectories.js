/**
 * File: staffDirectories.js
 * Author: Humbal
 * Created date: 05/21/2018 
 * Updated date: 05/21/2018
 */
 
'use strict';
var app = angular.module('appStaffDirectory', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
	.service('staffDirService', function($http){
		this.getRecord = function() {
			return $http.get('https://planning.lacity.org/dcpapi/general/phonelist/');
		}
	})
	.config(function($interpolateProvider, $locationProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		
		// Enabled html5Mode
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		$locationProvider.hashPrefix('!');
	});

app.controller('staffDirectoryCtrl', ['$scope', 'staffDirService', function($scope, staffDirService){
	staffDirService.getRecord().then(function(response){
		$scope.data = response.data;
		//console.log($scope.data);
	});
}]);
