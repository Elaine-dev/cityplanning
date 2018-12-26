//Fetch data with the use of angular $http service.
var app = angular.module('myApp', []);
app.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

list = [];

app.controller('myController', function ($scope, $http) {
    var ctrl = this;

    var request = {
        method: 'get',
        url: 'http://10.68.8.153/themes/custom/cpv3/js/api/organization.json',
        dataType: 'json',
        contentType: "application/json"
    };

    $scope.arrMembers = [];

    $http(request)
    	.then(function (jsonData) {
	        $scope.arrMembers = jsonData.data;
	        $scope.list = $scope.arrMembers;
    	}, function(){
    		console.log('error');
        }
    );
});

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});

app.filter('camelize',function(){
	   return function(name){
	        return name.replace(/([A-Z])/g, function($1){return ""+$1.toLowerCase();});
	    };
	});