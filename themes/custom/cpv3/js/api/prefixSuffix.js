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
  })
}]);