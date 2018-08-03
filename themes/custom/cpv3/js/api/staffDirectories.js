/**
 * File: staffDirectories.js
 * Author: Humbal
 * Created date: 05/21/2018 
 * Created date: 05/21/2018
 */
 
'use strict';
var app = angular.module('appStaffDirectory', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
	.service('staffDirService', function($http){
		this.getRecord = function() {
			return $http.get('http://161.149.221.142/dcpapi/general/phonelist/');
		}
	})
	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});

app.controller('staffDirectoryCtrl', ['$scope', 'staffDirService', function($scope, staffDirService){
	staffDirService.getRecord().then(function(response){
		$scope.data = response.data;
		//console.log($scope.data);
	});
}]);