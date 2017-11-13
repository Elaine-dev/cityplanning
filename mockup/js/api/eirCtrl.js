/**
 * File: eirCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/09/2017
 * Updated date: 09/07/2017
 */

'use strict';

var appEIR = angular.module('appEIR', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('eirCtrl', function($scope, $filter, $timeout, $http, filterFilter) {
    $scope.enable = "false";
    $scope.loadingText = "Loading ...";
    $scope.pageSize = 20;
    $scope.currentPage = 1;

    // Extract data from json file
    $http({
        method: 'POST',
        url: siteurl + '/file/eir.json',
    }).then( function(response) {
        $scope.events = response;
        self.data = response.data;
        $scope.total = response.data.length;
        $scope.data =  response.data;
    });

    // $watch search to update pagination
    $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
    $scope.$watch('projectTitle', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.data, newVal);
        $scope.total = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
        $scope.currentPage = 1;
    }, true);

    $timeout(function(){
        $scope.enable = "true";
        $scope.loadingText = "";
    }, 1000);

})
.filter('startFrom', function(){
    return function(data, start){
        start = 0 + start;
        return data.slice(start);
    }
});