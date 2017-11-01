/**
 * File: sclAgendas.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('appSCLMitigationMOtherReports', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclMitigationMOtherReportsCtrl', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
       	{
    		"title": "Evaluation of Landfill Odor Problem at SCL by Yazdani Consulting 2015 Aug 15 ",
    		"doc": "http://planning.lacity.org/SunshineLandfill/otherrpts/EvalByYazdaniConsulting2015Aug15.pdf"
    	},
    	{
    		"title": "SCL_Pneumatic_Testing By Hydro Geo Chem 2015 Mar 11",
    		"doc": "http://planning.lacity.org/SunshineLandfill/otherrpts/TestingByHydroGeoChem2015Mar11.pdf"
    	}
    ];
	
	$timeout(function(){
		$scope.enable = "true";
		$scope.loadingText = "";
    }, 800);
	
}]);