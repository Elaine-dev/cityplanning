app.service('formsService', function($http) {
	this.getForms = function () {
		return $http.get('https://planning.lacity.org/dcpapi/general/forms');
	}
});