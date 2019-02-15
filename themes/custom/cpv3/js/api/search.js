var myApp = angular.module('searchApp', ['ngAnimate', 'ui.bootstrap']);
myApp.config(function($interpolateProvider,$sceProvider) {
    $sceProvider.enabled(false);
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

myApp.controller('MainCtrl', function($scope, $http, $timeout, filterFilter){
    $scope.pageSize = 10;
    $scope.currentPage = 1;
    $scope.enable = "false";
    $scope.loadingText = "Loading ...";

    var queryString = getUrlVars()['keys'];
    var formattedQueryString = queryString.replace(/\+/g, " ");		// replace + with space

    var self = this;
    $scope.searchQuery = formattedQueryString;
    if (typeof formattedQueryString != 'undefined') {
        $scope.searching = true;
        $scope.showResult = false;
        $http.get('https://planning.lacity.org/dcpapi/general/search/results/'+formattedQueryString).then(function(posts) {
            $scope.posts = posts.data;
            $scope.results = $scope.posts.sections;
            self.data = $scope.posts.sections;
            $scope.data = $scope.posts.sections;
            $scope.searching = false;
            $scope.showResult = true;
            $scope.total = $scope.posts.sections.length;

            $timeout(function(){
	            $scope.enable = "true";
	           $scope.loadingText = "";
	        }, 2000);
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
    return function(input, start){
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
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
