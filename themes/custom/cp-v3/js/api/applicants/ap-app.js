(function () {
  'use strict';

  var myModule = angular.module('demoApp', ['ui.tree', 'ngRoute', 'ui.bootstrap']);

    myModule.config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
    	$routeProvider
	        .when('/draft-eir-references', {
	          controller: 'draftEIRReferencesCtrl',
	          templateUrl: 'views/draft-eir-references.html'
	        })
	        .when('/draft-add-docs', {
	        	controller: 'draftEIRDocumentCtrl',
	        	templateUrl: 'views/draft-add-docs.html'
	        })
	        .when('/draft-correspondance', {
	        	controller: 'draftCorrespondanceCtrl',
	        	templateUrl: 'views/draft-correspondance.html'
	        })
	        .when('/administrative-record', {
	        	controller: 'administrativeRecordCtrl',
	        	templateUrl: 'views/administrative-record.html'
	        })
	        .otherwise({
	          redirectTo: '/draft-eir-references'
	        });
	
    	// testing issue #521
    	$compileProvider.debugInfoEnabled(true);
    }]);
})();