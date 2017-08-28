app.controller('agendaCtrl', function($scope, agendaService, $filter, $timeout) {
	$scope.enable = "false";
	$scope.loadingText = "Loading ...";
	
	$scope.apc = 'cpc';
	$scope.apcAreas = {
	   availableOptions: [ 
	        {id: 'cpc', name: 'City Planning Commisson'},
			{id: 'culturalheritagecommission', name: 'Cultural Heritage Commission'},
			{id: 'northvalley', name: 'North Valley' },
			{id: 'southvalley', name: 'South Valley'},
			{id: 'westlosangeles', name: 'West Los Angeles'},
			{id: 'centrallosangeles', name: 'Central Los Angeles'},
			{id: 'eastlosangeles', name: 'East Los Angeles'},
			{id: 'southlosangeles', name: 'South Los Angeles'},
			{id: 'harbor', name: 'Harbor'},
			{id: 'all', name: 'All'}
		],
	};
	
	$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
	var date = $scope.date;
	
	// display record according to apc
	$scope.$watch('apc', function(newAPC) {
		if (newAPC) { 
			var selectedYear = $scope.date;
			agendaService.getAgenda(newAPC, selectedYear).then(function(response) {
				// loading icon
				$timeout(function(){
					$scope.enable = true;
					$scope.loadingText = '';
				}, 2000);
				
				$scope.agendas = response.data.Entries;
				$scope.dates = response.data.Years;
				$scope.planningAreaTitle = response.data.APCTitle;
			});
		}
	 });
	
	// display record according to date
	$scope.$watch('date', function(newYear) {
		if (newYear) {
			var apc = $scope.apc;
			agendaService.getAgenda(apc, newYear).then(function(response) {
				$scope.agendas = response.data.Entries;
				$scope.planningAreaTitle = response.data.APCTitle;
			});
		}
	});
});