/**
 * File: latestCaseReportCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 09/24/2019
 * Updated date: 09/24/2019
 */

(function () {
    "use strict";

    angular.module('appLatestCases', ['ngResource','ngRoute','ngAnimate','ngSanitize', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})

       .controller('latestCaseCtrl', function ($scope, $timeout, $http, filterFilter, caseService) {
           $scope.enable = true;
           $scope.loadingText = "Loading ...";
           $scope.pageSize = 20;
           $scope.currentPage = 1;
           
           var self = this;
         
            caseService.getData(0, 0).then(function(response){
            	$scope.enable = true;
                $scope.events = response;
                self.data = response.data;
                $scope.total = response.data.length;
                $scope.data =  response.data;
                
                // console.log($scope);
                
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
           $scope.$watch('lastestCases', function (newVal, oldVal) {
               $scope.filtered = filterFilter($scope.data, newVal);
               if(typeof $scope.filtered != 'undefined' || $scope.filtered != null) {
                   $scope.total = $scope.filtered.length;
               }
               $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
               $scope.currentPage = 1;
           }, true);

        })

        .filter('startFrom', function(){
			return function(data, start){
				start = 0 + start;
				if(typeof data != 'undefined' || data != null) {
				    return data.slice(start);
                }
			}
		})
        .service('caseService', function($http) {
            this.getData = function(page, number) {
                return $http.get('https://planning.lacity.org/dcpapi/general/NewCases/'+page+'/'+number, {cache: false});
            }
        });
}());