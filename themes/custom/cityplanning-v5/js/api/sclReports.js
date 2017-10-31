/**
 * File: sclReports.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('appSCLReport', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclReportsCtrl', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
		           	{
		        		"title": "SCL TAC Report - January 2017 Part 1",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/January2017_Part%201.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - January 2017 Part 2",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/January2017_Part%202.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - June 2016",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCL_TAC_Report_2016June.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - September 2015",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCLTACReport2015Sept29.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - April 2015",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCL-TACReport-2015April2Meeting.pdff"
		        	},
		        	{
		        		"title": "SCL TAC Report - December 2014 Part 1",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/TAC_ReportDecember2014_Part1.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - December 2014 Part 2",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/TAC_ReportDecember2014_Part2.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - May 2014",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCL-TAC%20Report_%20June2014.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - November 2013",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCL-TAC%20Rep%202013%20Nov%2014.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - May 2013 Revised",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCL%20TAC%20Report%20-%20May%2014%202013%20Revised.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - May 2013",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/TAC_Report_April%202013%20Complete%20Rev%205-8-13.pdf"
		        	},
		        	{
		        		"title": "SCL TAC Report - October 2012",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/SCLTACReport/SCL%20TAC%20Report%20%202012%20Nov%20-%20Attachments%20Included.pdf"
		        	}
		        ];
	
		$timeout(function(){
			$scope.enable = "true";
			$scope.loadingText = "";
	    }, 800);
}]);