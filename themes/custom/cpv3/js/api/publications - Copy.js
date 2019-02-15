'use strict';

var app = angular.module('appPublication', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('publicationService', function($http){
		this.getRecord = function(q) {
			return $http.get("https://planning.lacity.org/dcpapi/general/pubs/"+q);
		}
	});
app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('PublicationCtrl', ['$scope', 'publicationService', 'filterFilter', '$timeout', function($scope, publicationService, filterFilter, $timeout) {
	$scope.docType = 'Plan';
	
	$scope.documentType = {
		availableOptions: [
			{id: 'Oriented District', name: 'Oriented District'},
			{id: 'Plan', name: 'Plan'},
			{id: 'Report', name: 'Report'},
			{id: 'all', name: 'All'},
		],
	};
	
	$scope.$watch('docType', function(q) {
		publicationService.getRecord(q).then(function(response) {
			$scope.data = response.data;
			
		});
	});
	
	
}]);
