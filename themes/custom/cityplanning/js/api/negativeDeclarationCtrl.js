(function () {
    "use strict";

    angular.module('appNDPN', ['ngResource','ngRoute','ngAnimate', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})
       
       .controller('negativeDeclarationCtrl', function ($scope, $timeout, $http, filterFilter) {
        	$scope.enable = "false";
        	$scope.loadingText = "Loading ...";
        	$scope.pageSize = 3;
			$scope.currentPage = 1;
			// $scope.x = [];

            var self = this;
               // Extract data from json file
               $http({
                   method: 'POST',
                   url: siteurl + '/file/notice.json',
               }).then( function(response) {
                   $scope.events = response;
                   self.data = response.data;
                   $scope.total = response.data.length;
                   $scope.data =  response.data;
               });


           // $watch search to update pagination
           $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
           $scope.$watch('negativeDeclaration', function (newVal, oldVal) {
               $scope.filtered = filterFilter($scope.data, newVal);
               $scope.total = $scope.filtered.length;
               $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
               $scope.currentPage = 1;
           }, true);
               

            // self.data = [{"caseNumber":"NG-17-030-PL","address":"<p>1370, 1374, 1410, &amp; 1416-1418 S Flower St; Kathmandu City<\/p>\r\n","date":"2017-09-13","counsilDistrict":"CD21","caseNumbers":[{"laTimesURL":"http:\/\/example.com","caseNumber":"Test Case NO","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-09\/pdf-1.pdf"}]},{"caseNumber":"NG-17-026-PL","address":"<p>1370, 1374, 1410, &amp; 1416-1418 S Flower St; Central City<\/p>\r\n","date":"2017-02-23","counsilDistrict":"CD14","caseNumbers":[{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-2477","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_2.pdf"}]},{"caseNumber":"NG-17-025-PL","address":"<p>1005-1013 Everett St; Silver Lake-Echo Park-Elysian Valleye<\/p>\r\n","date":"2017-02-23","counsilDistrict":"CD1","caseNumbers":[{"laTimesURL":"http:\/\/humble.com.np\/beta2\/archieves\/pdf-1.pdf","caseNumber":"ENV-2016-1040","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1.pdf"},{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-1040-A","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_0.pdf"},{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-1040-B","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_1.pdf"}]}];

            self.expandAll = function (expanded) {
                // $scope is required here, hence the injection above, even though we're using "controller as" syntax
            	$scope.$broadcast('onExpandAll', {expanded: expanded});
            };
            
            $timeout(function(){
        		$scope.enable = "true";
                $scope.loadingText = "";
            }, 2000);
            
            console.log($scope.data);

        })
        .directive('expand', function () {
            return {
                restrict: 'A',
                controller: ['$scope', function ($scope) {
                    $scope.$on('onExpandAll', function (event, args) {
                        $scope.expanded = args.expanded;
                    });
                }]
            };
        })
        .filter('startFrom', function(){
			return function(data, start){
				start = 0 + start;
				return data.slice(start);
			}
		});
}());