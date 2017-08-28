app.controller('formsCtrl', function ($scope, formsService, $filter) {
	formsService.getForms().then (function (response){
		$scope.forms = response.data.items;
	});
});