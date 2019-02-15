app.service('homepageService', function ( $http ){
	this.getUpcommingMeetings = function() {
		return $http.get("https://planning.lacity.org/dcpapi/meetings/upcoming");
	}
	
	this.getUpcommingHearings = function () {
		return $http.get("https://planning.lacity.org/dcpapi/meetings/upcoming/hearings");
	}
	
	this.getLatestNews = function () {
		return $http.get("https://planning.lacity.org/dcpapi/general/whatsnew");
	}
});