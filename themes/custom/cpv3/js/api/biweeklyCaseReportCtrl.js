/**
 * File: biweeklyCaseReport.js
 * Author: Humbal
 * Created date: 05/26/2018
 * Updated date: 11/26/2018
 */

var appBW = angular.module('appBW', ['ngResource','ngRoute','ngAnimate','ngSanitize', 'ui.bootstrap'])
.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
})
.filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
})
.service('biweeklyCaseReportService', function($http) {
	this.getData = function (type, year) {
		return $http.get("http://161.149.221.137/dcpapi/general/biweeklycase/"+type+"/"+year);
	}
})

.controller('biweeklyCaseReportCtrl', ['$scope', '$sce', '$filter', '$timeout', '$http', 'biweeklyCaseReportService', 
	function($scope, $sce, $filter, $timeout, $http, biweeklyCaseReportService) {
		$scope.enable = "false";
		$scope.loadingText = "Loading ...";
		$scope.caseType = 'CD';
		
		// case type
		$scope.caseTypes = {
			availableOptions: [
				{id: 'CD', name: 'Council District'},
				{id: 'CNC', name: 'Certified Neighborhood Council'},
				{id: 'CPA', name: 'Community Plan Area'},
			]
		}; 
	
		// generate years list
		var d = new Date();
	    var current_year = d.getFullYear();
	    var start_date = current_year;
	    var end_date = 2000;
	    var date_options = [];
	    while(start_date >= end_date) {
	    	date_options.push(end_date);
			end_date++;
	    }

	    date_options.sort(function(a, b){return b-a});
	    $scope.year = {
    		model: null,
	         availableOptions: date_options,
	         selectedOption: current_year
	     };
     
	    // display data case type wise
	    $scope.$watch('caseType', function(newCaseType) {
	    	if (newCaseType){
				 var selectedYear = $scope.year.selectedOption;
				 biweeklyCaseReportService.getData(newCaseType, selectedYear).then(function (response) {
					$scope.data = response.data.Entries;
					$scope.getTitle(newCaseType);
					
					// loading icon
					 $timeout(function() {
						 $scope.enable = true;
						 $scope.loadingText = '';
					}, 2000);
				 });
	    	}
	    });


	    // display data datewise
	    $scope.$watch('year.selectedOption', function(newDate) {
	    	if (newDate) {
	    		 var caseType = $scope.caseType;
	    		 biweeklyCaseReportService.getData(caseType, newDate).then(function (response) {
	    			 $scope.data = response.data.Entries;
	    		 });
	    	 }
	     });
     
	    $scope.getTitle = function (id) {
	    	var title = '';
	    	switch (id) {
	    		case 'CD':
	    			$scope.title = 'Council District'; 
				 	break;
	    		case 'CNC':
	    			$scope.title = 'Certified Neighborhood Council'; 
			 		break;
			 	default:
			 		$scope.title = 'Community Plan Area'; 
	    	 }
	    	 //return title;
	    }
}]);

