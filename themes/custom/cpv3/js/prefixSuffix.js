var app = angular.module('appPS', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-toArrayFilter'])
  .service('prefixSuffixService', function($http) {
    this.getRecord = function() {
      return $http.get("https://planning.lacity.org/dcpapi/general/prefixsuffix/data");
    }
  })
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
  });

app.controller('prefixSuffixCtrl', ['$scope', '$http', '$filter', 'prefixSuffixService', function($scope, $http, $filter, prefixSuffixService) {
  prefixSuffixService.getRecord().then(function(response) {
    $scope.filt = 'All'
    $scope.setFilter = function(tab) {
      $scope.filt = tab
    }
    $scope.tabs = ['All', 'Active Prefixes', 'Active Suffixes', 'Inactive Prefixes', 'Inactive Suffixes', 'Downloads'];




    $scope.prefixSuffixes = response.data
    //console.log($scope.prefixSuffixes);
    console.log(Object.keys($scope.prefixSuffixes));
    //console.log(Object.keys($scope.prefixSuffixes.PrefixActive));
    //console.log("key of Prefix Active")

    //$scope.cats = prefixSuffixService.cats




    $scope.onClickTab = function(tab) {
      //  $scope.currentTab = tab.prefixSuffixes;
      $scope.records = [];
      console.log($scope.records);
      console.log('This is record');

      $http.get("https://planning.lacity.org/dcpapi/general/prefixsuffix/data").then(function(data, status) {
        $scope.records = response.data;
        //  console.log($scope.records);
      })
      $scope.loadRecords = function() {
        console.log($scope.loadRecords);
      }
    }


    $scope.isActiveTab = function(tabUrl) {
      return tabUrl == prefixSuffixService;
      //console.log($scope.tabs)
      console.log($scope.isActiveTab);
      //  console.log($scope.currentTab)
    }


  })
}]);