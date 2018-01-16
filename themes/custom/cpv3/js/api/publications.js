'use strict';

var app = angular.module('appPublication', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('publicationService', function($http){
		this.getRecord = function(q){
			return $http.get("http://161.149.221.142/dcpapi/general/pubs/"+q);
		}
	});
app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

app.controller('PublicationCtrl', ['$scope', 'publicationService', '$filter', '$timeout', function($scope, publicationService, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.docType = 'Plan';
	$scope.documentType = {
		availableOptions: [
			{id: 'Oriented District', name: 'Oriented District'},
			{id: 'Plan', name: 'Plan'},
			{id: 'Report', name: 'Report'},
			{id: 'all', name: 'All'},
		],
	};
	
	$scope.$watch('docType', function(newDocType) {
		if(newDocType){
			publicationService.getRecord(newDocType).then(function(response) {
				$scope.publications = response.data;
				//console.log($scope.publications);
			});
		}
	});
	
}]);