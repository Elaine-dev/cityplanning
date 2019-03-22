/**
 * File: public-counter.js
 * Author: Blakeman
 * Created date: 03/19/2019
 */

'use strict';
var app = angular.module('appPubCounter', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
.service('pubCounterMetroService', function($http){
	this.getRecord = function() {
		return $http.get('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=7&json=true/');

	      }

		})
		.service('pubCounterValleyService', function($http){
			this.getRecord = function() {
				return $http.get('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=4&json=true/');

			      }

				})

				.service('pubCounterWestlaService', function($http){
					this.getRecord = function() {
						return $http.get('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=3&json=true');

								}

						})


	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');

	})
  // Custom OR filters on fields of a property and can be used anywhere
  //https://stackoverflow.com/questions/15868248/how-to-filter-multiple-values-or-operation-in-angularjs #9
  .filter('filterWithOr', function ($filter) {
     var comparator = function (actual, expected) {
       if (angular.isUndefined(actual)) {
         // No substring matching against `undefined`
         return false;
       }
       if ((actual === null) || (expected === null)) {
         // No substring matching against `null`; only match against `null`
         return actual === expected;
       }
       if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
         // Should not compare primitives against objects, unless they have custom `toString` method
         return false;
       }
      // console.log('ACTUAL EXPECTED')
      // console.log(actual)
      // console.log(expected)

       actual = angular.lowercase('' + actual);
       if (angular.isArray(expected)) {
         var match = false;
         expected.forEach(function (e) {
           // console.log('forEach')
           // console.log(e)
           e = angular.lowercase('' + e);
           if (actual.indexOf(e) !== -1) {
             match = true;
           }
         });
         return match;
       } else {
         expected = angular.lowercase('' + expected);
         return actual.indexOf(expected) !== -1;
       }
     };
     return function (array, expression) {
       return $filter('filter')(array, expression, comparator);
     };

   })
   //filter for formatting time in json// https://stackoverflow.com/questions/25470475/angular-js-format-minutes-in-template #7 first example
   .filter('time', function() {

   var conversions = {

     'mm': function(value) { return value * 60; },
     'hh': function(value) { return value * 3600; }
   };

   var padding = function(value, length) {
     var zeroes = length - ('' + (value)).length,
         pad = '';
     while(zeroes-- > 0) pad += '0';
     return pad + value;
   };

   return function(value, unit, format, isPadded) {
     var totalSeconds = conversions[unit || 'ss'](value),
         hh = Math.floor(totalSeconds / 3600),
         mm = Math.floor((totalSeconds % 3600) / 60),


     format = format || 'hh:mm';
     isPadded = angular.isDefined(isPadded)? isPadded: true;
     hh = isPadded? padding(hh, 2): hh;
     mm = isPadded? padding(mm, 2): mm;

     return format.replace(/hh/, hh).replace(/mm/, mm);
   };
 });

 app.controller('pubCounterMetroCtrl', ['$scope', 'pubCounterMetroService', function($scope, pubCounterMetroService){
 	pubCounterMetroService.getRecord().then(function(response){
 		$scope.data = response.data;
		//console.log($scope);
	});
}]);

app.controller('pubCounterValleyCtrl', ['$scope', 'pubCounterValleyService', function($scope, pubCounterValleyService){
 pubCounterValleyService.getRecord().then(function(response){
	 $scope.data = response.data;
	 //console.log($scope);
 });
}]);

app.controller('pubCounterWestlaCtrl', ['$scope', 'pubCounterWestlaService', function($scope, pubCounterWestlaService){
 pubCounterWestlaService.getRecord().then(function(response){
	 $scope.data = response.data;
	 //console.log($scope);
 });
}]);
