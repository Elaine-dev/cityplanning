/**
 * File: negativeDeclarationCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/25/2017
 */

(function () {
    "use strict";

    angular.module('appNDPN', ['ngResource','ngRoute','ngAnimate', 'ui.bootstrap'])
    	.config(function($interpolateProvider) {
    		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		})
       /*.service('NegativeDeclaration', function ($http) {
    	   this.getData = function() {
    		   return $http.get('./negative-declaration.json');
    	   }
       })*/
       .controller('negativeDeclarationCtrl', function ($scope, $timeout) {
        	$scope.enable = "false";
        	$scope.loadingText = "Loading ...";
        	
            var self = this;
            self.data = [
                     	{
                    		"date": "2017-02-23",
                    		"negativeDeclaration": "NG-17-025-PL",
                    		"caseNumber": "ENV-2016-1040",
                    		"address": "1005-1013 Everett St; Silver Lake-Echo Park-Elysian Valleye",
                    		"counsilDistrict": "CD1",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-A",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-A.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-B",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-B.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-C-1",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-C-1.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-C-2",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-C-2.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-D-1",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-D-1.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-D-2",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-D-2.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-D-3",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-D-3.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-D-4",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-D-4.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-E-1",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-E-1.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-1040-E-2",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-1040-E-2.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-23",
                    		"negativeDeclaration": "NG-17-026-PL",
                    		"caseNumber": "ENV-2016-2477",
                    		"address": "1370, 1374, 1410, & 1416-1418 S Flower St; Central City",
                    		"counsilDistrict": "CD14",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-2477",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-2477.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-2477-Appendices",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-2477-Appendices.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-23",
                    		"negativeDeclaration": "NG-16-365-PL",
                    		"caseNumber": "ENV-2016-2995",
                    		"address": "3242 W 8th St & 811 S Mariposa Ave; Wilshire",
                    		"counsilDistrict": "CD10",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_022317.htm#1040",
                    				"caseNumber": "ENV-2016-2995",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_022317/ENV-2016-2995.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-16",
                    		"negativeDeclaration": "NG-17-021-PL",
                    		"caseNumber": "ENV-2016-1081",
                    		"address": "929 E 2nd St; Central City North",
                    		"counsilDistrict": "CD14",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-A",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-A.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-B",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-B.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-C",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-C.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-D",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-D.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-E",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-E.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-F",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-F.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#1081",
                    				"caseNumber": "ENV-2016-1081-G",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-1081-G.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-16",
                    		"negativeDeclaration": "NG-17-020-PL",
                    		"caseNumber": "ENV-2016-273",
                    		"address": "3401-3437 N Pasadena Ave & 123-167 W Ave. 34; Northeast Los Angeles",
                    		"counsilDistrict": "CD1",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-273",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-273.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-273-A-B",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-273-A-B.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-273-C-D",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-273-C-D.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-273-E-G",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-273-E-G.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-273-H-J",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-273-H-J.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-16",
                    		"negativeDeclaration": "NG-17-022-PL",
                    		"caseNumber": "ENV-2016-4078",
                    		"address": "2110 W Sunset Blvd; Silver Lake-Echo Park-Elysian Valley",
                    		"counsilDistrict": "CD13",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#273",
                    				"caseNumber": "ENV-2016-4078",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-4078.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-16",
                    		"negativeDeclaration": "NG-17-023-PL",
                    		"caseNumber": "ENV-2016-4118",
                    		"address": "5701 N Etiwanda Ave; Encino-Tarzana",
                    		"counsilDistrict": "CD3",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#4078",
                    				"caseNumber": "ENV-2016-4118",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-4118.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-16",
                    		"negativeDeclaration": "NG-17-024-PL",
                    		"caseNumber": "ENV-2016-4553",
                    		"address": "4939 E York Blvd; Northeast Los Angeles",
                    		"counsilDistrict": "CD14",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_021617.htm#4553",
                    				"caseNumber": "ENV-2016-4553",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_021617/ENV-2016-4118.pdf"
                    			}
                    		]
                    	},
                    	{
                    		"date": "2017-02-09",
                    		"negativeDeclaration": "NG-17-018-PL",
                    		"caseNumber": "ENV-2014-4943",
                    		"address": "992 S Arapahoe St; Wilshire",
                    		"counsilDistrict": "CD1",
                    		"caseNumbers": [
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_020917.htm#4943",
                    				"caseNumber": "ENV-2014-4943",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_020917/ENV-2014-4943.pdf"
                    			},
                    			{
                    				"laTimesURL": "https://planning.lacity.org/eir/publication/Pub_020917.htm#4943",
                    				"caseNumber": "ENV-2014-4943-A",
                    				"doc": "http://cityplanning.lacity.org/staffrpt/mnd/Pub_020917/ENV-2014-4943-A.pdf"
                    			}
                    		]
                    	}
                    ];

            self.expandAll = function (expanded) {
                // $scope is required here, hence the injection above, even though we're using "controller as" syntax
            	$scope.$broadcast('onExpandAll', {expanded: expanded});
            };
            
            $timeout(function(){
        		$scope.enable = "true";
                $scope.loadingText = "";
            }, 2000);

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
        });
}());