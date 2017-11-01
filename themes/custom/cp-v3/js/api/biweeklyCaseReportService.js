app.service('biweeklyCaseReportService', function($http) {
	this.getBiweeklyCaseFiling = function (id, year) {
		return $http.get("http://10.68.8.109:2016/ladcp/api/v1/bi-weekly-case-filing/"+id+'/'+year);
	}
});
