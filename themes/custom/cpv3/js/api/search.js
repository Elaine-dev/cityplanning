var myApp = angular.module('searchApp', ['ngAnimate', 'ui.bootstrap']);
myApp.config(function($interpolateProvider,$sceProvider) {
    $sceProvider.enabled(false);
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

myApp.controller('MainCtrl', function($scope, $http, $timeout, filterFilter){
    $scope.pageSize = 10;
    $scope.currentPage = 1;

    var q = getUrlVars()['keys'];
    var self = this;
    $scope.searchQuery = q;
    if (typeof q != 'undefined') {
        $scope.searching = true;
        $scope.showResult = false;
        $http.get('http://161.149.221.142/dcpapi/general/search/'+q).then(function(posts){
            $scope.posts = posts.data;
            $scope.results = $scope.posts.results;
            self.data = $scope.posts.results;
            $scope.data = $scope.posts.results;
            $scope.searching = false;
            $scope.showResult = true;
            $scope.total = $scope.posts.results.length;
        })
    }

    // $watch search to update pagination
    $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
    $scope.$watch('searchFilter', function (newVal, oldVal) {
        $scope.filtered = filterFilter($scope.data, newVal);
        if(typeof $scope.filtered != 'undefined' || $scope.filtered != null) {
            $scope.total = $scope.filtered.length;
        }
        $scope.noOfPages = Math.ceil($scope.total / $scope.pageSize);
        $scope.currentPage = 1;
    }, true);
});

myApp.filter('startFrom', function() {
    return function(data, start){
        start = 0 + start;
        console.log(data);
        return data.slice(start);
    }
});

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}