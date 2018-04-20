var app = angular.module('app', ['ngSanitize']);

app.config(function($interpolateProvider, $sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist(['**']);
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

//MainCtrl
app.controller('MainCtrl', function($scope, GeneralService) {
	$scope.removeTag = function($input){
		if($input=='&amp;nbsp;'){
			return "-";
		}
		return $input
	}
	
	$scope.getDynamicClass = function($index) {
      console.log($index);
      //$class = bold_tr;
      if($index==0) {
        return true;
      }
      if($index==12) {
        return true;
      }
      return false;
    }
	
	// Case search : Auto suggest
	$scope.$watch('case_search',function(newValue) {
		if(newValue !== undefined){
			GeneralService.getList(newValue).then(function(res) {
				if (res) {
					caseSearchTypeAheadButtonPrototype.jsonpCallback (res)
				}
			});	
		}
	});

	// Case search :  
	$scope.$watch('case_number_search',function(newValue) {
		GeneralService.getAgenda('http://161.149.221.137/caseinfo/casesummary.aspx?case='+newValue+'&engine=json').then(function(response){
			$scope.results = response.data;
			$scope.sections = $scope.results.sections;
			$scope.data = [];
			angular.forEach($scope.results.sections, function(value){
				angular.forEach(value.items, function(newValue){
					$scope.data.push({"key":newValue.key,"value":newValue.value});
				})
			})
		});
	});

	$scope.search = function(case_number){
		// console.log($scope.case_number);
		GeneralService.getAgenda('http://161.149.221.137/caseinfo/casesummary.aspx?case='+case_number+'&engine=json').then(function(response){
			$scope.results = response.data;
			$scope.sections = $scope.results.sections;
			$scope.data = [];
			$scope.items = [];
			angular.forEach($scope.results.sections, function(value){
				console.log(value);
				$scope.items.push();
				angular.forEach(value.items, function(newValue){
					$scope.data.push({"key":newValue.key,"value":newValue.value});
				})
			})
		});
	}
});

function caseSearchTypeAheadButtonPrototype () {
}

caseSearchTypeAheadButtonPrototype.jsonpCallback = function ( res ) {
	$response = res.data;
	var html = '';
	angular.forEach($response, function(v) {
		html += "<li> <a style='text-decoration: none;' href='http://planning.lacity.org/PdisCaseInfo/caseNumber/"+v+"' target='_blank'>"+v+"</a></li><li class='bottom'></li>" ;
	})
	
	document.getElementById('divTestCases').style["display"] = "block";
	document.getElementById('ulMatch').innerHTML = html;
}

// service
app.service('GeneralService', function($http) {
	this.getAgenda = function(url) {
		return $http.get(url);
	}
	
	this.getList = function(case_number) {
		return $http.get('http://161.149.221.142/caseinfo/api/pcts/caseautocomplete/'+case_number);
	}
});