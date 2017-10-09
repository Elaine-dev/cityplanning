(function () {
    "use strict";

    angular.module('appNDPN', ['ngResource','ngRoute','ngAnimate','ngSanitize', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})
       
       .controller('negativeDeclarationCtrl', function ($scope, $timeout, $http, filterFilter, noticeService) {
           $scope.enable = true;
           $scope.loadingText = "Loading ...";
           $scope.pageSize = 20;
           $scope.currentPage = 1;

           // generate year list.
           // Get current year
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
           var self = this;
           $scope.$watch('year.selectedOption', function(newDate){
               $scope.enable = true;
               $scope.selectedDate = newDate;
               if(newDate) {
                    noticeService.getNotice(newDate, 0, 0).then(function(response){
                        // console.log(response);
                        $scope.events = response;
                        self.data = response.data.data;
                        $scope.total = response.data.total_count;
                        $scope.data =  response.data.data;
                    }).finally(function(){
                        $scope.enable = false;
                    });
               }
           });
            // console.log(self.data);


           // var self = this;
           // $scope.$watch('currentPage', function(currentPage){
           //     $scope.selectedPage = currentPage;
           //     if(typeof $scope.selectedDate == 'undefined') {
           //         var date = current_year;
           //     } else {
           //         var date = $scope.selectedDate;
           //     }
           //     if(currentPage) {
           //         var page = currentPage-1;
           //         noticeService.getNotice(date, page, 50).then(function(response){
           //             // console.log(response);
           //             $timeout(function(){
           //                 $scope.enable = "true";
           //                 $scope.loadingText = "";
           //             }, 2000);
           //
           //             $scope.events = response;
           //             self.data = response.data.data;
           //             $scope.total = response.data.total_count;
           //             $scope.data =  response.data.data;
           //         });
           //     }
           // });

            // var self = this;
            //    // Extract data from json file
            //    $http({
            //        method: 'GET',
            //        url: siteurl + '/rest/api/notice/2017/0/5',
            //    }).then( function(response) {
            //        $scope.events = response;
            //        self.data = response.data.data;
            //        $scope.total = response.data.total_count;
            //        $scope.data =  response.data.data;
            //    });


           // $watch search to update pagination
           $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
           $scope.$watch('negativeDeclaration', function (newVal, oldVal) {
               $scope.filtered = filterFilter($scope.data, newVal);
               if(typeof $scope.filtered != 'undefined' || $scope.filtered != null) {
                   $scope.total = $scope.filtered.length;
               }
               $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
               $scope.currentPage = 1;
           }, true);

            // self.data = [{"caseNumber":"NG-17-030-PL","address":"<p>1370, 1374, 1410, &amp; 1416-1418 S Flower St; Kathmandu City<\/p>\r\n","date":"2017-09-13","counsilDistrict":"CD21","caseNumbers":[{"laTimesURL":"http:\/\/example.com","caseNumber":"Test Case NO","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-09\/pdf-1.pdf"}]},{"caseNumber":"NG-17-026-PL","address":"<p>1370, 1374, 1410, &amp; 1416-1418 S Flower St; Central City<\/p>\r\n","date":"2017-02-23","counsilDistrict":"CD14","caseNumbers":[{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-2477","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_2.pdf"}]},{"caseNumber":"NG-17-025-PL","address":"<p>1005-1013 Everett St; Silver Lake-Echo Park-Elysian Valleye<\/p>\r\n","date":"2017-02-23","counsilDistrict":"CD1","caseNumbers":[{"laTimesURL":"http:\/\/humble.com.np\/beta2\/archieves\/pdf-1.pdf","caseNumber":"ENV-2016-1040","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1.pdf"},{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-1040-A","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_0.pdf"},{"laTimesURL":"http:\/\/www.cnn.com\/2017\/08\/28\/politics\/north-korea-launch-unidentified-projectile\/index.html","caseNumber":"ENV-2016-1040-B","doc":"http:\/\/localhost\/drupal\/scratch\/sites\/default\/files\/2017-08\/pdf-1_1.pdf"}]}];

            self.expandAll = function (expanded) {
                // $scope is required here, hence the injection above, even though we're using "controller as" syntax
            	$scope.$broadcast('onExpandAll', {expanded: expanded});
            };
            
            // $timeout(function(){
        		// $scope.enable = "true";
            //     $scope.loadingText = "";
            // }, 2000);

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
				if(typeof data != 'undefined' || data != null) {
				    console.log(start);
				    console.log(data);
				    return data.slice(start);
                }
			}
		})
        .service('noticeService', function($http) {
            this.getNotice = function(date, page, number) {
                // console.log(siteurl + '/rest/api/negativedeclaration/'+date+'/'+page+'/'+number, {cache: false});
                return $http.get(siteurl + '/rest/api/negativedeclaration/'+date+'/'+page+'/'+number, {cache: false});
            }
        });
}());