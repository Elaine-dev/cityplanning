app.service('homepageService', function ( $http ){
	this.getUpcommingMeetings = function() {
		return $http.get("http://161.149.221.137/dcpapi/meetings/upcoming");
	}
	
	this.getUpcommingHearings = function () {
		return $http.get("http://161.149.221.137/dcpapi/meetings/upcoming/hearings");
	}
	
	this.getLatestNews = function () {
		return $http.get("http://161.149.221.137/dcpapi/general/whatsnew");
	}
	this.getInstagramFeed = function () {
		return $http.get("http://10.68.8.109:2016/ladcp/api/v1/instagram/planning4la");
	}
});