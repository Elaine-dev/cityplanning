var appCommMeetings = angular.module('appCommMeetings', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.config(['$interpolateProvider', '$locationProvider',  function($interpolateProvider, $locationProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
		
		// Enabled html5Mode to get query string
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
		
		$locationProvider.hashPrefix('!');
	}])

	.service('hearingsService', function($http) {
		this.getHearing = function (apc, year) {
			return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/hearings/"+year);
		}
	})
	
	.service('boardService', function($http) {
		this.getBoards = function(apc, year) { 
			
			return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/boards/"+year);
		}
	})
	
	.service('commissionService', function($http) {
		this.getCommissions = function(apc, year) {
			return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/commissions/"+year);
		}
	})
	
	// Commission Controller
	.controller('commissionCtrl', ['$scope', '$sce', 'commissionService', '$filter', '$timeout', '$location', function($scope, $sce, commissionService, $filter, $timeout, $location) {
		$scope.apcAreas = {
		   availableOptions: [ 
		        {id: 'cpc', name: 'City Planning Commission'},
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
		 
		// filter record as per query string
		var queryHash = $location.hash();
		$scope.apc = getQueryString(queryHash);							// call method
		
		$scope.enable = "false";
		$scope.loadingText = "Loading ...";
		
		$scope.date = $filter('date')(new Date(), 'yyyy');				// get current year
		var date = $scope.date;
				
		// display record according to apc
		$scope.$watch('apc', function(newAPC) {
			if (newAPC) { 
				var selectedYear = $scope.date;
								
				commissionService.getCommissions(newAPC, selectedYear).then(function(response) {
					$scope.agendas = response.data.Entries;
					$scope.dates = (response.data.Years.length > 0) ? response.data.Years : [date];		// set default date if not exist
					$scope.planningAreaTitle = response.data.APCTitle;
					
					// loading icon
					$timeout(function(){
						$scope.enable = true;
						$scope.loadingText = '';
					}, 2000);	
				});
			}
		 });
		
		// display record according to date
		$scope.$watch('date', function(newYear) {
			if (newYear) {
				var apc = $scope.apc;
				commissionService.getCommissions(apc, newYear).then(function(response) {
					$scope.agendas = response.data.Entries;
					$scope.planningAreaTitle = response.data.APCTitle;
				});
			}
		});
		
	}])
	
	// Board Controller
	.controller('boardCtrl', ['$scope', '$sce', 'boardService', '$filter', '$timeout', '$location', function($scope, $sce, boardService, $filter, $timeout, $location) {
			$scope.apcAreas = {
				availableOptions: [ 
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
			
			var queryHash = $location.hash();
			$scope.apc = getQueryString(queryHash);					// call method
				
			$scope.enable = "false";
			$scope.loadingText = "Loading ...";
		
			$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
			var date = $scope.date;
			
			$scope.$watch ('apc', function(newAPC) {
				if(newAPC) {
					var selectedYear = $scope.date;
					boardService.getBoards(newAPC, selectedYear).then(function (response){
						$scope.boards = response.data.Entries;
						$scope.dates = (response.data.Years.length > 0) ? response.data.Years : [date];		// set default date if not exist
						$scope.planningAreaTitle = response.data.APCTitle;
						$timeout(function(){
				            $scope.enable = "true";
				           $scope.loadingText = "";
				        }, 2000);
					});
				}
			});
			
		$scope.$watch('date', function(newYear){
			if (newYear) {
				var apc = $scope.apc;
				boardService.getBoards(apc, newYear).then(function (response){
					$scope.boards = response.data.Entries;
					$scope.planningAreaTitle = response.data.APCTitle;
				});			
			}
		});	

	}])
	
	// Hearings Controller
	.controller('hearingsCtrl', ['$scope', '$sce', 'hearingsService', '$filter','$timeout', '$location', function($scope, $sce, hearingsService, $filter, $timeout, $location) {
			$scope.apcAreas = {
				availableOptions: [ 
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
			
			var queryHash = $location.hash();
			$scope.apc = getQueryString(queryHash);					// call method
		
			$scope.enable = "false";
			$scope.loadingText = "Loading ...";
		
			$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
			var date = $scope.date;
			$scope.assignDate = $filter('date')(new Date(), 'M/d/yyyy');
			
			$scope.$watch ('apc', function(newAPC) {
				if(newAPC) {
					var selectedYear = $scope.date;
					hearingsService.getHearing(newAPC, selectedYear).then(function (response){
						$scope.hearings = response.data.Entries;
						$scope.dates = (response.data.Years.length > 0) ? response.data.Years : [date];		// set default date if not exist
						$scope.planningAreaTitle = response.data.APCTitle;
						$timeout(function() {
				            $scope.enable = "true";
				            $scope.loadingText = "";
				        }, 2000);
					});			
				}
			});
			
		$scope.$watch('date', function(newYear){
			if (newYear) {
				var apc = $scope.apc;
				hearingsService.getHearing(apc, newYear).then(function (response){
					$scope.hearings = response.data.Entries;
					$scope.planningAreaTitle = response.data.APCTitle;
				});			
			}
		});	
	}]);

/**
 * 
 * @param qString string
 * @returns string
 * 
 * For e.g. qString = 'hearings?q=southlosangeles'
 * As we need the value only after equals ('=') sign; so split the string.
 * If the url does not have query string, it will return 'undefined'
 * 
 */
function getQueryString (qString) {
	var setAPC, res;
	setAPC = qString.split('=')[1];							// 0 => commissions?q, 1 => cpc . Returns 'undefined' when no data found.
	return res = (setAPC !== undefined) ? setAPC : 'all';	
}