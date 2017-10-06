app.controller('homepageCtrl', function($scope, homepageService) {
	// display latest upcoming meetings
	homepageService.getUpcommingMeetings().then(function(response){
		$scope.upcomingMeetings = response.data.Entries;
	});
	
	// display upcoming hearing
	homepageService.getUpcommingHearings().then(function(response) {
		$scope.upcomingHearings = response.data.Entries;
	});
	
	// display latest news
	homepageService.getLatestNews().then(function(response){
		//$scope.latestNews = response.data.items;
		$scope.latestNews = [
		             		{
		            			"Desc": "Commercial Cannabis Location Restriction Ordinance and Supplement",
		            			"Url": "http://planning.lacity.org/ordinances/docs/CommercialCannabis/CommCannabis_TOC.html",
		            			"date":"2017-06-08",
		            			"isPDF": "False"
		            		},
		            		{
		            			"Desc": "Value Capture Ordinance",
		            			"Url": "http://planning.lacity.org/ordinances/docs/ValueCapture/ProposedOrdinance.pdf",
		            			"date":"2017-05-25",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Small Lot Code Amendment and Policy Update Summary Sheet - Updated April 11, 2017",
		            			"Url": "http://planning.lacity.org/ordinances/docs/SmallLot/CodeAmendment/updated/SS.pdf",
		            			"date":"2017-05-19",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Temporary Signs on Construction Walls Code Amendment",
		            			"Url": "http://planning.lacity.org/ordinances/docs/TempSignsconstructionWalls/AppendixA.pdf",
		            			"date":"2017-05-18",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Council Adopts Unapproved Dwelling Unit Affordable Housing Program",
		            			"Url": "http://planning.lacity.org/documents/exec/2017_NewsRelease2-05.10.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "New Development Services Center Opens in West Los Angeles",
		            			"Url": "http://planning.lacity.org/documents/exec/DCP_WLA_OPEN.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "2017 Spring Newsletter",
		            			"Url": "http://planning.lacity.org/Newsletters/2017SpringNewsletter.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Upcoming Opportunities for Environmental Consultants",
		            			"Url": "http://planning.lacity.org/documents/exec/ConsultantsFlyer.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "April Historic Preservation E-Newsletter",
		            			"Url": "http://preservation.lacity.org/sites/default/files/April_2017_Newsletter.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Draft Exposition Corridor Transit Neighborhood Plan",
		            			"Url": "http://planning.lacity.org/documents/policy/Expo_TNP.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Proposed West Los Angeles - Brentwood Multifamily Q Conditions",
		            			"Url": "http://planning.lacity.org/documents/policy/MultifamilyQConditions.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Site Plan Review Revisions DRAFT Code Amendment",
		            			"Url": "http://planning.lacity.org/ordinances/docs/SitePlanReview/DraftOrdinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "North Westlake Design District Ordinance",
		            			"Url": "http://planning.lacity.org/ordinances/docs/NorthWestlake/Ordinance2017.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "2016 Annual Report",
		            			"Url": "http://planning.lacity.org/https://planning.lacity.org/documents/exec/2016_AnnualReport.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "New Single-Family Residential Zone Regulations",
		            			"Url": "http://planning.lacity.org/ordinances/docs/R1VariationZones/FinalQA.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Measure JJJ - Transit Oriented Communities Affordable Housing Incentive Program Guidelines (TOC Guidelines)",
		            			"Url": "http://planning.lacity.org/ordinances/docs/toc/TOCGuidelines.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Measure JJJ - In-Lieu Fee Affordability Gaps Study",
		            			"Url": "http://planning.lacity.org/ordinances/docs/TOC/LA_Measure_JJJ_Affordability_Gap_Analysis_03132017_Edit.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Staff Recommendation Report on Bicycle Parking Code Amendment",
		            			"Url": "http://planning.lacity.org/ordinances/docs/bicyclepkg/StaffReport.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Temporary Signs on Construction Walls Code Amendment",
		            			"Url": "http://planning.lacity.org/ordinances/docs/TempSignsconstructionWalls/Ordinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Memorandum on Implementation of State Density Bonus Laws",
		            			"Url": "http://planning.lacity.org/documents/policy/StateDensity.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Protected Tree Code Amendment",
		            			"Url": "http://planning.lacity.org/documents/codeStudies/ProtectedTreeCA.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Winter 2017 Department of City Planning Newsletter",
		            			"Url": "http://planning.lacity.org/Newsletters/winter2017.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Inter-departmental Memo on AB 2299 and SB 1069 (Accessory Dwelling Units)",
		            			"Url": "http://planning.lacity.org/documents/Citywide/MemoAB2299.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Clarification of Development Projects Subject to Measure JJJ",
		            			"Url": "http://planning.lacity.org/documents/Citywide/JJJ_Clarification.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Hillside Construction Regulation \"HCR\" District",
		            			"Url": "http://planning.lacity.org/documents/CRAprojects/hcr.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Accessory Dwelling Unit Ordinance",
		            			"Url": "http://planning.lacity.org/ordinances/docs/ADU/ApprovedOrdinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Advisory Notice Relative To Above-Grade Parking",
		            			"Url": "http://planning.lacity.org/documents/policy/cpc_policies/CPC_AN_GradeParking.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Advisory Notice Relative To Pedestrian Bridges And Tunnels",
		            			"Url": "http://planning.lacity.org/documents/policy/cpc_policies/CPC_AN_BridgesAndTunnels.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Bicycle Parking Code Amendment",
		            			"Url": "http://planning.lacity.org/Ordinances/docs/BicyclePkg/Bicycle Parking Code Amendment - PUBLIC 11-7-16.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Zoning Administrator Interpretation (ZAI) - Second Dwelling Units",
		            			"Url": "http://planning.lacity.org/documents/Policy/ZA2016_ 4167_ ZAI.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "New Park Fee Rules",
		            			"Url": "http://planning.lacity.org/documents/CodeStudies/ParkFeesUpdate.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "2015 Growth and Infrastructure Report",
		            			"Url": "http://planning.lacity.org/PolicyInitiatives/GrowthandInfrastructure/2015Rpt.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Proposed R1 Variation Zones Code Amendment Recommendation Report",
		            			"Url": "http://planning.lacity.org/ordinances/docs/R1VariationZones/CPC-2016-2110-CA.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Citywide Policy Planning 2016 Performance Metric",
		            			"Url": "http://planning.lacity.org/documents/policy/PolicyPlanstatReport_Sept.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Affordable Housing Linkage Fee Ordinance",
		            			"Url": "http://planning.lacity.org/ordinances/docs/AHLF/UpdatedDraftOrdinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Parks Dedication and Fee Update Ordinance (aka Quimby)",
		            			"Url": "http://planning.lacity.org/ordinances/docs/ParksDedication/UpdateOrdinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Proposed Urban Agriculture Incentive Zone Ordinance Recommendation Report",
		            			"Url": "http://planning.lacity.org/ordinances/docs/UrbanAgriculture/StaffReport.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Mobility Hubs Guide",
		            			"Url": "http://www.urbandesignla.com/resources/MobilityHubsReadersGuide.php",
		            			"date":"2017-05-10",
		            			"isPDF": "False"
		            		},
		            		{
		            			"Desc": "Crenshaw Boulevard Streetscape Plan",
		            			"Url": "http://planning.lacity.org/documents/policy/CrenshalwBlStreetscapePlan.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Small Lot Code Amendment and Policy Update",
		            			"Url": "http://planning.lacity.org/ordinances/docs/SmallLot/CodeAmendment/updated/OrdAmend.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Westside Development Impact Fee Program Update - Coastal Transportation Corridor Specific Plan (CTCSP) and West Los Angeles Transportation Improvement and Mitigation Specific Plan (WLA TIMP)",
		            			"Url": "http://www.westsidemobilityplan.com",
		            			"date":"2017-05-10",
		            			"isPDF": "False"
		            		},
		            		{
		            			"Desc": "Updated Draft South Los Angeles New Community Plan",
		            			"Url": "http://planning.lacity.org/CPU/SouthLA/20141112_NCP_SLA_LoRes.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Home-Sharing Ordinance (Short Term Rentals)",
		            			"Url": "http://planning.lacity.org/ordinances/docs/HomeSharing/UpdatedDraftOrd.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Second Dwelling Unit Repeal Ordinance",
		            			"Url": "http://planning.lacity.org/ordinances/docs/SecondDwelling/SDU Repeal Ordinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "City Planning's New Application Form (CP-7771.1)",
		            			"Url": "http://planning.lacity.org/documents/dsc/dcpApplication.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Proposed Toluca Lake Community Design Overlay",
		            			"Url": "http://planning.lacity.org/documents/Policy/TolucaLakeCDO.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "2016 Quimby Fees Rates",
		            			"Url": "http://planning.lacity.org/documents/divisionofland/QuimbyFees2016.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Historic Broadway Sign District",
		            			"Url": "http://planning.lacity.org/documents/policy/BroadwaySignSupplemental.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Modifications to the Proposed West Adams Community Plan",
		            			"Url": "http://planning.lacity.org/documents/policy/WAdams.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "AB 744 (2015) Memo - Density Bonus and Parking",
		            			"Url": "http://planning.lacity.org/documents/policy/AB744memo.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Unapproved Dwelling Unit Ordinance",
		            			"Url": "http://planning.lacity.org/https://planning.lacity.org/ordinances/docs/UnapprovedDwellingUnit/UpdatedOrdinance.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Updated List of Uses Permitted in Various Zones",
		            			"Url": "http://planning.lacity.org/Documents/oza/15-2348Combined.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Elysian Valley Q Condition Update",
		            			"Url": "http://planning.lacity.org/documents/policy/ElysianValleyStaffRpt.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "Coastal Development Permits And Related Coastal Development Applications To Be Processed By The West-South Neighborhood Projects Section, Beginning August 1, 2015",
		            			"Url": "http://planning.lacity.org/Documents/oza/coastalDevelopment.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "New Fees and Processes for CUBs and CUXs",
		            			"Url": "http://planning.lacity.org/Documents/cc_unit/FlyerCom_ccu.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "New Interim Control Ordinances",
		            			"Url": "http://planning.lacity.org/Documents/HPOZ/ICOs_WhatsNew.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		},
		            		{
		            			"Desc": "ZA Memo 131-Expiration and Time Extensions for Subdivisions and Related Entitlements",
		            			"Url": "http://planning.lacity.org/za/memos/ZAMemo131.pdf",
		            			"date":"2017-05-10",
		            			"isPDF": "True"
		            		}
		            	]
		
		$scope.currentDate = new Date();		// get current year
	});
	
	// convert into date object
	$scope.convertToDate = function (stringDate){
	  var dateOut = new Date(stringDate);
	  dateOut.setDate(dateOut.getDate() + 1);
	  return dateOut;
	};
});