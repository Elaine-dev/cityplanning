'use strict';
var app = angular.module('appPubCounter', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap', 'ngResource', 'angular-toArrayFilter']) .service('pubCounterMetroService', function($http) {

    this.getRecord = function () {

        return $http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=7&json=true?callback', {jsonpCallbackParam: 'callback', 'Cache-Control':'no-cache'})
        then(function(data){
				 $scope.pubCounterMetroServices= response.data

				 //	 console.log(response.data)
       })//.catch(function(response) {
 // handle errors
				 //console.log("nope")

     //})
   }


   }).service('pubCounterValleyService', function($http) {

  this.getRecord = function () {
        return $http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=4&json=true?callback', {jsonpCallbackParam: 'callback', 'Cache-Control':'no-cache'})
				then(function(data){
         $scope.pubCounterValleyServices = response.data

				 	 //console.log(response.data)
				 })//.catch(function(response) {
// handle errors
			//	 console.log("nope");

     //})
   }
   }).service('pubCounterWestlaService', function($http) {

  this.getRecord = function () {

        return $http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=3&json=true?callback', {jsonpCallbackParam: 'callback', 'Cache-Control':'no-cache'})
				then(function(data){
				 $scope.pubCounterWestlaServices = response.data
				 	 //console.log(response.data)
        })//.catch(function(response) {
 // handle errors
		//		 console.log("nope");

  //   })
   }
   }).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}')


	/*
 // Whitelist the JSONP endpoint to show it is trusted
 */

  }).config(['$sceDelegateProvider', function($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
				'self',
				'https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/**',
				'127.0.0.1'
			])
// used to update async calls
    }]).config(function ($httpProvider) {
      $httpProvider.useApplyAsync(true);

			/*
		 // Custom filter to filter on OR
     // https://stackoverflow.com/questions/15868248/how-to-filter-multiple-values-or-operation-in-angularjs #9
		 */


}).filter('filterWithOr', function($filter) {
    var comparator = function(actual, expected) {
        if (angular.isUndefined(actual)) {
            return false;
        }
        if ((actual === null) || (expected === null)) {
            return actual === expected;
        }
        if ((angular.isObject(expected) && !angular.isArray(expected)) || (angular.isObject(actual) && !hasCustomToString(actual))) {
            return false;
        }
        actual = angular.lowercase('' + actual);
        if (angular.isArray(expected)) {
            var match = false;
            expected.forEach(function(e) {
                e = angular.lowercase('' + e);
                if (actual.indexOf(e) !== -1) {
                    match = true;
                }
            })
            return match;
        } else {
            expected = angular.lowercase('' + expected);
            return actual.indexOf(expected) !== -1;
        }
    }
    return function(array, expression) {
        return $filter('filter')(array, expression, comparator);
    }

		/*
	 // Custom filter to format time
   // https://stackoverflow.com/questions/25470475/angular-js-format-minutes-in-template #7
	 */

}).filter('time', function() {
    var conversions = {
        'mm': function(value) {
            return value * 60;
        },
        'hh': function(value) {
            return value * 3600;
        }
    }
    var padding = function(value, length) {
        var zeroes = length - ('' + (value)).length,
            pad = '';
        while (zeroes-- > 0) pad += '0';
        return pad + value;
    }
    return function(value, unit, format, isPadded) {
        var totalSeconds = conversions[unit || 'ss'](value),
            hh = Math.floor(totalSeconds / 3600),
            mm = Math.floor((totalSeconds % 3600) / 60),
            format = format || 'hh:mm';
        isPadded = angular.isDefined(isPadded) ? isPadded : true;
        hh = isPadded ? padding(hh, 2) : hh;
        mm = isPadded ? padding(mm, 2) : mm;
        return format.replace(/hh/, hh).replace(/mm/, mm);
    }
});

app.controller('pubCounterMetroCtrl', ['$http', '$scope', '$interval', 'pubCounterMetroService', function($http, $scope, $interval, pubCounterMetroService) {
  pubCounterMetroService.getRecord()
    .then(function(response) {
         $scope.pubCounterMetroServices = response.data
  // start interval
  var interval = $interval(function(){$http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=7&json=true?callback', {jsonpCallbackParam: 'callback'})
pubCounterMetroService.getRecord()
  .then(function(response) {

       $scope.pubCounterMetroServices = response.data
     //console.log('interval started')
     //console.log(response.data)
     //console.log(response.data)
})
} , 30000)

})//.catch(function(response) {
  //console.log('interval broke')
    //.then(function(response) {
    //   $scope.$watch(function () {
    //  $scope.pubCounterMetroServices = response.data
//})
}])
app.controller('pubCounterValleyCtrl', ['$http', '$scope', 'pubCounterValleyService', '$interval', function($http, $scope, pubCounterValleyService, $interval) {
	pubCounterValleyService.getRecord()
  .then(function(response) {
       $scope.pubCounterValleyServices = response.data
  // start interval
  var interval = $interval(function(){$http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=4&json=true?callback', {jsonpCallbackParam: 'callback'})
  pubCounterValleyService.getRecord()
  .then(function(response) {

     $scope.pubCounterValleyServices = response.data
  // console.log('interval started')
  // console.log(response.data)

  })
} , 30000)

 })

}])
app.controller('pubCounterWestlaCtrl', ['$http', '$scope', 'pubCounterWestlaService', '$interval', function($http, $scope, pubCounterWestlaService, $interval) {
	pubCounterWestlaService.getRecord()
  .then(function(response) {
       $scope.pubCounterWestlaServices = response.data
  // start interval
  var interval = $interval(function(){$http.jsonp('https://www.ladbsservices2.lacity.org/LADBS_Services/LADBS/WaitTimes?id=3&json=true?callback', {jsonpCallbackParam: 'callback'})
  pubCounterWestlaService.getRecord()
  .then(function(response) {

     $scope.pubCounterWestlaServices = response.data
  // console.log('interval started')
  // console.log(response.data)

  })
} , 30000)
 })
}]);
