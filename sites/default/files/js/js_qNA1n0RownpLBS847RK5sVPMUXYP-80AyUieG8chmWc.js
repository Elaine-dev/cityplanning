var app = angular.module('app', ['ngSanitize']);

app.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

//MainCtrl
app.controller('MainCtrl', function($scope, GeneralService) {
	$scope.removeTag = function($input){
		if($input=='&amp;nbsp;'){
			return "-";
		}
		return $input
	}
	
	$scope.getDynamicClass = function($index) {
      console.log($index);
      //$class = bold_tr;
      if($index==0) {
        return true;
      }
      if($index==12) {
        return true;
      }
      return false;
    }
	
	// case search
	$scope.$watch('case_search',function(newValue) {
		if(newValue !== undefined){
			GeneralService.getList(newValue).then(function(res){
				console.log(res);
			});	
		}
	});

	// case number search
	$scope.$watch('case_number_search',function(newValue) {
		GeneralService.getAgenda('http://161.149.221.137/caseinfo/casesummary.aspx?case='+newValue+'&engine=json').then(function(response){
			$scope.results = response.data;
			$scope.sections = $scope.results.sections;
			$scope.data = [];
			angular.forEach($scope.results.sections, function(value){
				angular.forEach(value.items, function(newValue){
					$scope.data.push({"key":newValue.key,"value":newValue.value});
				})
			})
		});
	});

	$scope.search = function(case_number){
		// console.log($scope.case_number);
		GeneralService.getAgenda('http://161.149.221.137/caseinfo/casesummary.aspx?case='+case_number+'&engine=json').then(function(response){
			$scope.results = response.data;
			$scope.sections = $scope.results.sections;
			$scope.data = [];
			$scope.items = [];
			angular.forEach($scope.results.sections, function(value){
				console.log(value);
				$scope.items.push();
				angular.forEach(value.items, function(newValue){
					$scope.data.push({"key":newValue.key,"value":newValue.value});
				})
			})
		});
	}
});

function caseSearchTypeAheadButtonPrototype(){
}

caseSearchTypeAheadButtonPrototype.jsonpCallback = function(res) {
	$response = res.response.replace(/\|\|/g, "\n");
	//console.log(typeof $response);

	if(typeof $response != undefined) {
		$rows = $response.split("\n");
		//console.log($rows);
		var html = '';
		$rows.forEach(function(elem){
			//console.log(elem);
			$new_row = elem.split("|");
			if($new_row[1]!==undefined){
				html += "<li style='font-size: 12px;'> <a style='text-decoration: none;' href='http://m-planning.azurewebsites.net/case-search?case_info="+$new_row[0]+"'>"+$new_row[1]+"</a></li>" ;
			}					
		});
		
		document.getElementById('divTestCases').style["display"] = "block";
		document.getElementById('ulMatch').innerHTML = html;
	}
}

app.service('GeneralService', function($http) {
	this.getAgenda = function(url) {
		return $http.get(url);
	}
	this.getList = function(case_number) {
		return $http.jsonp('http://161.149.221.137/caseinfo/getcaselist.aspx?q='+case_number+'&jsonpCallback=caseSearchTypeAheadButtonPrototype.jsonpCallback',{jsonpCallback: 'caseSearchTypeAheadButtonPrototype.jsonpCallback'});
	}
});
;
app.service('homepageService', function ( $http ){
	this.getUpcommingMeetings = function() {
		return $http.get("http://161.149.221.137/dcpapi/meetings/upcoming");
	}
	
	this.getUpcommingHearings = function () {
		return $http.get("http://161.149.221.137/dcpapi/meetings/upcoming/hearings");
	}
	
	this.getLatestNews = function () {
		return $http.get("http://161.149.221.137/dcpapi/general/whatsnew");
	}
});;
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
});;
/**
 * author Remy Sharp
 * url http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 */
