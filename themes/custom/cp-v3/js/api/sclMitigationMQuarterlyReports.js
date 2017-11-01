/**
 * File: sclAgendas.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('appSCLMitigationMQuarterlyReports', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclMitigationMQuarterlyReportsCtrl', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
		           	{
		        		"title": "Mitigation Monitoring Report - 2016 3rd Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/MMRpt2016_3rdQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2016 2nd Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/mmRpt2016_2ndQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2016 1st Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/MitigationMonitoringReport_2016_1st_Qtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2015 4th Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/mmRpt2015_4thQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2015 3rd Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/mmRpt2015_3rdQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2015 2nd Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/MitigationMonitoring2015_%202ndQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2015 1st Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/MitigationMonitoring2015_1stQtr.pdf"
		        	},
		        	{
		        		"title": "Mitigation Monitoring Report - 2014 4th Quarter",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/MitigationMonitorReport/QrtrlyRpt/UltraSystems%20-%202014%20Q4%20SCL%20Report.pdf"
		        	}
		        ];
	
	$timeout(function(){
		$scope.enable = "true";
		$scope.loadingText = "";
    }, 800);
	
}]);