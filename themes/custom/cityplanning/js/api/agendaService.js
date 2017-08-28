app.service('agendaService', function($http) {
	this.getAgenda = function(apc, year) {
		return $http.get("http://161.149.221.137/dcpapi/meetings/api/"+apc+"/agendas/"+year);
	}
});
