app.service('biweeklyCaseFilingService', function($http) {
	this.getList = function(year) {
		return $http.get("http://10.68.8.109:2016/ladcp/api/v1/bi-weekly-case-filing/"+year);
	}
});
