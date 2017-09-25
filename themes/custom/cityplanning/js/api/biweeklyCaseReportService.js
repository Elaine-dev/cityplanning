app.service('biweeklyCaseReportService', function($http) {
	this.getBiweeklyCaseFiling = function (id) {
		return $http.get("http://ladcp.westus.cloudapp.azure.com/api/v1/bi-weekly-case-filing/"+id);
	}
});
