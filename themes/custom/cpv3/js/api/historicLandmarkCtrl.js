/**
 * File: historicLandmarkCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 03/05/2019
 */

'use strict';

var appHistoricLandmark = angular.module('appHistoricLandmark', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.service('historicLandmarkService', function($http) {
		this.getHistoricLandmark = function (cpa, year) {
			return $http.get("http://planning.lacity.org/dcpapi/general/api2/hcm/"+cpa);
		}
	});

appHistoricLandmark.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appHistoricLandmark.controller('historicLandmarkCtrl', ['$scope', '$sce', 'historicLandmarkService', '$filter','$timeout', function($scope, $sce, historicLandmarkService, $filter, $timeout){
	 $scope.enable = "false";
	 $scope.loadingText = "Loading ...";
	
	 var qString = getUrlVars()['cpa'];
	 var cpas = [
		 {'id' : 'arleta-pacoima', 'name' : 'Arleta-Pacoima'},
		 {'id' : 'bel-air', 'name' : 'Bel Air - Beverly Crest'},
		 {'id' : 'boyle-heights', 'name' : 'Boyle Heights'},
		 {'id' : 'brentwood', 'name' : 'Brentwood - Pacific Palisades'},
		 {'id' : 'canoga-park', 'name' : 'Canoga Park - Winnetka - Woodland Hills - West Hills'},
		 {'id' : 'central-city', 'name' : 'Central City'},
		 {'id' : 'central-city-north', 'name' : 'Central City North'},
		 {'id' : 'chatsworth', 'name' : 'Chatsworth - Porter Ranch'},
		 {'id' : 'encino', 'name' : 'Encino - Tarzana'},
		 {'id' : 'granada-hills', 'name' : 'Granada Hills - Knollwood'},
		 {'id' : 'harbor', 'name' : 'Harbor Gateway'},
		 {'id' : 'hollywood', 'name' : 'Hollywood'},
		 {'id' : 'mission-hills', 'name' : 'Mission Hills - Panorama City - North Hills'},
		 {'id' : 'north-hollywood', 'name' : 'North Hollywood - Valley Village'},
		 {'id' : 'northeast-los-angeles', 'name' : 'Northeast Los Angeles'},
		 {'id' : 'northridge', 'name' : 'Northridge'},
		 {'id' : 'palms', 'name' : 'Palms - Mar Vista - Del Rey'},
		 {'id' : 'reseda', 'name' : 'Reseda - West Van Nuys'},
		 {'id' : 'san-pedro', 'name' : 'San Pedro'},
		 {'id' : 'sherman-oaks', 'name' : 'Sherman Oaks - Studio City - Toluca Lake - Cahuenga Pass'},
		 {'id' : 'silver-lake', 'name' : 'Silver Lake - Echo Park - Elysian Valley'},
		 {'id' : 'south-los-angeles', 'name' : 'South Los Angeles'},
		 {'id' : 'southeast-los-angeles', 'name' : 'Southeast Los Angeles'},
		 {'id' : 'sun-valley', 'name' : 'Sun Valley - La Tuna Canyon'},
		 {'id' : 'sunland', 'name' : 'Sunland - Tujunga - Lake View Terrace - Shadow Hills - East La Tuna Canyon'},
		 {'id' : 'sylmar', 'name' : 'Sylmar'},
		 {'id' : 'van-nuys', 'name' : 'Van Nuys - North Sherman Oaks'},
		 {'id' : 'venice', 'name' : 'Venice'},
		 {'id' : 'west-adams', 'name' : 'West Adams - Baldwin Hills - Leimert'},
		 {'id' : 'west-los-angeles', 'name' : 'West Los Angeles'},
		 {'id' : 'westchester', 'name' : 'Westchester - Playa del Rey'},
		 {'id' : 'westlake', 'name' : 'Westlake'},
		 {'id' : 'westwood', 'name' : 'Westwood'},
		 {'id' : 'wilmington', 'name' : 'Wilmington - Harbor City'},
		 {'id' : 'wilshire', 'name' : 'Wilshire'},
	];
	 
	 // get title of current CPA
	 var title;
	 cpas.forEach(function(item) {
		 if (item.id == qString) {
			 title = item.name;
		 }
	 });
	
	 if (qString !== ''){
		 historicLandmarkService.getHistoricLandmark(qString).then(function (response){
			 $scope.data = response.data;
			 $scope.currentTitle = title;
			console.log($scope);
			 $timeout(function(){
				 $scope.enable = "true";
				 $scope.loadingText = "";
			 }, 2000);
		 });
	 }
}]);

//Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}	
