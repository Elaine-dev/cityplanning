(function () {
    "use strict";

    angular.module('appNDPN', ['ngResource','ngRoute','ngAnimate','ngSanitize', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})
       
       .controller('negativeDeclarationCtrl', function ($scope, $timeout, $http, filterFilter, noticeService) {
           $scope.enable = "false";
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
               $scope.selectedDate = newDate;
               if(newDate) {
                    noticeService.getNotice(newDate, 0, 0).then(function(response){
                        $timeout(function(){
                            $scope.enable = "true";
                            $scope.loadingText = "";
                        }, 2000);
                        // console.log(response);
                        $scope.events = response;
                        self.data = response.data.data;
                        $scope.total = response.data.total_count;
                        $scope.data =  response.data.data;
                    });
               }
           });
            // console.log(self.data);

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

	        self.expandAll = function (expanded) {
	            // $scope is required here, hence the injection above, even though we're using "controller as" syntax
	        	$scope.$broadcast('onExpandAll', {expanded: expanded});
	        };
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
				    return data.slice(start);
                }
			}
		})
        .service('noticeService', function($http){
            this.getNotice = function(date, page, number) {
                return $http.get(siteurl + '/rest/api/negativedeclaration/'+date+'/'+page+'/'+number, {cache: false});
            }
        });
}());