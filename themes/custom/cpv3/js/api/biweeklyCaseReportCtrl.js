app.controller('biweeklyCaseReportCtrl', function($scope, biweeklyCaseReportService, $filter, $timeout, $http, $location) {
	var id = $location.absUrl().split('/')[6];		// get cpc from url in the form of query parameter.
	id = (id) ? id : 163;
	
	/*$scope.years = ['2017', '2016', '2015', '2014', '2013', '2012'];
	$scope.date = $filter('date')(new Date(), 'yyyy');		// get current year
	var date = $scope.date;*/

	// generate years list
	var d = new Date();
    var current_year = d.getFullYear();
    var start_date = current_year;
    var end_date = 2000;
    var date_options = [];
    while(start_date >= end_date) {
    	date_options.push(end_date);
		end_date++;
    }

     date_options.sort(function(a, b){return b-a});
     $scope.year = {
         model: null,
         availableOptions: date_options,
         selectedOption: current_year
     };

     var self = this;

     $scope.$watch('year.selectedOption', function(newDate) {
    	 $scope.selectedDate = newDate;
         if(newDate) {
        	 biweeklyCaseReportService.getBiweeklyCaseFiling(id, newDate).then(function(response){

			      $timeout(function() {
			          $scope.enable = "true";
			          $scope.loadingText = "";
			      }, 2000);

                  $scope.currentPage = 0;
                  $scope.pageSize = 20;
                  self.data = [];

                  $scope.getData = function () {
                	  return $filter('filter')($scope.data, $scope.selectedDate)
                  }

                  $scope.numberOfPages=function() {
                	  return Math.ceil($scope.getData().length/$scope.pageSize);
                  }

                  $scope.data = response.data;

                  if (id == 163) {
                	  $scope.pageTitle = 'Bi-Weekly Case Filing by Certified Neighborhood Council';			//163
                  } else if (id == 173) {
                	  $scope.pageTitle = 'Bi-Weekly Case Filing Activity by City Council District';	      	// 173
                  } else {
                	  $scope.pageTitle = 'Bi-Weekly Case Filing by Community Plan Area';				  	// 183
                  }
                  
                  console.log($location.absUrl());

              });
         }
     });
});

app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});