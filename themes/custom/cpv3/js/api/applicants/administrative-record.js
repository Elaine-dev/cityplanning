(function () {
  'use strict';

  var appFinalEIR = angular.module('demoApp');
  appFinalEIR.controller('administrativeRecordCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
	  $scope.enable = "false";
	  $scope.loadingText = "Loading ...";
	  
	  $scope.moveLastToTheBeginning = function () {
		  var a = $scope.data.pop();
          $scope.data.splice(0, 0, a);
	  };
	  
	  $timeout (function(){
		  $scope.enable = "true";
		  $scope.loadingText = "";
	  }, 2000);

      $rootScope.heading = "Administrative Record Certification & Index";

      $scope.data = [
	     				{
							"Title": "Admin Record Certification Ltr & Index Signed",
							"Type": "link",
							"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Admin Record Certification Ltr & Index Signed.pdf"
						},
						{
							"Title": "Bureau of Engineering Email Correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "C. Mills Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Carl Mills.pdf"
								},
								{
									"Title": "D. Williams Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Dale Williams.pdf"
								},
								{
									"Title": "E. Yew",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Edmond Yew.pdf"
								}
							]
						},
						{
							"Title": "L. Ibarra Email correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "L. Ibarra 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 1.pdf"
								},
								{
									"Title": "L. Ibarra 2",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 2.pdf"
								},
								{
									"Title": "L. Ibarra 3",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 3.pdf"
								},
								{
									"Title": "L. Ibarra 4",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 4.pdf"
								},
								{
									"Title": "L. Ibarra 5",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 5.pdf"
								},
								{
									"Title": "L. Ibarra 6",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/L. Ibarra Email Correspondence/L. Ibarra 6.pdf"
								},
								{
									"Title": "L. Ibarra Email Attachments",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/IbarraEmail.htm"
								}
							]
						},
						{
							"Title": "W. Lamborn Email correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "W. Lamborn 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/W. Lamborn Email Correspondence/W. Lamborn 1.pdf"
								},
								{
									"Title": "W. Lamborn 2",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/W. Lamborn Email Correspondence/W. Lamborn 2.pdf"
								},
								{
									"Title": "W. Lamborn 3",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/W. Lamborn Email Correspondence/W. Lamborn 3.pdf"
								},
								{
									"Title": "W. Lamborn 4",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/W. Lamborn Email Correspondence/W. Lamborn 4.pdf"
								},
								{
									"Title": "W. Lamborn 5",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/W. Lamborn Email Correspondence/W. Lamborn 5.pdf"
								},
								{
									"Title": "W. Lamborn Email Attachments",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/LambornEmail.htm"
								}
							]
						},
						{
							"Title": "C. Toy Lee Email correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "C. Toy Lee 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/C. Toy Lee Email Correspondence/C. Toy Lee 1.pdf"
								}
							]
						},
						{
							"Title": "V. Bertoni Email correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "V. Bertoni 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/V. Bertoni Email Correspondence/V. Bertoni 1.pdf"
								}
							]
						},
						{
							"Title": "Council District 4 Email correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "Council District 4 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Council District 4 Email Correspondence/Council District 4 Email Correspondence.pdf"
								}
							]
						},
						{
							"Title": "Department of Transportation Email Correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "W. Pringle Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Dept_trans/Wes Pringle.pdf"
								},
								{
									"Title": "E. Hunt Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/eHuntEmail.htm"
								},
								{
									"Title": "T. Carranza Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/Dept_trans/Tomas Carranza.pdf"
								}
							]
						},
						{
							"Title": "Department of Building and Safety Email Correspondence",
							"Type": "Section",
							"nodes": [
								{
									"Title": "P. Challita Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/ladbs/PascalChallita.pdf"
								},
								{
									"Title": "D. Schneidereit Email Correspondence",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/AdminRecord/ladbs/DanSchneidereit.pdf"
								}
							]
						}
				];
        console.log($scope);
    }]);

}());
