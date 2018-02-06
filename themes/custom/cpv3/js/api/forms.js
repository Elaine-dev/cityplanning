var app = angular.module('appForms', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('formsService', function($http){
		this.getRecord = function() {
			return $http.get("http://161.149.221.142/dcpapi/general/forms");
		}
	})
	.config(function($interpolateProvider){
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
	});

app.controller('formsCtrl', [ '$scope', 'formsService', 'filterFilter', '$timeout', function ($scope, formsService, filterFilter, $timeout) {
	$scope.filt = 'All';
	$scope.setFilter = function(letter) {
		$scope.filt = letter;
	};

	$scope.names = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	formsService.getRecord().then (function (response) {
		$scope.masterForms = response.data.masterForms;
		$scope.data = response.data.forms;
		console.log($scope.data);
	});

	$scope.startsWith = function(data) {
		var lowerStr = (data.title + "").toLowerCase();
		var letter = $scope.filt;
		if (letter === 'All') return true;
		return lowerStr.indexOf(letter.toLowerCase()) === 0;
	}
	console.log($scope);
}]);