app.controller('biweeklyCaseReportCtrl', function($scope, biweeklyCaseReportService, $filter, $timeout, $http, $location) {
	var id = $location.absUrl().split('/')[6];		// get cpc from url in the form of query parameter.
	id = (id) ? id : 154;

	$scope.years = ['2017', '2016', '2015', '2014', '2013', '2012'];
	$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
	var date = $scope.date;
	
	// display Bi-Weekly Case Filing by Certified Neighborhood Council
	biweeklyCaseReportService.getBiweeklyCaseFiling(id).then (function (response) {
		$scope.biweeklyCaseFiling = response.data;
		if (id == 154) {
			$scope.pageTitle = 'Bi-Weekly Case Filing by Certified Neighborhood Council';	//154
		} else if (id == 155) {
			$scope.pageTitle = 'Bi-Weekly Case Filing Activity by City Council District';	// 155
		} else {
			$scope.pageTitle = 'Bi-Weekly Case Filing by Community Plan Area';				// 156
		}
	});
});