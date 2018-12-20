/**
 * File: socialMediaCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/03/2018
 * Updated date: 05/11/2018
 */

'use strict';

var appSM = angular.module('appSM', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
.service('socialMediaService', function($http){
	this.getRecord = function() {
		return $http.get('http://161.149.221.142/dcpapi/general/social/8');
	}
})
.filter('words', function () {
	return function (input, words) {
	    if (isNaN(words)) return input;
	    if (words <= 0) return '';
	    if (input) {
	        var inputWords = input.split(/\s+/);
	        if (inputWords.length > words) {
	            input = inputWords.slice(0, words).join(' ') + '…';
	        }
	    }
	    return input;
	}
});

appSM.config(function($interpolateProvider) { 
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appSM.controller('SocialMediaCtrl', ['$scope', '$sce', 'socialMediaService', function($scope, $sce, socialMediaService) {
	socialMediaService.getRecord().then(function(response) {
		var currentData, limitData, filterData;
		
		currentData = response.data;
		limitData = currentData.slice(0, 8);		// get first 8 array data
		filterData = filterRecord(limitData);
		$scope.data = chunk(filterData, 2);

		$scope.boxSize = function (id) {
			var arrIndex = [300, 300, 350, 250, 200, 400, 400, 200];
			return arrIndex[id];
		} 
	});
}]);

function chunk (arr, size) {
	var newRecord = [];
	var i;
	for (i = 0; i < arr.length; i+=size) {
		newRecord.push(arr.slice(i, i+size));
	}
	return newRecord;
}

/**
 * Add font icon class according to it's type
 * @param arr array
 * @returns array
 */
function filterRecord (arr) {
	var i, iconClass, style;
	var newRecord  = arr;
	for (i=0; i < arr.length; i++) {
		if (newRecord[i]['type'] == 'twitter') {
			iconClass = 'fa-twitter';
		} else if (newRecord[i]['type'] == 'youtube') {
			iconClass = 'fa-youtube';
			
		} else if (newRecord[i]['type'] == 'instagram') {
			iconClass = 'fa-instagram';
		} else {
			iconClass = 'fa-facebook';
		}
		
		// add background image style
		if (newRecord[i]['hasImage']) {
			style = 'background:url('+newRecord[i]['imageUrl']+') no-repeat center center; background-size: cover; margin: 5px;';
		} else {
			style = '';
		}
		newRecord[i].style = style;
		//newRecord[i].desc = truncateDescription+ '...';
		newRecord[i].iconClass = iconClass;
		newRecord[i].ind = i;
	}
	return newRecord;
}
