/**
 * File: proposedOrdinances.js
 * Author: Humbal
 * Created date: 06/26/2018 
 * Created date: 06/26/2018 
 */

var appOrdi = angular.module('appOrdinances', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('proposedOrdinanceService', function($http) {
		this.getRecord = function () {
			return $http.get("http://ladcp.westus.cloudapp.azure.com/api/v1/proposed-ordinance/");
		}
	})
	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});

appOrdi.controller('proposedOrdinanceCtrl', ['$scope', '$sce', 'proposedOrdinanceService', '$filter', '$timeout', function($scope, $sce, proposedOrdinanceService, $filter, $timeout) {
	$scope.pageSize =  15;
	$scope.currentPage = 1;
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	proposedOrdinanceService.getRecord().then(function(response){
		$scope.data = response.data;
		$scope.total = $scope.data.length;
	});
	
	$timeout(function() {
		$scope.enable = "true";
		$scope.loadingText = "";
    }, 2000);
	
    // $watch search to update pagination
    $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
    $scope.$watch('searchFilter', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.data, newVal);
        if(typeof $scope.filtered != 'undefined' || $scope.filtered != null) {
            $scope.total = $scope.filtered.length;
        }
        $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
        $scope.currentPage = 1;
    }, true);
}]);

appOrdi.filter('startFrom', function() {
	return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
});