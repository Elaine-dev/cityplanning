var app = angular.module('app', ['ngSanitize']);

app.config(function($interpolateProvider) {
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
	
	// case search
	$scope.$watch('case_search',function(newValue) {
		if(newValue !== undefined){
			GeneralService.getList(newValue).then(function(res){
				console.log(res);
			});	
		}
	});

	// case number search
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

function caseSearchTypeAheadButtonPrototype(){
}

caseSearchTypeAheadButtonPrototype.jsonpCallback = function(res) {
	$response = res.response.replace(/\|\|/g, "\n");
	//console.log(typeof $response);

	if(typeof $response != undefined) {
		$rows = $response.split("\n");
		//console.log($rows);
		var html = '';
		$rows.forEach(function(elem){
			//console.log(elem);
			$new_row = elem.split("|");
			if($new_row[1]!==undefined){
				html += "<li style='font-size: 12px;'> <a style='text-decoration: none;' href='http://m-planning.azurewebsites.net/case-search?case_info="+$new_row[0]+"'>"+$new_row[1]+"</a></li>" ;
			}					
		});
		
		document.getElementById('divTestCases').style["display"] = "block";
		document.getElementById('ulMatch').innerHTML = html;
	}
}

app.service('GeneralService', function($http) {
	this.getAgenda = function(url) {
		return $http.get(url);
	}
	this.getList = function(case_number) {
		return $http.jsonp('http://161.149.221.137/caseinfo/getcaselist.aspx?q='+case_number+'&jsonpCallback=caseSearchTypeAheadButtonPrototype.jsonpCallback',{jsonpCallback: 'caseSearchTypeAheadButtonPrototype.jsonpCallback'});
	}
});
