/**
 * File: sclAnnualReports.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('appSCLAnnualReports', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclAnnualReportsCtrl', ['$scope', '$filter',  '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
       	{
    		"title": "8th Annual Report of Ambient Air Monitoring (Nov 2007 - Nov 2015)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/STI_8th_Annual_Report_Nov2007-Nov2015.pdf"
    	},
    	{
    		"title": "7th Annual Report of Ambient Air Monitoring (Nov 2008 - Nov 2014)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/7th%20Annual%20Report%20Nov2008-Nov%202014.pdf"
    	},
    	{
    		"title": "6th Annual Report of Ambient Air Monitoring (November 2008 - November 2013)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/STI_6thAnnualRpt_Nov2008-Nov2013.pdf"
    	},
    	{
    		"title": "5th Annual Report of Ambient Air Monitoring (November 2007 - November 2012)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/5th%20Annual%20Report%20Nov%202007-Nov%202012.pdf"
    	},
    	{
    		"title": "4th Annual Report of Ambient Air Quality Monitoring (Nov.22, 2010 - Nov. 21, 2011)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/STI4thAnnualRptNov2007_Nov2011.pdf"
    	},
    	{
    		"title": "3rd Annual Report of Ambient Air Quality Monitoring (Nov. 22, 2007 - Nov. 21, 2010)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/STI%203rd%20Annual%20Nov%202007%20-%20Nov%202010.pdf"
    	},
    	{
    		"title": "2nd Annual Report of Ambient Air Quality Monitoring (May 2008 - May 2009)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/AirQualityMonitorReport08-09.pdf"
    	},
    	{
    		"title": "1st Annual Report of Ambient Air Quality Monitoring (May 2007 - May 2008)",
    		"doc": "http://planning.lacity.org/SunshineLandfill/AirQualityMonitoringReport/AnnualRpts/AirQualityMonitorReport07-08.pdf"
    	}
    ];
	
	$timeout(function(){
		$scope.enable = "true";
		$scope.loadingText = "";
    }, 200);
	
}]);