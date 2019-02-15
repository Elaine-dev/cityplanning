app.service('agendaService', function($http) {
	this.getAgenda = function(apc, year) {
		return $http.get("https://planning.lacity.org/dcpapi/meetings/api/"+apc+"/agendas/"+year);
	}
});