(function ($) {
    function getViewportHeight() {
        var height = window.innerHeight; // Safari, Opera
        var mode = document.compatMode;

        if ( (mode || !$.support.boxModel) ) { // IE, Gecko
            height = (mode == 'CSS1Compat') ?
            document.documentElement.clientHeight : // Standards
            document.body.clientHeight; // Quirks
        }

        return height;
    }

    $(window).scroll(function () {
        var vpH = getViewportHeight(),
            scrolltop = (document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop),
            elems = [];
        
        // naughty, but this is how it knows which elements to check for
        $.each($.cache, function () {
            if (this.events && this.events.inview) {
                elems.push(this.handle.elem);
            }
        });

        if (elems.length) {
            $(elems).each(function () {
                var $el = $(this),
                    top = $el.offset().top,
                    height = $el.height(),
                    inview = $el.data('inview') || false;

                if (scrolltop > (top + height) || scrolltop + vpH < top) {
                    if (inview) {
                        $el.data('inview', false);
                        $el.trigger('inview', [ false ]);                        
                    }
                } else if (scrolltop < (top + height)) {
                    if (!inview) {
                        $el.data('inview', true);
                        $el.trigger('inview', [ true ]);
                    }
                }
            });
        }
    });
    
    // kick the event to pick up any elements already in view.
    // note however, this only works if the plugin is included after the elements are bound to 'inview'
    $(function () {
        $(window).scroll();
    });
    
    /** Animated number **/

    var reverse = function(value) {
      return value.split('').reverse().join('');
    };

    var defaults = {
      numberStep: function(now, tween) {
        var floored_number = Math.floor(now),
            target = $(tween.elem);

        target.text(floored_number);
      }
    };

    var handle = function( tween ) {
      var elem = tween.elem;
      if ( elem.nodeType && elem.parentNode ) {
        var handler = elem._animateNumberSetter;
        if (!handler) {
          handler = defaults.numberStep;
        }
        handler(tween.now, tween);
      }
    };

    if (!$.Tween || !$.Tween.propHooks) {
      $.fx.step.number = handle;
    } else {
      $.Tween.propHooks.number = {
        set: handle
      };
    }

    var extract_number_parts = function(separated_number, group_length) {
      var numbers = separated_number.split('').reverse(),
          number_parts = [],
          current_number_part,
          current_index,
          q;

      for(var i = 0, l = Math.ceil(separated_number.length / group_length); i < l; i++) {
        current_number_part = '';
        for(q = 0; q < group_length; q++) {
          current_index = i * group_length + q;
          if (current_index === separated_number.length) {
            break;
          }

          current_number_part = current_number_part + numbers[current_index];
        }
        number_parts.push(current_number_part);
      }

      return number_parts;
    };

    var remove_precending_zeros = function(number_parts) {
      var last_index = number_parts.length - 1,
          last = reverse(number_parts[last_index]);

      number_parts[last_index] = reverse(parseInt(last, 10).toString());
      return number_parts;
    };

    $.animateNumber = {
      numberStepFactories: {
        /**
         * Creates numberStep handler, which appends string to floored animated number on each step.
         *
         * @example
         * // will animate to 100 with "1 %", "2 %", "3 %", ...
         * $('#someid').animateNumber({
         *   number: 100,
         *   numberStep: $.animateNumber.numberStepFactories.append(' %')
         * });
         *
         * @params {String} suffix string to append to animated number
         * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
         */
        append: function(suffix) {
          return function(now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);

            target.prop('number', now).text(floored_number + suffix);
          };
        },

        /**
         * Creates numberStep handler, which format floored numbers by separating them to groups.
         *
         * @example
         * // will animate with 1 ... 217,980 ... 95,217,980 ... 7,095,217,980
         * $('#world-population').animateNumber({
         *    number: 7095217980,
         *    numberStep: $.animateNumber.numberStepFactories.separator(',')
         * });
         * @example
         * // will animate with 1% ... 217,980% ... 95,217,980% ... 7,095,217,980%
         * $('#salesIncrease').animateNumber({
         *   number: 7095217980,
         *   numberStep: $.animateNumber.numberStepFactories.separator(',', 3, '%')
         * });
         *
         * @params {String} [separator=' '] string to separate number groups
         * @params {String} [group_length=3] number group length
         * @params {String} [suffix=''] suffix to append to number
         * @returns {Function} numberStep-compatible function for use in animateNumber's parameters
         */
        separator: function(separator, group_length, suffix) {
          separator = separator || ' ';
          group_length = group_length || 3;
          suffix = suffix || '';

          return function(now, tween) {
            var negative = now < 0,
                floored_number = Math.floor((negative ? -1 : 1) * now),
                separated_number = floored_number.toString(),
                target = $(tween.elem);

            if (separated_number.length > group_length) {
              var number_parts = extract_number_parts(separated_number, group_length);

              separated_number = remove_precending_zeros(number_parts).join(separator);
              separated_number = reverse(separated_number);
            }

            target.prop('number', now).text((negative ? '-' : '') + separated_number + suffix);
          };
        }
      }
    };

    $.fn.animateNumber = function() {
      var options = arguments[0],
          settings = $.extend({}, defaults, options),

          target = $(this),
          args = [settings];

      for(var i = 1, l = arguments.length; i < l; i++) {
        args.push(arguments[i]);
      }

      // needs of custom step function usage
      if (options.numberStep) {
        // assigns custom step functions
        var items = this.each(function(){
          this._animateNumberSetter = options.numberStep;
        });

        // cleanup of custom step functions after animation
        var generic_complete = settings.complete;
        settings.complete = function() {
          items.each(function(){
            delete this._animateNumberSetter;
          });

          if ( generic_complete ) {
            generic_complete.apply(this, arguments);
          }
        };
      }

      return target.animate.apply(target, args);
    };


})(jQuery);
;
