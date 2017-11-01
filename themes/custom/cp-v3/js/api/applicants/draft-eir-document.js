(function () {
  'use strict';

  angular.module('demoApp')
  	.controller('draftEIRDocumentCtrl', ['$scope','$rootScope', '$timeout',  function ($scope, $rootScope, $timeout) {
  		$scope.enable = "false";
  	  	$scope.loadingText = "Loading ...";
  	  	
  	  	$scope.remove = function (scope) {
  	  		scope.remove();
  	  	};
      
  	  	$scope.toggle = function (scope) {
  	  		scope.toggle();
  	  	};

  	  	$scope.collapseAll = function () {
  	  		$scope.$broadcast('angular-ui-tree:collapse-all');
  	  	};
      
  	  	$scope.moveLastToTheBeginning = function () {
  	  		var a = $scope.data.pop();
  	  		$scope.data.splice(0, 0, a);
  	  	};
  	  	
  	  	//loading icon
        $timeout(function() {
        	$scope.enable = "true";
      	  	$scope.loadingText = "";
        }, 2000);

  	  	$rootScope.heading = "Additional Documents";

  	  	$scope.data = [
								{
									"Title": "Agenda - City Council, November 1, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/Council 11.1 agenda.pdf"
								},
								{
									"Title": "Agenda - Planning and Land Use Management Committee, October 25, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/PLUM 10.25 agenda.pdf"
								},
								{
									"Title": "Agenda - City Council, November 1, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/PLUM 9.27 agenda.pdf"
								},
								{
									"Title": "Agenda - City Council, September 23, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/Council 9.23 agenda.pdf"
								},
								{
									"Title": "Agenda - City Planning Commission Hearing, July 28, 2016, Item 7",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/CPC Agenda Item 7.pdf"
								},
								{
									"Title": "Agenda - City Planning Commission Hearing, July 28, 2016, Item 6",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/CPC Agenda item 6.pdf"
								},
								{
									"Title": "Audio - City Planning Commission Hearing, July 28, 2016, 1 of 2",
									"Type": "link",
									"Url": "http://planning.lacity.org/StaffRpt/Audios/CPC/2016/7-28-2016/Track7.mp3"
								},
								{
									"Title": "Audio - City Planning Commission Hearing, July 28, 2016, 2 of 2",
									"Type": "link",
									"Url": "http://planning.lacity.org/StaffRpt/Audios/CPC/2016/7-28-2016/Track8.mp3"
								},
								{
									"Title": "Audio - City Council, Tentative Tract Map Deadline Extension, September 23, 2016",
									"Type": "link",
									"Url": "http://lacity.granicus.com/MediaPlayer.php?view_id=130&clip_id=16195"
								},
								{
									"Title": "Audio - Planning and Land Use Management Committee Continuation, September 27, 2016",
									"Type": "link",
									"Url": "http://lacity.granicus.com/MediaPlayer.php?view_id=103&clip_id=16212"
								},
								{
									"Title": "Audio - Planning and Land Use Management Committee Hearing, October 25, 2016",
									"Type": "link",
									"Url": "http://lacity.granicus.com/MediaPlayer.php?view_id=103&clip_id=16278"
								},
								{
									"Title": "Audio - City Council, November 1, 2016",
									"Type": "link",
									"Url": "http://lacity.granicus.com/MediaPlayer.php?view_id=130&clip_id=16312"
								},
								{
									"Title": "Notice of Determination",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/NOD.pdf"
								},
								{
									"Title": "Council File 16-1011",
									"Type": "link",
									"Url": "https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=16-1011"
								},
								{
									"Title": "Council File 16-1011-S1",
									"Type": "link",
									"Url": "https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=16-1011-S1"
								},
								{
									"Title": "Council File 16-1011-S2",
									"Type": "link",
									"Url": "https://cityclerk.lacity.org/lacityclerkconnect/index.cfm?fa=ccfi.viewrecord&cfnumber=16-1011-S2"
								},
								{
									"Title": "VTT-72370-CN-1A City Clerk Transmittal",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT City Clerk Transmittal.pdf"
								},
								{
									"Title": "VTT-72370-CN-2A Extension of Time to Act",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Time to Act Extension.pdf"
								},
								{
									"Title": "Appeal 5 - CPC-2013-2551-CUB-DB-SPR-1A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC 5 - Fix the City.pdf"
								},
								{
									"Title": "Appeal 4 - CPC-2013-2551-CUB-DB-SPR-1A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC 4 - Hall.pdf"
								},
								{
									"Title": "Appeal 3 - CPC-2013-2551-CUB-DB-SPR-1A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC 3 - Manners.pdf"
								},
								{
									"Title": "Appeal 5 - VTT-72370-CN-2A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT 5 - Hall.pdf"
								},
								{
									"Title": "Appeal 2 - CPC-2013-2551-CUB-DB-SPR-1A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC 2 - Glushon.pdf"
								},
								{
									"Title": "Appeal 4 - VTT-72370-CN-2A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT 4 - Glushon.pdf"
								},
								{
									"Title": "Appeal 3 - VTT-72370-CN-2A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT 3 - Fix the City.pdf"
								},
								{
									"Title": "Appeal 2 - VTT-72370-CN-2A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT 2 -Manners.pdf"
								},
								{
									"Title": "Appeal - CPC-2013-2551-CUB-DB-SPR-1A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC-2013-2551-CUB-DB-SPR-1A.pdf"
								},
								{
									"Title": "Appeal - VTT-72370-CN-2A",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT-72370-CN-2A.pdf"
								},
								{
									"Title": "CPC-2013-2551-MCUP-DB-SPR Letter of Determination",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC13-2551 DL.pdf"
								},
								{
									"Title": "VTT-72370-CN-1A Letter of Determination",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT-72370 DL.pdf"
								},
								{
									"Title": "8150 Sunset CPC Power Point Presentation",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/8150SunsetCPC _PPT.pdf"
								},
								{
									"Title": "Correction Letter - July 28, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/SLily6072816440.pdf"
								},
								{
									"Title": "Councilmember Ryu Letter - July 21, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/RyuLtr.pdf"
								},
								{
									"Title": "Notice of Completion and Availability - Stamped Original Filed",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/FinalEIRNOCA.pdf"
								},
								{
									"Title": "Affidavit of Mailing - Appeal Recommendation Report (Corrected)",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/RevAppealReportAffidavit.pdf"
								},
								{
									"Title": "Affidavit of Mailing - Appeal Recommendation Report and City Planning Commission Recommendation Report",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/AppealandCPCAffidavit.pdf"
								},
								{
									"Title": "CPC-2013-2551-MCUP-DB-SPR Recommendation Report",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC-2551 Rec Report with exhibits.pdf"
								},
								{
									"Title": "VTT-72370-CN-1A Appeal Recommendation Report (Corrected)",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/AppealStaffRecReportREVISED.pdf"
								},
								{
									"Title": "VTT-72370-CN-1A Appeal Recommendation Report",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/AppealStaffRecReportPREV.pdf"
								},
								{
									"Title": "City Planning Commission Hearing - Site Posting Affidavit",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC_PostingAffidavit.pdf"
								},
								{
									"Title": "City Planning Commission Hearing Notice - Site Posting",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPCHearingNotice.pdf"
								},
								{
									"Title": "July 2016 - Landscape Plans and Rendered Elevations",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Landscapeplans.pdf"
								},
								{
									"Title": "DB Financial Feasibility Analysis Peer Review - Alternative 9",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/PeerReview.pdf"
								},
								{
									"Title": "DB Financial Feasibility Analysis - Alternative 9",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/DBFinancial.pdf"
								},
								{
									"Title": "VTT-72370-CN Appeal 1",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT-72370-CN_ Appeal1.pdf"
								},
								{
									"Title": "VTT-72370-CN Appeal 2",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT-72370-CN_ Appeal2.pdf"
								},
								{
									"Title": "VTT-72370-CN Appeal 3",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/WeHoAppeal3.pdf"
								},
								{
									"Title": "VTT-72370-CN Appeal 4",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/MannerAppeal4.pdf"
								},
								{
									"Title": "VTT-72370-CN Letter of Determination",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT72370_LOD.pdf"
								},
								{
									"Title": "VTT-72370-CN Revised Map - with Access Arrows",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/VTT72370_SIGNED_2016-0413_Revised.pdf"
								},
								{
									"Title": "Alternative 9 Drawing Set, May 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/2016-05-13_ALT9_11X17.pdf"
								},
								{
									"Title": "Alternative 9 Floor Area Diagram, May 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/SK-0124_11x17_8150SunsetFloorAreaDiagram.pdf"
								},
								{
									"Title": "Affidavit of Mailing - Notice of Completion and Availability",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/8150SunsetAffidavitofCertified_and_Regular.pdf"
								},
								{
									"Title": "Affidavit of Mailing - Hearing Notice",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/Affidavit3.pdf"
								},
								{
									"Title": "Affidavit of Mailing - Hearing Notice",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/8150SunsetAffidavitofmailingUSPSregularmail-HearingNotice_signed.pdf"
								},
								{
									"Title": "Notice of Availability - Libraries",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/All_library_letters.pdf"
								},
								{
									"Title": "Hearing Notice and Hearing Agenda, May 24, 2016",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/8150SunsetHearingNotice_and_Agenda.pdf"
								},
								{
									"Title": "Councilmember Ryu Letter",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/CMRyu8150Sunset.pdf"
								},
								{
									"Title": "VTT-72370-CN Staff Report",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/VTT-72370-CN.pdf"
								},
								{
									"Title": "Notice of Availability Mailing - Libraries and SCH",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/D_LauterFedExAffidavit.pdf"
								},
								{
									"Title": "BTC Proof of Posting",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/BTCPosting.pdf"
								},
								{
									"Title": "CPC-2013-2551-CUB-DB-SPR April 2016 Revised Application",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/CPC-2013-2551-CUB-DB-SPRRevisedApplicationApril2016.pdf"
								},
								{
									"Title": "DB Financial Feasibility Analysis",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/DBFinancialFeasibilityAnalysis.pdf"
								},
								{
									"Title": "CPC-2013-2551-CUB-ZV-DB-SPR March 2016 Radius Map and Mailing List",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/15-265ARadiusMapCombinedDocs.pdf"
								},
								{
									"Title": "VTT-72370-CN Revised Map",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/VTT72370_SIGNED_2016-0413.pdf"
								},
								{
									"Title": "Building and Safety, Grading Letter",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/BSGrading.pdf"
								},
								{
									"Title": "8150 Sunset ELDP Notice",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/8150SunsetELDPNotice.pdf"
								},
								{
									"Title": "CPC-2013-2551-CUB-ZV-DB-SPR Case File",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/CPC-2013-2551-CUB-ZV-DB-SPRCaseFile.pdf"
								},
								{
									"Title": "ENV-2013-2552-EIR Case File",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/ENV-2013-2552-EIRCaseFile.pdf"
								},
								{
									"Title": "VTT-72370-CN Case File",
									"Type": "link",
									"Url": "http://planning.lacity.org/eir/8150Sunset/8150SunsetscannedCaseFiles/VTT-72370-CNCaseFile.pdf"
								}
                   ];
      console.log($scope);
    }]);

}());
