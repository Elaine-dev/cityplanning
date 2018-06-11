app.service('formsService', function($http) {
	this.getForms = function () {
		return $http.get('http://161.149.221.137/dcpapi/general/forms');
	}
});