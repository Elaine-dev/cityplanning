'use strict';

var app = angular.module('appPublication', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'angularUtils.directives.dirPagination'])
	.service('publicationService', function($http){
		this.getRecord = function(q) {
			return $http.get("/api/v1/publication/"+q);
		}
	});
app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('PublicationCtrl', ['$scope', 'publicationService', 'filterFilter', '$timeout', function($scope, publicationService, filterFilter, $timeout) {
	$scope.docType = 'all';
	
	$scope.documentType = {
		availableOptions: [
			{id: 203, name: 'Annual Report'},
			{id: 202, name: 'Quarterly Newsletter'},
			{id: 218, name: 'Housing Progress Report'},
			{id: 219, name: 'Community Corner'},
			{id: 'all', name: 'All'},
		],
	};
	
	$scope.currentPage = 1;
	$scope.pageSize = 15;
	
	$scope.$watch('docType', function(q) {
		publicationService.getRecord(q).then(function(response) {
			$scope.data = response.data;
			//console.log($scope.data);
		});
	});
}]);