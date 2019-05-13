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
    $scope.prefixSuffixes = response.data
    // splits json arrays into their own scopes
    for (var k in response.data) {
      $scope[k] = response.data[k]
    }
    //console.log($scope.PrefixActive)
  //  console.log($scope.SuffixActive)
  //  console.log($scope.PrefixInactive)
  //  console.log($scope.SuffixInactive)

    $scope.filt = 'All'
    $scope.setFilter = function(tab) {
      $scope.filt = tab

    }
    $scope.isActiveTab = function(taba) {
      return (taba)
    }
    $scope.currentTab = $scope.isActiveTab;
    $scope.tabs = ['All', 'Active Prefixes', 'Active Suffixes', 'Inactive Prefixes', 'Inactive Suffixes'];

  //  console.log($scope.tabs)
  //  console.log("output of tabs scope")

  })
  $scope.onClickTab = (function(taba) {
    $http.get("https://planning.lacity.org/dcpapi/general/prefixsuffix/data").then(function(response, data, status) {
// splits json arrays into their own scopes
      for (var k in response.data) {
        $scope[k] = response.data[k]
      }

    //  console.log($scope.PrefixActive)
    //  console.log($scope.SuffixActive)
  //    console.log($scope.PrefixInactive)
  //    console.log($scope.SuffixInactive)


      $scope.currentTab == taba;

      if (taba == 'All') {

        $scope.currentTab = ('All')
        //console.log('All')
      //  console.log('This is current tab: ' + $scope.currentTab)
        if ($scope.prefixSuffix !== $scope.currentTab) {
      //    alert("All");
          $scope.visible = true
          //console.log('is visible')
          $scope.PrefixActive
          $scope.SuffixActive
          $scope.SuffixInactive
          $scope.PrefixInactive

        } else {
          $scope.visible = false;
        //  console.log('is not visible')
        }
      }

      if (taba == 'Active Prefixes') {
        $scope.PrefixActive
        $scope.currentTab = ('Active Prefixes')
        //console.log('Active Prefixes')
      //  console.log('This is current tab: ' + $scope.currentTab)
        if ($scope.PrefixActive !== $scope.currentTab) {
        //  alert("Active Perfixes");
          $scope.visible = true
          $scope.prefixSuffixes = false
          $scope.SuffixActive = false
          $scope.SuffixInactive = false
          $scope.PrefixInactive = false
          $scope.PrefixActive
        //  console.log('is visible')
        //  console.log($scope.PrefixActive)
        } else {
          $scope.visible = false;
        //  console.log('is not visible')
        }
      }

      if (taba == 'Active Suffixes') {
        $scope.SuffixActive
        $scope.currentTab = ('Active Suffixes')
      //  console.log('Active Suffixes')
      //  console.log('This is current tab: ' + $scope.currentTab)
        if ($scope.SuffixActive !== $scope.currentTab) {
          //alert("Active Suffixes");
          $scope.visible = true
          $scope.prefixSuffixes = false
          $scope.PrefixActive = false
          $scope.SuffixInactive = false
          $scope.PrefixInactive = false
          $scope.SuffixActive
        //  console.log('is visible')
        } else {
          $scope.visible = false;
        }
      }

      if (taba == 'Inactive Prefixes') {
        $scope.PrefixInactive
        $scope.currentTab = ('Inactive Prefixes')
      //  console.log('Inactive Prefixes')
        if ($scope.PrefixActive !== $scope.currentTab) {
      //    alert("Inactive Perfixes");
          $scope.visible = true
          $scope.prefixSuffixes = false
          $scope.PrefixActive = false
          $scope.SuffixActive = false
          $scope.SuffixInactive = false
          $scope.PrefixInactive
        //  console.log('is visible')
        } else {
          $scope.visible = false;
        }
      }

      if (taba == 'Inactive Suffixes') {
        $scope.SuffixInactive
        $scope.currentTab = ('Inactive Suffixes')
      //  console.log('Inactive Suffixes');
        if ($scope.SuffixInactive !== $scope.currentTab) {
        //  alert("Inactive Suffixes");
          $scope.visible = true
          $scope.prefixSuffixes = false
          $scope.PrefixActive = false
          $scope.SuffixActive = false
          $scope.PrefixInactive = false
          $scope.SuffixInactive
        } else {
          $scope.visible = false;
        }
      }

    })
  })
}]);
