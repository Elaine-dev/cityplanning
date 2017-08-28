/**
 * File: eirCtrl.js
 * author: Humbal Shahi
 * Email: humbal.shahi@lacity.org
 * Created date: 05/9/2017
 */

'use strict';

var appEIR = angular.module('appEIR', ['ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap']);

appEIR.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

appEIR.controller('eirCtrl', ['$scope', '$filter', function($scope, $filter) {
	$scope.data = [
		           	{
		        		"projectTitle": "Exposition Corridor Transit Neighborhood Plan Project",
		        		"commentReviewPeriod": "April 6, 2017",
		        		"eirNumber": "ENV-2013-622-EIR",
		        		"SCHN": "2013031038",
		        		"councilDistrict": "5, 10 and 11",
		        		"communityPlanArea": "West Los Angeles, Palms - Mar Vista - Del Rey, West Adams, Balwin Hills - Leimert",
		        		"projectLocation": "The Project Area is located entirely within the incorporated City of Los Angeles and is comprised of an approximately five-mile-long, one-mile-wide corridor along the Expo Phase 2 Light Rail Transit (LRT) Corridor. The Project Area generally includes the half-mile radii around five stations: Exposition/Bundy (Bundy), Exposition/Sepulveda (Sepulveda), Westwood/Rancho Park (Westwood), National/Palms (Palms), and Culver City.",
		        		"projectShortDescription": "",
		        		"projectDescription": "",
		        		"draftEIR": "",
		        		"finalEIR": "",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	},
		        	{
		        		"projectTitle": "The ICON at Panorama Project",
		        		"commentReviewPeriod": "April 6, 2017",
		        		"eirNumber": "ENV-2016-1061-EIR",
		        		"SCHN": "2016081031",
		        		"councilDistrict": "6 - Nury Martinez",
		        		"communityPlanArea": "Mission Hills - Panorama City - North Hills",
		        		"projectDescription": "",
		        		"projectLocation": "14651-14697 W. Roscoe Blvd, 8300-8406 N. Cedros Ave, and 8313-8413 N. Tobias Ave, Los Angeles, CA 91402",
		        		"projectShortDescription": "",
		        		"draftEIR": "",
		        		"finalEIR": "",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	},
		        	{
		        		"projectTitle": "1209 6th Avenue Project",
		        		"commentReviewPeriod": "March 16, 2017",
		        		"eirNumber": "ENV-2014-1988-EIR",
		        		"SCHN": "2016101038",
		        		"councilDistrict": "11",
		        		"communityPlanArea": "Venice",
		        		"projectDescription": "",
		        		"projectLocation":"1209 S. 6th Avenue, Los Angeles, CA 90291",
		        		"projectShortDescription":"",
		        		"draftEIR": "eir-detail-draft.php",
		        		"finalEIR": "",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	},
		        	{
		        		"projectTitle": "6901 Santa Monica Boulevard Mixed-Use Project",
		        		"commentReviewPeriod": "March 2, 2017",
		        		"eirNumber": "ENV-2015-4612-EIR",
		        		"SCHN": "2016021044",
		        		"councilDistrict": "4",
		        		"communityPlanArea": "Hollywood",
		        		"projectLocation":"1100, 1106, 1110, 1114, 1118, 1122, 1126 Orange Drive; 6906, 6911, 6917, 6921, 6931 Santa Monica Boulevard; and 1107, 1111, 1115, 1119, 1121 Mansfield Avenue, Los Angeles, CA 90038",
		        		"projectShortDescription":"",
		        		"projectDescription": "",
		        		"draftEIR": "eir-detail-draft.php",
		        		"finalEIR": "",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	},
		        	{
		        		"projectTitle": "Spring Street Hotel Project",
		        		"commentReviewPeriod": "January 5, 2017",
		        		"eirNumber": "ENV-2015-2356-EIR",
		        		"SCHN": "2015101003",
		        		"councilDistrict": "14",
		        		"communityPlanArea": "Central City",		
		        		"projectLocation":"631, 633, and 635 South Spring Street, Los Angeles, CA 90014",
		        		"projectShortDescription":"",
		        		"projectDescription": "",
		        		"draftEIR": "eir-detail-draft.php",
		        		"finalEIR": "",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	},
		        	{
		        		"projectTitle": "8150 Sunset Boulevard",
		        		"commentReviewPeriod": "January 5, 2015",
		        		"eirNumber": "ENV 2013-2552-EIR",
		        		"SCHN": "2013091044",
		        		"councilDistrict": "4",
		        		"communityPlanArea": "Hollywood",		
		        		"projectLocation":"8150 W. Sunset Boulevard, Los Angeles, CA 90046",
		        		"projectShortDescription":"",
		        		"projectDescription": "",
		        		"draftEIR": "eir-detail-draft.php",
		        		"finalEIR": "eir-detail-final.php",
		        		"noticeOfPreparation":"notice-of-preparation.php"
		        	}
		        ];
	
		console.log($scope.data);
}]);