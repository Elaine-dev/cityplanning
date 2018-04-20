app.service('hearingsService', function($http) {
	this.getHearing = function (apc, year) {
		return $http.get("http://161.149.221.137/dcpapi/meetings/api/"+apc+"/hearings/"+year);
	}
});