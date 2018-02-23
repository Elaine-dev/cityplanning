/**
 * File: sclQuarterlyReports.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('appSCLQuarterlyReports', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclQuarterlyReportsCtrl', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
       	{
    		"title": "36th Quarterly Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (Sept2016 - Nov2016)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/36thQtrlyRpt.pdf"
    	},
    	{
    		"title": "35th Quarterly Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (Jun2016 - Aug2016)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/35thQtrlyRpt.pdf"
    	},
    	{
    		"title": "34th Quarterly Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (Mar2016 - May2016)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/34thQtrlyRpt.pdf"
    	},
    	{
    		"title": "33rd Quartery Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (Dec 2015 - Feb 2016)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/33rdQtrReport_Dec2015-Feb2016.pdf"
    	},
    	{
    		"title": "32nd Quartery Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (2015Sept01 - Nov30)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/32ndQtrlyRpt.pdf"
    	},
    	{
    		"title": "31st Quartery Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (2015Jun01 - Aug31)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/31stQtylyRpt.pdf"
    	},
    	{
    		"title": "30th Quartery Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (2015Mar01 - May31)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/30thQrtrlyRptMar01_May31_2015.pdf"
    	},
    	{
    		"title": "29th Quartery Report on Ambient Air Monitoring at SCL & Van Gogh Elementary School (2014Dec - Feb2015)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/QrtlyRpts/29thQtylyRpt.pdf"
    	}
    ];
	
	$timeout(function(){
        $scope.enable = "true";
       $scope.loadingText = "";
    }, 800);
	
}]);