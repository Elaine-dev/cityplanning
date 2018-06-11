/**
 * File: hearingsCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 03/17/2017
 */

'use strict';

var appHearing = angular.module('appHearing', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('hearingsService', function($http) {
		this.getHearing = function (apc, year) {
			return $http.get("http://161.149.221.142/dcpapi/meetings/api/"+apc+"/hearings/"+year);
		}
	});

appHearing.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appHearing.controller('hearingsCtrl', ['$scope', '$sce', 'hearingsService', '$filter','$timeout', function($scope, $sce, hearingsService, $filter, $timeout){
	 $scope.enable = "false";
	 $scope.loadingText = "Loading ...";
	
	$scope.apc = 'northvalley';
	$scope.apcAreas = {
		availableOptions: [ 
		        {id: 'cpc', name: 'City Planning Commisson'},
				{id: 'culturalheritagecommission', name: 'Cultural Heritage Commission'},
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
	
	console.log($scope);
	
}]);