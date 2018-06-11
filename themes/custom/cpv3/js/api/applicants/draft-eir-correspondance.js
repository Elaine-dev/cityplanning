(function () {
  'use strict';

  angular.module('demoApp')
    .controller('draftCorrespondanceCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    	
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

    	$rootScope.heading = "Correspondence";

    	$scope.data = [
				{
					"Title": "Los Angeles Conservancy Letter - October 21, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LA Conservancy Letter.pdf"
				},
				{
					"Title": "EIR Traffic Consultant Email",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Hirsch Email.pdf"
				},
				{
					"Title": "VTT-72370-CN-1A Letter of Determination Mailing Affidavit",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Affidavit_list.pdf"
				},
				{
					"Title": "Materials Submitted to Commission Office",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Commission Office Letters.pdf"
				},
				{
					"Title": "E. Weinberg email 9-14-16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/EWeinbergLetter.pdf"
				},
				{
					"Title": "Notice of Completion - SCH Form",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/NOC Signed.pdf"
				},
				{
					"Title": "BTC Returned Envelopes",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/BTC Returned Envelopes.pdf"
				},
				{
					"Title": "BTC Mailing Affidavit",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/BTC Mailing Affidavit HO.pdf"
				},
				{
					"Title": "Hearing Officer Hearing- Proof of Publication",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/HO Hearing Publication.pdf"
				},
				{
					"Title": "KBenson Email",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/KristinaBenson.pdf"
				},
				{
					"Title": "JMilford Email",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Email JMilford 8-4-16.pdf"
				},
				{
					"Title": "LLake Email 8-2-16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Email LLake 8-2-16.pdf"
				},
				{
					"Title": "LLake Email 8-1-16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Email LLake 8-1-16.pdf"
				},
				{
					"Title": "LLake Email 7-29-16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/EmailLLake7-29-16.pdf"
				},
				{
					"Title": "CPC Hearing Submittals - July 28, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CPC Hearing Submittals2.pdf"
				},
				{
					"Title": "CD Email 7-29-16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CD 4 Email 7-29-16.pdf"
				},
				{
					"Title": "Council District 4 Correspondence - July 27, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CD4Correspondence.pdf"
				},
				{
					"Title": "Response to City of West Hollywood - July 27, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/WestHwdResponse.pdf"
				},
				{
					"Title": "City of West Hollywood Letter - July 25, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/WestHollywood.pdf"
				},
				{
					"Title": "LADOT Letter, July 26, 2016 - Corrected",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LADOT_ltr_corrected.pdf"
				},
				{
					"Title": "LADOT Letter, July 26, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LADOT_ltr_07_26_2016.pdf"
				},
				{
					"Title": "VTT-72370-CN-1A Appeal Report Emails",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT723070emails.pdf"
				},
				{
					"Title": "CPC-2013-2551-MCUP-DB-SPR Staff Report Email",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/StaffRptEmail.pdf"
				},
				{
					"Title": "LA Sanitation Correspondence - No. 1",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LABOS1.pdf"
				},
				{
					"Title": "LA Sanitation Correspondence - No. 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LABOS.pdf"
				},
				{
					"Title": "VTT-72370-CN Letter of Determination Mailing, June 23, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT-72370-CN LOD Mailing.pdf"
				},
				{
					"Title": "Response to City of West Hollywood Letter - June 21, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/WehoResponse.pdf"
				},
				{
					"Title": "Letter from the Applicant - July 13, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ltrFromApplicant07_13.pdf"
				},
				{
					"Title": "Letter from the Applicant - June 07, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/june7letter.pdf"
				},
				{
					"Title": "Notice of Availability Email, May 13, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/NOAEmail.pdf"
				},
				{
					"Title": "Materials submitted at public hearing - May 24, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/HearingNoticeMaterials2016-05-24.pdf"
				},
				{
					"Title": "LAFD Correspondence, May 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LAFD_ltr.pdf"
				},
				{
					"Title": "Bureau of Street Lighting Letter",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/StreetLighting.pdf"
				},
				{
					"Title": "Correspondence from Luna & Gushon (6-07-2016)",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LunaGlushon06_07.pdf"
				},
				{
					"Title": "Correspondence from Luna & Gushon (5-20-2016)",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CorrespondenceLunaGushon_5-20-16.pdf"
				},
				{
					"Title": "Gehry Partners Letter, March 24, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/gehryLetter.pdf"
				},
				{
					"Title": "Correspondence - October 28, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/GretchenSteinberg2.pdf"
				},
				{
					"Title": "Correspondence - October 26, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/MatthewGaskill.pdf"
				},
				{
					"Title": "Correspondence - October 25, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/8150 Correspondence part 3.pdf"
				},
				{
					"Title": "Correspondence - October 24, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/8150 Correspondence part 2.pdf"
				},
				{
					"Title": "Correspondence - October 23, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/8150 Correspondence.pdf"
				},
				{
					"Title": "Correspondence - August 29, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LauraLake1.pdf"
				},
				{
					"Title": "Correspondence - July 28, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_28.pdf"
				},
				{
					"Title": "Additional Correspondence - July 20, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_20add.pdf"
				},
				{
					"Title": "Correspondence - July 20, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_20.pdf"
				},
				{
					"Title": "Correspondence - July 14, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_14.pdf"
				},
				{
					"Title": "Additional Correspondence - July 12, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CarlRipaldi3.pdf"
				},
				{
					"Title": "Correspondence - July 12, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence7_12.pdf"
				},
				{
					"Title": "Correspondence - July 8, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_08.pdf"
				},
				{
					"Title": "Correspondence - July 7, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence07_07.pdf"
				},
				{
					"Title": "Correspondence - June 24, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_24.pdf"
				},
				{
					"Title": "Correspondence - June 23, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_23.pdf"
				},
				{
					"Title": "Correspondence - June 22, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_22.pdf"
				},
				{
					"Title": "Correspondence - June 20, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/AnastasiaMann.pdf"
				},
				{
					"Title": "Additional Correspondence - June 16, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Delabat2.pdf"
				},
				{
					"Title": "Correspondence - June 16, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_16.pdf"
				},
				{
					"Title": "Correspondence - June 15, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_15.pdf"
				},
				{
					"Title": "Correspondence - June 10, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_10.pdf"
				},
				{
					"Title": "Correspondence - June 9, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_09.pdf"
				},
				{
					"Title": "Correspondence - June 8, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_08.pdf"
				},
				{
					"Title": "Correspondence - June 7, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_07.pdf"
				},
				{
					"Title": "Correspondence - June 6, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_06.pdf"
				},
				{
					"Title": "Correspondence - June 2, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence06_02.pdf"
				},
				{
					"Title": "Correspondence - May 31, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence05_31.pdf"
				},
				{
					"Title": "Correspondence - May 26, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence2016-05-26.pdf"
				},
				{
					"Title": "Correspondence - May 24, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence2016-05-24.pdf"
				},
				{
					"Title": "Correspondence - May 23, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence-2016-05-23.pdf"
				},
				{
					"Title": "Correspondence - May 19, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence2016-05-19.pdf"
				},
				{
					"Title": "Correspondence - May 18, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence2016-05-18.pdf"
				},
				{
					"Title": "Correspondence - May 16, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence05_16.pdf"
				},
				{
					"Title": "Correspondence - May 12, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence05_12.pdf"
				},
				{
					"Title": "Correspondence - May 9, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence05_09.pdf"
				},
				{
					"Title": "Correspondence - May 5, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/JoeEastwood.pdf"
				},
				{
					"Title": "Correspondence - May 3, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence2.pdf"
				},
				{
					"Title": "Correspondence from Applicant 1",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ApplicantCorrespondence1.pdf"
				},
				{
					"Title": "Correspondence from Applicant 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ApplicantCorrespondence2.pdf"
				},
				{
					"Title": "Correspondence from Applicant 3",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/correspondence3.pdf"
				},
				{
					"Title": "Correspondence from Applicant 4",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ApplicantCorrespondence4.pdf"
				},
				{
					"Title": "Building and Safety, Grading - August 6, 2015",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/BS_Grading08062015.pdf"
				},
				{
					"Title": "LADBS Soils",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LADBSSoilsLtr.pdf"
				},
				{
					"Title": "LADOT Letter - VTT-72370",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/VTT72370-CNDOT.pdf"
				},
				{
					"Title": "LADWP Letter - VTT-72370",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/72370LADWPLtr.pdf"
				},
				{
					"Title": "LADWP (EMoosbrugger)",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ladwp(EMoosbrugger).pdf"
				},
				{
					"Title": "Golder Associates Letter",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/GolderAssociatesLtr.pdf"
				},
				{
					"Title": "Building and Safety - Grading 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/BSGrading2.pdf"
				},
				{
					"Title": "Building and Safety - Grading 3",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/BSGrading3.pdf"
				},
				{
					"Title": "Surface Fault Rupture Hazard Assessment",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/123-92034-02SunsetBlvdFaultInvestigationReport051815.pdf"
				},
				{
					"Title": "Response to City of L.A. Geology and Soils Report Correction Letter",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/123-92034ResponsetoCityComments051815.pdf"
				},
				{
					"Title": "Geotechnical Correspondence",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/LtrreGeotechCorrespondence(recdJune1).pdf"
				},
				{
					"Title": "Geotechnical Exploration and Recommendations Report",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/123-92034_8150SunsetGeotechRPT051815.pdf"
				},
				{
					"Title": "Correspondence (Misc Emails)",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Correspondence(Misc Emails).pdf"
				},
				{
					"Title": "Letter from County Recorder",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Ltr_County-Extension.pdf"
				},
				{
					"Title": "Returned Mail 1",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail.pdf"
				},
				{
					"Title": "Returned Mail 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail2.pdf"
				},
				{
					"Title": "Returned Mail 3",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail3.pdf"
				},
				{
					"Title": "Returned Mail 4",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail4.pdf"
				},
				{
					"Title": "Returned Mail 5",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail5.pdf"
				},
				{
					"Title": "Returned Mail 6",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail6.pdf"
				},
				{
					"Title": "Returned Mail 7",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail7.pdf"
				},
				{
					"Title": "Returned Mail 9",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail9.pdf"
				},
				{
					"Title": "Returned Mail 10",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail10.pdf"
				},
				{
					"Title": "Returned Mail 11",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail11.pdf"
				},
				{
					"Title": "Returned Mail 12",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail12.pdf"
				},
				{
					"Title": "Returned Mail 13",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail13.pdf"
				},
				{
					"Title": "Returned Mail 14",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail14.pdf"
				},
				{
					"Title": "Returned Mail 15",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail15.pdf"
				},
				{
					"Title": "Returned Mail 16",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail16.pdf"
				},
				{
					"Title": "Returned Mail 17",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail17.pdf"
				},
				{
					"Title": "Returned Mail 18",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ReturnedMail18.pdf"
				},
				{
					"Title": "Returned Mail 19",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail19.pdf"
				},
				{
					"Title": "Returned Mail 20",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail20.pdf"
				},
				{
					"Title": "Returned Mail 21",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail21.pdf"
				},
				{
					"Title": "Returned Mail 22",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail22.pdf"
				},
				{
					"Title": "Returned Mail 23",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail23.pdf"
				},
				{
					"Title": "Returned Mail 24",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail24.pdf"
				},
				{
					"Title": "Returned Mail 25",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail25.pdf"
				},
				{
					"Title": "Returned Mail 26",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/returnedmail26.pdf"
				},
				{
					"Title": "Returned Mail 27",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Returnedmail27.pdf"
				},
				{
					"Title": "Returned Mail 28",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Returnedmail28.pdf"
				},
				{
					"Title": "Returned Mail 29",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Returnedmail29.pdf"
				},
				{
					"Title": "Returned Mail 30",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Returned Mail 30.pdf"
				},
				{
					"Title": "Returned Mail 31",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/Returned Mail 31.pdf"
				},
				{
					"Title": "Certified Returns 1",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns1.pdf"
				},
				{
					"Title": "Certified Returns 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns2.pdf"
				},
				{
					"Title": "Certified Returns 3",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns3.pdf"
				},
				{
					"Title": "Certified Returns 4",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns4.pdf"
				},
				{
					"Title": "Certified Returns 5",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns5.pdf"
				},
				{
					"Title": "Certified Returns 6",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns6.pdf"
				},
				{
					"Title": "Certified Returns 7",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns7.pdf"
				},
				{
					"Title": "Certified Returns 8",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns8.pdf"
				},
				{
					"Title": "Certified Returns 9",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certreturns9.pdf"
				},
				{
					"Title": "Certified Returns 10",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/certifiedReturns10.pdf"
				},
				{
					"Title": "CD 4 Ext Letter Request",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/CD4ExtLtrRequest_Rcvd1-6-15.pdf"
				},
				{
					"Title": "LADWP (DKwan)",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ladwp(DKwan).pdf"
				},
				{
					"Title": "Return Notice",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/Correspondence/ReturnNotice1.pdf"
				},
				{
					"Title": "Bureau of Engineering - VTT72370",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/72370_BOE.pdf"
				},
				{
					"Title": "Building and Safety, Zoning - June 30, 2016",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/BS_Zoning.pdf"
				},
				{
					"Title": "Building and Safety - Zoning",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/B&SZoning.pdf"
				},
				{
					"Title": "Sanitation",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/Sanitation.pdf"
				},
				{
					"Title": "Fire - TR72370",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/tr72370_Fire.pdf"
				},
				{
					"Title": "NOPComments 1",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/NOPComments1.pdf"
				},
				{
					"Title": "NOPComments 2",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/NOPComments2.pdf"
				},
				{
					"Title": "NOPComments 3",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/NOPComments3.pdf"
				},
				{
					"Title": "Certified Mail Receipts",
					"Type": "link",
					"Url": "http://planning.lacity.org/eir/8150Sunset/correspondence/CertifiedMailReceipts.pdf"
				}
                   ];
      console.log($scope);
    }]);

}());
