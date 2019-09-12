/**
 * File: sceaCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 08/06/2019
 * Updated date: 09/12/2019
 */

(function () {
    "use strict";

    angular.module('appSCEA', ['ngResource','ngRoute','ngAnimate','ngSanitize', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})

       .controller('sceaCtrl', function ($scope, $timeout, $http, filterFilter, sceaService) {
           $scope.enable = true;
           $scope.loadingText = "Loading ...";
           $scope.pageSize = 20;
           $scope.currentPage = 1;
           
           var self = this;
         
            sceaService.getData(0, 0).then(function(response){
            	$scope.enable = true;
                $scope.events = response;
                self.data = response.data.data;
                $scope.total = response.data.total_count;
                $scope.data =  response.data.data;
                
                //console.log($scope.data);
                
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
           $scope.$watch('scea', function (newVal, oldVal) {
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
        .service('sceaService', function($http) {
            this.getData = function(page, number) {
                return $http.get(siteurl + '/rest/api/scea/'+page+'/'+number, {cache: false});
            }
        });
}());