app.service('hearingsService', function($http) {
	this.getHearing = function (apc, year) {
		return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/hearings/"+year);
	}
});