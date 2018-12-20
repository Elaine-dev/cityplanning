/**
 * File: adoptedOrdinances.js
 * Author: Humbal
 * Created date: 06/25/2018
 * Updated date: 09/10/2018
 */

var appOrdi = angular.module('appOrdinances', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('adopOrdinanceService', function($http) {
		this.getRecord = function () {
			return $http.get("/api/v1/adopted-ordinance/");
		}
	})
	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});

appOrdi.controller('adopOrdinanceCtrl', ['$scope', '$sce', 'adopOrdinanceService', '$filter', '$timeout', function($scope, $sce, adopOrdinanceService, $filter, $timeout) {
	$scope.pageSize = 15;
	$scope.currentPage = 1;
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";

	adopOrdinanceService.getRecord().then(function(response){
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