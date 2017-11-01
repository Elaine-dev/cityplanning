/**
 * File: sclAgendas.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/22/2017
 */

'use strict';

var appEIR = angular.module('app', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('sclAgendasCtrl', ['$scope', '$filter',  '$timeout', function($scope, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.data = [
		           	{
		        		"title": "SCL - (City/County) TAC Agenda - January 18, 2017",
		        		"doc": "http://planning.lacity.org/SunshineLandfill/TACAgenda/SCLCityCountyTACAgenda%20_%20Jan18_%202017.pdf"
		        	}
		        ];
	
	$timeout(function(){
        $scope.enable = "true";
       $scope.loadingText = "";
    }, 500);
	
}]);