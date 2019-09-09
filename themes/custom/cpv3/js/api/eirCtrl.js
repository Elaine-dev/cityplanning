/**
 * File: eirCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/09/2017
 * Updated date: 09/05/2019
 */

'use strict';

var appEIR = angular.module('appEIR', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

	appEIR.config(function($interpolateProvider) {
	    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	})
	
	.filter('startFrom', function(){
		return function(data, start){
			start = 0 + start;
			if(typeof data != 'undefined' || data != null) {
			    return data.slice(start);
            }
		}
	});
	
appEIR.controller('eirCtrl', function($scope, $filter, $timeout, $http, filterFilter) {
	$scope.enable = true;
    $scope.loadingText = "Loading ...";
    $scope.pageSize = 25;
    $scope.currentPage = 1;
    
    var self = this;
    $http.get(siteurl + '/file/eir.json').then(function(response) {
    	self.data = response.data;
    	$scope.data = response.data;
    	$scope.total = response.data.length;
    	
    	// loading icon
    	$timeout(function() {
    		$scope.enable = true;
    		$scope.loadingText = '';
    	}, 2000);
    }).finally(function(){
    	$scope.enable = false;
    });
    
    // $watch search to update pagination
    $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
    $scope.$watch('eir', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.data, newVal);
        if(typeof $scope.filtered != 'undefined' || $scope.filtered != null) {
            $scope.total = $scope.filtered.length;
        }
        $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
        $scope.currentPage = 1;
    }, true);  
});