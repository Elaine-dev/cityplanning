/**
 * File: hearingsCtrl.js
 * Author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 03/17/2017
 * Update date: 03/27/2019
 * Version: 1.1
 */

'use strict';

var appHearing = angular.module('appHearing', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('hearingsService', function($http) {
		this.getHearing = function (apc, year) {
			return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/hearings/"+year);
		}
	});

appHearing.config(function($interpolateProvider, $locationProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	
	// Enabled html5Mode to get query string.
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});

appHearing.controller('hearingsCtrl', ['$scope', '$sce', '$location', 'hearingsService', '$filter','$timeout', 
	function($scope, $sce, $location, hearingsService, $filter, $timeout) {
		$scope.apcAreas = {
			availableOptions: [ 
				{id: 'northvalley', name: 'North Valley' },
				{id: 'southvalley', name: 'South Valley'},
				{id: 'westlosangeles', name: 'West Los Angeles'},
				{id: 'centrallosangeles', name: 'Central Los Angeles'},
				{id: 'eastlosangeles', name: 'East Los Angeles'},
				{id: 'southlosangeles', name: 'South Los Angeles'},
				{id: 'harbor', name: 'Harbor'},
				{id: 'all', name: 'All'}
			],
		};
		
		/**
		 * Check if query string has a paramerter or not. If not, set default value 'all'.
		 * Format for query string :  <base_url>/about/hearings?q=centrallosangeles
		 */ 
		var query_string = $location.search();
		$scope.apc = (query_string.q !== undefined) ? query_string.q : 'all';
	
		$scope.enable = "false";
		$scope.loadingText = "Loading ...";
	
		$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
		var date = $scope.date;
		$scope.assignDate = $filter('date')(new Date(), 'M/d/yyyy');
		
		$scope.$watch ('apc', function(newAPC) {
			if(newAPC) {
				var selectedYear = $scope.date;
				hearingsService.getHearing(newAPC, selectedYear).then(function (response){
					$scope.hearings = response.data.Entries;
					$scope.dates = response.data.Years;
					$scope.planningAreaTitle = response.data.APCTitle;
					$timeout(function(){
			            $scope.enable = "true";
			           $scope.loadingText = "";
			        }, 2000);
				});
			}
		});
		
		$scope.$watch('date', function(newYear){
			if (newYear) {
				var apc = $scope.apc;
				hearingsService.getHearing(apc, newYear).then(function (response){
					$scope.hearings = response.data.Entries;
					$scope.planningAreaTitle = response.data.APCTitle;
				});
			}
		});
	
	//console.log($scope);
}]);
