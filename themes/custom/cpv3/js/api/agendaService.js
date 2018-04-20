app.service('agendaService', function($http) {
	this.getAgenda = function(apc, year) {
		return $http.get("http://161.149.221.142/dcpapi/meetings/api/"+apc+"/agendas/"+year);
	}
});
