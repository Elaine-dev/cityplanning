(function () {
  'use strict';

  var appDraft = angular.module('demoApp');
  appDraft.controller('draftEIRReferencesCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
	  $scope.enable = "false";
	  $scope.loadingText = "Loading ...";
      
	  $scope.moveLastToTheBeginning = function () {
		  var a = $scope.data.pop();
          $scope.data.splice(0, 0, a);
	  };

      $rootScope.heading = "References";
      
      //loading icon
      $timeout(function(){
    	  $scope.enable = "true";
    	  $scope.loadingText = "";
      }, 2000);

      $scope.data = [
     				{
    					"Title": "2.0. Project Description",
    					"Type": "Section",
    					"nodes": [
    					]
    				},
    				{
    					"Title": "3.0 General Description of Environmental Setting",
    					"Type": "Section",
    					"nodes": [
    					]
    				},
    				{
    					"Title": "4.A. Aesthetics",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "A.01_West Hollywood Historic and Cultural Resources Map (12-11-13)",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.A.%20Aesthetics/A.01_West%20Hollywood%20Historic%20and%20Cultural%20Resources%20Map%20(12-11-13).pdf"
    						}
    					]
    				},
    				{	
    					"Title": "4.B. Air Quality",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "AQ.01_Areas CA Federal Register.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.01_Areas%20CA%20Federal%20Register.pdf"
    						},
    						{
    							"Title": "AQ.02_CAPCOA GHG Mitigation Measures.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.02_CAPCOA%20GHG%20Mitigation%20Measures.pdf"
    						},
    						{
    							"Title": "AQ.03_CARB, AQ Data Statistics.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.03_CARB,%20AQ%20Data%20Statistics.pdf"
    						},
    						{
    							"Title": "AQ.04_CARB Ambient AQ Standards.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.04_CARB%20Ambient%20AQ%20Standards.pdf"
    						},
    						{
    							"Title": "AQ.05_CARB Area Designations.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.05_CARB%20Area%20Designations.pdf"
    						},
    						{
    							"Title": "AQ.06_CARB Nitrogen Dioxide Overview.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.06_CARB%20Nitrogen%20Dioxide%20Overview.pdf"
    						},
    						{
    							"Title": "AQ.07_CARB AQ and Land Use Handbook.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.07_CARB%20AQ%20and%20Land%20Use%20Handbook.pdf"
    						},
    						{
    							"Title": "AQ.08_CARB Fugitive Dust Handbook.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.08_CARB%20Fugitive%20Dust%20Handbook.pdf"
    						},
    						{
    							"Title": "AQ.09_CEC CA End-Use Survey.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.09_CEC%20CA%20End-Use%20Survey.pdf"
    						},
    						{
    							"Title": "AQ.10_Clean Air Act Statutes 1988.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.10_Clean%20Air%20Act%20Statutes%201988.pdf"
    						},
    						{
    							"Title": "AQ.11_SCAQMD AQ Significance Thresholds.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.11_SCAQMD%20AQ%20Significance%20Thresholds.pdf"
    						},
    						{
    							"Title": "AQ.12_Federal Register SCAB Ruling.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.12_Federal%20Register%20SCAB%20Ruling.pdf"
    						},
    						{
    							"Title": "AQ.13_QSR Drive Thru.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.13_QSR%20Drive%20Thru.pdf"
    						},
    						{
    							"Title": "AQ.14_SJVAPCD Charbroiling EF by Meat.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.14_SJVAPCD%20Charbroiling%20EF%20by%20Meat.pdf"
    						},
    						{
    							"Title": "AQ.15_SCAQMD 2003 AQMP Appendix V-4-24.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.15_SCAQMD%202003%20AQMP%20Appendix%20V-4-24.pdf"
    						},
    						{
    							"Title": "AQ.16_SCAQMD 2012 AQMP.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.16_SCAQMD%202012%20AQMP.pdf"
    						},
    						{
    							"Title": "AQ.17_SCAQMD AQ Significance Thresholds.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.17_SCAQMD%20AQ%20Significance%20Thresholds.pdf"
    						},
    						{
    							"Title": "AQ.18_SCAQMD 2012 Lead SIP for LA County.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.18_SCAQMD%202012%20Lead%20SIP%20for%20LA%20County.pdf"
    						},
    						{
    							"Title": "AQ.19_SCAQMD CEQA AQ Handbook 1993.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.19_SCAQMD%20CEQA%20AQ%20Handbook%201993.pdf"
    						},
    						{
    							"Title": "AQ.20_SCAQMD CEQA Handbook Ch 6 &amp; 10.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.20_SCAQMD%20CEQA%20Handbook%20Ch%206%20&amp;%2010.pdf"
    						},
    						{
    							"Title": "AQ.21_SCAQMD Commercial Cooking EF.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.21_SCAQMD%20Commercial%20Cooking%20EF.pdf"
    						},
    						{
    							"Title": "AQ.22_SCAQMD LST Methodology.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.22_SCAQMD%20LST%20Methodology.pdf"
    						},
    						{
    							"Title": "AQ.23_SCAQMD PM Threshold Methodology.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.23_SCAQMD%20PM%20Threshold%20Methodology.pdf"
    						},
    						{
    							"Title": "AQ.24_SCAQMD MATES III.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.24_SCAQMD%20MATES%20III.pdf"
    						},
    						{
    							"Title": "AQ.25_SCAQMD Guidance Document.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.25_SCAQMD%20Guidance%20Document.pdf"
    						},
    						{
    							"Title": "AQ.26_SCAQMD HRA Mobile Diesel.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.26_SCAQMD%20HRA%20Mobile%20Diesel.pdf"
    						},
    						{
    							"Title": "AQ.27_SCAQMD Historical Data by Year.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.27_SCAQMD%20Historical%20Data%20by%20Year.pdf"
    						},
    						{
    							"Title": "AQ.28_SCAQMD LSTs.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.28_SCAQMD%20LSTs.pdf"
    						},
    						{
    							"Title": "AQ.29_SCAQMD MATES III Cancer Risk Map.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.29_SCAQMD%20MATES%20III%20Cancer%20Risk%20Map.pdf"
    						},
    						{
    							"Title": "AQ.30_NPD Fast Food.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.30_NPD%20Fast%20Food.pdf"
    						},
    						{
    							"Title": "AQ.31_USEPA Air Data.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.31_USEPA%20Air%20Data.pdf"
    						},
    						{
    							"Title": "AQ.32_USEPA Green Book.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.B.%20Air%20Quality/AQ.32_USEPA%20Green%20Book.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.C.1. Archaeological and Palentological Resources",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "ARCH.01_Agenbroad.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.01_Agenbroad.PDF"
    						},
    						{
    							"Title": "ARCH.02_Altschul and Grenda 2002.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.02_Altschul%20and%20Grenda%202002.pdf"
    						},
    						{
    							"Title": "ARCH.03_Bean and Smith 1978 Gabrielino.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.03_Bean%20and%20Smith%201978%20Gabrielino.pdf"
    						},
    						{
    							"Title": "ARCH.04_Beck and Haase 1974 Historical Atlas of California (pp 15 &amp; 19).pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.04_Beck%20and%20Haase%201974%20Historical%20Atlas%20of%20California%20(pp%2015%20&%2019).pdf"
    						},
    						{
    							"Title": "ARCH.05_Brooks et al 1990 The Haverty Human Skeletons.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.05_Brooks%20et%20al%201990%20The%20Haverty%20Human%20Skeletons.pdf"
    						},
    						{
    							"Title": "ARCH.06_Castillo.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.06_Castillo.PDF"
    						},
    						{
    							"Title": "ARCH.07_Costo.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.07_Costo.PDF"
    						},
    						{
    							"Title": "ARCH.08_Elsasser.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.08_Elsasser.PDF"
    						},
    						{
    							"Title": "ARCH.09_Erlandson.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.09_Erlandson.PDF"
    						},
    						{
    							"Title": "ARCH.10_Erlandson 1994_La Brea Tar Pits.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.10_Erlandson%201994_La%20Brea%20Tar%20Pits.pdf"
    						},
    						{
    							"Title": "ARCH.11_Golder Associates 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.11_Golder%20Associates%202013.pdf"
    						},
    						{
    							"Title": "ARCH.12_Johnson et al. 2002_arlington springs revisited.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.12_Johnson%20et%20al.%202002_arlington%20springs%20revisited.pdf"
    						},
    						{
    							"Title": "ARCH.13_Johnston 1962 California's Gabrielino Indians (pp 74-77).pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.13_Johnston%201962%20California's%20Gabrielino%20Indians%20(pp%2074-77).pdf"
    						},
    						{
    							"Title": "ARCH.14_King 1978 Protohistoric and Historic Archaeology.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.14_King%201978%20Protohistoric%20and%20Historic%20Archaeology.pdf"
    						},
    						{
    							"Title": "ARCH.15_Lightfoot.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.15_Lightfoot.PDF"
    						},
    						{
    							"Title": "ARCH.16_McCawley 1996 The First Angelinos.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.16_McCawley%201996%20The%20First%20Angelinos.pdf"
    						},
    						{
    							"Title": "ARCH.17_Shipley 1978 Native Languages of California.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.17_Shipley%201978%20Native%20Languages%20of%20California.pdf"
    						},
    						{
    							"Title": "ARCH.18_Starr 2005 California A History.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.18_Starr%202005%20California%20A%20History.pdf"
    						},
    						{
    							"Title": "ARCH.19_Walker.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.19_Walker.PDF"
    						},
    						{
    							"Title": "ARCH.20_Wallace 1955_southern ca coastal chronology.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/ARCH.20_Wallace%201955_southern%20ca%20coastal%20chronology.pdf"
    						},
    						{
    							"Title": "Reference Master Sheet.xls",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.C.1.%20Archaeological%20and%20Palentological%20Resources/Reference%20Master%20Sheet.xls"
    						}
    					]
    				},
    				{
    					"Title": "4.C.2. Historical Resources",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "HIST.01_Swiss Explorer and Architect Kurt Meyer_October 2007.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.01_Swiss%20Explorer%20and%20Architect%20Kurt%20Meyer_October%202007.pdf"
    						},
    						{
    							"Title": "HIST.02_What Makes a Resource Historically Significant_7.7.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.02_What%20Makes%20a%20Resource%20Historically%20Significant_7.7.13.pdf"
    						},
    						{
    							"Title": "HIST.03_Inventory ofJulius Shulman_1935-2009.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.03_Inventory%20ofJulius%20Shulman_1935-2009.pdf"
    						},
    						{
    							"Title": "HIST.04_Kurt Werner Meyer Life Chronology_2.4.14.doc",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.04_Kurt%20Werner%20Meyer%20Life%20Chronology_2.4.14.doc"
    						},
    						{
    							"Title": "HIST.05_Permit LA46016-LA46027.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.05_Permit%20LA46016-LA46027.pdf"
    						},
    						{
    							"Title": "HIST.06_Permit LA46335.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.06_Permit%20LA46335.pdf"
    						},
    						{
    							"Title": "HIST.07_Permit LA80864.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.07_Permit%20LA80864.pdf"
    						},
    						{
    							"Title": "HIST.08_Permit LA83695.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.08_Permit%20LA83695.pdf"
    						},
    						{
    							"Title": "HIST.09_Permit LA87996.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.09_Permit%20LA87996.pdf"
    						},
    						{
    							"Title": "HIST.10_Exhibit Area Part of Building Addition_10.15.61.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.10_Exhibit%20Area%20Part%20of%20Building%20Addition_10.15.61.pdf"
    						},
    						{
    							"Title": "HIST.11_Arts &amp; Architecture_January 1964.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.11_Arts%20&%20Architecture_January%201964.pdf"
    						},
    						{
    							"Title": "HIST.12_National Register Bulleitin 15_1997.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.12_National%20Register%20Bulleitin%2015_1997.pdf"
    						},
    						{
    							"Title": "HIST.13_National Register Bulletin 16_9.30.86.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.C.2.%20Historical%20Resources/HIST.13_National%20Register%20Bulletin%2016_9.30.86.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.D. Geology and Soils",
    					"Type": "Section",
    					"nodes": [
    					]
    				},
    				{
    					"Title": "4.E. Greenhouse Gas Emissions",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "GHG.01_Anderegg Expert Credibility in Climate Change.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.01_Anderegg%20Expert%20Credibility%20in%20Climate%20Change.pdf"
    						},
    						{
    							"Title": "GHG.02_CAPCOA CEQA and Climate Change.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.02_CAPCOA%20CEQA%20and%20Climate%20Change.pdf"
    						},
    						{
    							"Title": "GHG.03_CAPCOA CalEEMod User's Guide.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.03_CAPCOA%20CalEEMod%20User's%20Guide.pdf"
    						},
    						{
    							"Title": "GHG.04_CAPCOA GHG Mitigation Measures.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.04_CAPCOA%20GHG%20Mitigation%20Measures.pdf"
    						},
    						{
    							"Title": "GHG.05_CARB Clean Cars.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.05_CARB%20Clean%20Cars.pdf"
    						},
    						{
    							"Title": "GHG.06_CARB GHG 2000-2012.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.06_CARB%20GHG%202000-2012.pdf"
    						},
    						{
    							"Title": "GHG.07_CARB GHG 2020.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.07_CARB%20GHG%202020.pdf"
    						},
    						{
    							"Title": "GHG.08_CARB Scoping Plan.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.08_CARB%20Scoping%20Plan.pdf"
    						},
    						{
    							"Title": "GHG.09_CARB Initial Statement Mandatory GHG Reporting.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.09_CARB%20Initial%20Statement%20Mandatory%20GHG%20Reporting.pdf"
    						},
    						{
    							"Title": "GHG.10_CARB Protocol Wastewater.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.10_CARB%20Protocol%20Wastewater.pdf"
    						},
    						{
    							"Title": "GHG.11_CARB_OFFROAD Tech Memo.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.11_CARB_OFFROAD%20Tech%20Memo.pdf"
    						},
    						{
    							"Title": "GHG.12_CARB Early Action Climate Change.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.12_CARB%20Early%20Action%20Climate%20Change.pdf"
    						},
    						{
    							"Title": "GHG.13_CA 2010 Green Building Code.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.13_CA%202010%20Green%20Building%20Code.pdf"
    						},
    						{
    							"Title": "GHG.14_Climate Registry Protocol v2.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.14_Climate%20Registry%20Protocol%20v2.pdf"
    						},
    						{
    							"Title": "GHG.15_CA CCC_Our Changing Climate.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.15_CA%20CCC_Our%20Changing%20Climate.pdf"
    						},
    						{
    							"Title": "GHG.16_CA DOF 2010-2012 Population.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.16_CA%20DOF%202010-2012%20Population.pdf"
    						},
    						{
    							"Title": "GHG.17_CA DOF GDP.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.17_CA%20DOF%20GDP.pdf"
    						},
    						{
    							"Title": "GHG.18_CA DWR Future Water Demand.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.18_CA%20DWR%20Future%20Water%20Demand.pdf"
    						},
    						{
    							"Title": "GHG.19_CEC CA End-Use Survey.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.19_CEC%20CA%20End-Use%20Survey.pdf"
    						},
    						{
    							"Title": "GHG.20_CEC GHG Emissions and Sinks.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.20_CEC%20GHG%20Emissions%20and%20Sinks.pdf"
    						},
    						{
    							"Title": "GHG.21_CEC Water-Related Energy Use.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.21_CEC%20Water-Related%20Energy%20Use.PDF"
    						},
    						{
    							"Title": "GHG.22_CEC Climate Change Scenarios.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.22_CEC%20Climate%20Change%20Scenarios.pdf"
    						},
    						{
    							"Title": "GHG.23_CalEPA 2006 Report to Governor.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.23_CalEPA%202006%20Report%20to%20Governor.pdf"
    						},
    						{
    							"Title": "GHG.24_CalEPA 2010 Report to Governor.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.24_CalEPA%202010%20Report%20to%20Governor.PDF"
    						},
    						{
    							"Title": "GHG.25_CA Climate Action Team Report.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.25_CA%20Climate%20Action%20Team%20Report.pdf"
    						},
    						{
    							"Title": "GHG.26_City LA GreenLA ActionPlan.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.26_City%20LA%20GreenLA%20ActionPlan.pdf"
    						},
    						{
    							"Title": "GHG.27_IPCC National GHG Inventories.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.27_IPCC%20National%20GHG%20Inventories.pdf"
    						},
    						{
    							"Title": "GHG.28_IPCC 5th Assessment Summary for Policymakers.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.28_IPCC%205th%20Assessment%20Summary%20for%20Policymakers.pdf"
    						},
    						{
    							"Title": "GHG.29_IPCC 4th Synthesis Report.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.29_IPCC%204th%20Synthesis%20Report.pdf"
    						},
    						{
    							"Title": "GHG.30_Letter Bryant to Chrisman 041309.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.30_Letter%20Bryant%20to%20Chrisman%20041309.pdf"
    						},
    						{
    							"Title": "GHG.31_LADWP Power Integrated Plan.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.31_LADWP%20Power%20Integrated%20Plan.pdf"
    						},
    						{
    							"Title": "GHG.32_LADWP News.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.32_LADWP%20News.pdf"
    						},
    						{
    							"Title": "GHG.33_NRC Advancing the Science of Climate Change.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.33_NRC%20Advancing%20the%20Science%20of%20Climate%20Change.pdf"
    						},
    						{
    							"Title": "GHG.34_OPR Technical Advisory.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.34_OPR%20Technical%20Advisory.pdf"
    						},
    						{
    							"Title": "GHG.35_Pacific CA and Water.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.35_Pacific%20CA%20and%20Water.pdf"
    						},
    						{
    							"Title": "GHG.36_Parmesan Ecological Impacts.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.36_Parmesan%20Ecological%20Impacts.pdf"
    						},
    						{
    							"Title": "GHG.37_PBL CO2 Trends.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.37_PBL%20CO2%20Trends.pdf"
    						},
    						{
    							"Title": "GHG.38_QSR Drive Thru.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.38_QSR%20Drive%20Thru.pdf"
    						},
    						{
    							"Title": "GHG.39_SCAQMD GHG Meeting 15.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.39_SCAQMD%20GHG%20Meeting%2015.pdf"
    						},
    						{
    							"Title": "GHG.40_SCAQMD Agenda No. 31.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.40_SCAQMD%20Agenda%20No.%2031.pdf"
    						},
    						{
    							"Title": "GHG.41_NPD Fast Food.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.41_NPD%20Fast%20Food.pdf"
    						},
    						{
    							"Title": "GHG.42_USEPA Fuel Economy.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.42_USEPA%20Fuel%20Economy.pdf"
    						},
    						{
    							"Title": "GHG.43_USEPA GHG Emissions and Sinks - Waste.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.E.%20Greenhouse%20Gas%20Emissions/GHG.43_USEPA%20GHG%20Emissions%20and%20Sinks%20-%20Waste.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.F. Land Use",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "LU.01_Hollywood Community Plan_1988.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.F.%20Land%20Use/LU.01_Hollywood%20Community%20Plan_1988.pdf"
    						},
    						{
    							"Title": "LU.02_Hollywood Community Plan_GP LU Map.2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org//eir/8150Sunset/References/4.F.%20Land%20Use/LU.02_Hollywood%20Community%20Plan_GP%20LU%20Map.2014.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.G. Noise",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "N.01_Engineering Noise Control_1988.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.01_Engineering%20Noise%20Control_1988.pdf"
    						},
    						{
    							"Title": "N.02_ Beranek and Newman, Miller_1981.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.02_%20Beranek%20and%20Newman,%20Miller_1981.pdf"
    						},
    						{
    							"Title": "N.03_Transportation Earthborne Vibrations_2002.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.03_Transportation%20Earthborne%20Vibrations_2002.pdf"
    						},
    						{
    							"Title": "N.04_Technical Noise Supplement_1998.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.04_Technical%20Noise%20Supplement_1998.pdf"
    						},
    						{
    							"Title": "N.05_ FTA Noise and Vibration Impact Assessment Chapter 7_1995.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.05_%20FTA%20Noise%20and%20Vibration%20Impact%20Assessment%20Chapter%207_1995.pdf"
    						},
    						{
    							"Title": "N.06_FTA Noise and Vibration Impact Assessment_1995.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.06_FTA%20Noise%20and%20Vibration%20Impact%20Assessment_1995.pdf"
    						},
    						{
    							"Title": "N.07_FHWA User Guide_2006.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.07_FHWA%20User%20Guide_2006.pdf"
    						},
    						{
    							"Title": "N.08_Construction Noise Control Program and Mitigation Strategy_2000.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.08_Construction%20Noise%20Control%20Program%20and%20Mitigation%20Strategy_2000.pdf"
    						},
    						{
    							"Title": "N.09_City of LA Noise Element_1999.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.09_City%20of%20LA%20Noise%20Element_1999.pdf"
    						},
    						{
    							"Title": "N.10_General Plan Guidelines_2002.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.G.%20Noise/N.10_General%20Plan%20Guidelines_2002.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.H. Population, Housing and Employment",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "POP.01_LAUSD 2012 Developer Fee Study_2.9.12.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.H.%20Population,%20Housing%20and%20Employment/POP.01_LAUSD%202012%20Developer%20Fee%20Study_2.9.12.pdf"
    						},
    						{
    							"Title": "POP.02_SCAG RTP 2012-2035_April 2012.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.H.%20Population,%20Housing%20and%20Employment/POP.02_SCAG%20RTP%202012-2035_April%202012.pdf"
    						},
    						{
    							"Title": "POP.03_SCAG Growth Forecasting Website.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.H.%20Population,%20Housing%20and%20Employment/POP.03_SCAG%20Growth%20Forecasting%20Website.pdf"
    						},
    						{
    							"Title": "POP.04_U.S. Bureau of Census_General Population and Housing.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.H.%20Population,%20Housing%20and%20Employment/POP.04_U.S.%20Bureau%20of%20Census_General%20Population%20and%20Housing.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.I.1. Fire Protection and Emergency Medical Services",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "FIRE.01_LAFD Website, Department Overview_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.1.%20Fire%20Protection%20and%20Emergency%20Medical%20Services/FIRE.01_LAFD%20Website,%20Department%20Overview_October%202013.pdf"
    						},
    						{
    							"Title": "FIRE.02_LAFD Website, What is the New Deployment Plan_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.1.%20Fire%20Protection%20and%20Emergency%20Medical%20Services/FIRE.02_LAFD%20Website,%20What%20is%20the%20New%20Deployment%20Plan_October%202013.pdf"
    						},
    						{
    							"Title": "FIRE.03_LAFD Website, Fire Stations_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.1.%20Fire%20Protection%20and%20Emergency%20Medical%20Services/FIRE.03_LAFD%20Website,%20Fire%20Stations_October%202013.pdf"
    						},
    						{
    							"Title": "FIRE.04_LAFD Website, New LAFD Deployment Plan_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.1.%20Fire%20Protection%20and%20Emergency%20Medical%20Services/FIRE.04_LAFD%20Website,%20New%20LAFD%20Deployment%20Plan_October%202013.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.I.2. Police Protection",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "POL.01_About OEM_July 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.01_About%20OEM_July%202013.pdf"
    						},
    						{
    							"Title": "POL.02_Drivng Down Crime Rates_6.28.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.02_Drivng%20Down%20Crime%20Rates_6.28.13.pdf"
    						},
    						{
    							"Title": "POL.03_LAPD Website, COMPSTAT_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.03_LAPD%20Website,%20COMPSTAT_October%202013.pdf"
    						},
    						{
    							"Title": "POL.04_COMPSTAT Citywide Profile 7.3.14-8.9.14.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.04_COMPSTAT%20Citywide%20Profile%207.3.14-8.9.14.pdf"
    						},
    						{
    							"Title": "POL.05_COMPSTAT Plus_July 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.05_COMPSTAT%20Plus_July%202013.pdf"
    						},
    						{
    							"Title": "POL.06_Design Out Crime_July 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.06_Design%20Out%20Crime_July%202013.pdf"
    						},
    						{
    							"Title": "POL.07_LAPD Website, Hollywood Community Police Station_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.07_LAPD%20Website,%20Hollywood%20Community%20Police%20Station_October%202013.pdf"
    						},
    						{
    							"Title": "POL.08_LAPD Website_10.3.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.08_LAPD%20Website_10.3.13.pdf"
    						},
    						{
    							"Title": "POL.09_Crime Rate_April 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.2.%20Police%20Protection/POL.09_Crime%20Rate_April%202014.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.I.3. Parks and Recreation",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "REC.01_Hollywood Central Park Website_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.01_Hollywood%20Central%20Park%20Website_October%202013.pdf"
    						},
    						{
    							"Title": "REC.02_2009 Citywide Community Needs Assessment_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.02_2009%20Citywide%20Community%20Needs%20Assessment_October%202013.pdf"
    						},
    						{
    							"Title": "REC.03_LADRP Website, Park Sites_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.03_LADRP%20Website,%20Park%20Sites_October%202013.pdf"
    						},
    						{
    							"Title": "REC.04_LADRP Website, Seniors_Octorber 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.04_LADRP%20Website,%20Seniors_Octorber%202013.pdf"
    						},
    						{
    							"Title": "REC.05_LADRP Website, Who We Are_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.05_LADRP%20Website,%20Who%20We%20Are_October%202013.pdf"
    						},
    						{
    							"Title": "REC.06_LADRP Website, 50 Parks Initiative_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.06_LADRP%20Website,%2050%20Parks%20Initiative_October%202013.pdf"
    						},
    						{
    							"Title": "REC.07_FEIR West Hollywood GP and CAP_October 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.3.%20Parks%20and%20Recreation/REC.07_FEIR%20West%20Hollywood%20GP%20and%20CAP_October%202010.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.I.4. Libraries",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "LIB.1_LAPL Website, Library Facts 2013_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.4.%20Libraries/LIB.1_LAPL%20Website,%20Library%20Facts%202013_October%202013.pdf"
    						},
    						{
    							"Title": "LIB.2_Information About Measure L_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.4.%20Libraries/LIB.2_Information%20About%20Measure%20L_October%202013.pdf"
    						},
    						{
    							"Title": "LIB.3_LAPL Website, Statistical Information_October 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.I.4.%20Libraries/LIB.3_LAPL%20Website,%20Statistical%20Information_October%202013.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.J. Transportation and Circulation",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "TRAF.01_LAPL Highway Capacity Manual_2000.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.J.%20Transportation%20and%20Circulation/TRAF.01_LAPL%20Highway%20Capacity%20Manual_2000.pdf"
    						},
    						{
    							"Title": "TRAF.02_LAMC Section 12.21.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.J.%20Transportation%20and%20Circulation/TRAF.02_LAMC%20Section%2012.21.pdf"
    						},
    						{
    							"Title": "TRAF.03_LADOT Policies and Procedures_2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.J.%20Transportation%20and%20Circulation/TRAF.03_LADOT%20Policies%20and%20Procedures_2013.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.K.1. Water Supply",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "WS.01_Managing an Uncertain Future_October 2008.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.01_Managing%20an%20Uncertain%20Future_October%202008.pdf"
    						},
    						{
    							"Title": "WS.02_Climate Change Characterization_December 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.02_Climate%20Change%20Characterization_December%202010.pdf"
    						},
    						{
    							"Title": "WS.03_Sustainabiligy Targets_9.20.10.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.03_Sustainabiligy%20Targets_9.20.10.pdf"
    						},
    						{
    							"Title": "WS.04_Sustainability Workgroup_4.22.09.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.04_Sustainability%20Workgroup_4.22.09.pdf"
    						},
    						{
    							"Title": "WS.05_Progess on Incorporating Climate Change_July 2006.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.05_Progess%20on%20Incorporating%20Climate%20Change_July%202006.pdf"
    						},
    						{
    							"Title": "WS.06_DWR, State Water Project_3.4.14.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.06_DWR,%20State%20Water%20Project_3.4.14.pdf"
    						},
    						{
    							"Title": "WS.07_Future Climate Projections_April 2009.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.07_Future%20Climate%20Projections_April%202009.pdf"
    						},
    						{
    							"Title": "WS.08_20x2020_February 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.08_20x2020_February%202010.pdf"
    						},
    						{
    							"Title": "WS.09_Office of Governor Website_3.6.14.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.09_Office%20of%20Governor%20Website_3.6.14.pdf"
    						},
    						{
    							"Title": "WS.10_UWMP 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.10_UWMP%202010.pdf"
    						},
    						{
    							"Title": "WS.11_LADWP, City of LA Water Conservation Ordinance Fact Sheet_8.18.10.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.11_LADWP,%20City%20of%20LA%20Water%20Conservation%20Ordinance%20Fact%20Sheet_8.18.10.pdf"
    						},
    						{
    							"Title": "WS.12_LADWP, Fire Service Pressure Flow Report, 38449_7.8.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.12_LADWP,%20Fire%20Service%20Pressure%20Flow%20Report,%2038449_7.8.13.pdf"
    						},
    						{
    							"Title": "WS.13_Securing LAs Water Supply_2008.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.13_Securing%20LAs%20Water%20Supply_2008.pdf"
    						},
    						{
    							"Title": "WS.14_MWDSC News Release_2.11.14.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.14_MWDSC%20News%20Release_2.11.14.pdf"
    						},
    						{
    							"Title": "WS.15_MWDSC, IWRP, Report No. 1373_October 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.15_MWDSC,%20IWRP,%20Report%20No.%201373_October%202010.pdf"
    						},
    						{
    							"Title": "WS.16_MWDSC, IWRPI_10.9.12.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.16_MWDSC,%20IWRPI_10.9.12.pdf"
    						},
    						{
    							"Title": "WS.17_RUWMP_November 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.17_RUWMP_November%202010.pdf"
    						},
    						{
    							"Title": "WS.18_Report from Water Planning and Stewardship Committee_9.11.07.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.18_Report%20from%20Water%20Planning%20and%20Stewardship%20Committee_9.11.07.pdf"
    						},
    						{
    							"Title": "WS.19_Guidelines for Estimating Unmetered Landscaping Water Use_November 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.1.%20Water%20Supply/WS.19_Guidelines%20for%20Estimating%20Unmetered%20Landscaping%20Water%20Use_November%202013.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.K.2. Wastewater",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "WW.01_Special Order No. 006-0691.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.01_Special%20Order%20No.%20006-0691.pdf"
    						},
    						{
    							"Title": "WW.02_Visionary Strategy_December 2006.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.02_Visionary%20Strategy_December%202006.pdf"
    						},
    						{
    							"Title": "WW.03_IRP, Facilities Plan, CIP_December 2006.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.03_IRP,%20Facilities%20Plan,%20CIP_December%202006.pdf"
    						},
    						{
    							"Title": "WW.04_IRP_September 2006.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.04_IRP_September%202006.pdf"
    						},
    						{
    							"Title": "WW.05_Hyperion Treatment Plant_10.9.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.05_Hyperion%20Treatment%20Plant_10.9.13.pdf"
    						},
    						{
    							"Title": "WW.06_Wastewater, About Wastewater, Facts and Figures_10.9.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.2.%20Wastewater/WW.06_Wastewater,%20About%20Wastewater,%20Facts%20and%20Figures_10.9.13.pdf"
    						}
    					]
    				},
    				{
    					"Title": "4.K.3. Solid Waste",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "SW.01_Counting Down to Zero Waste Plan_April 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.01_Counting%20Down%20to%20Zero%20Waste%20Plan_April%202014.pdf"
    						},
    						{
    							"Title": "SW.02_Strategic Programs_10.3.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.02_Strategic%20Programs_10.3.13.pdf"
    						},
    						{
    							"Title": "SW.03_SWIRP Policy and Programs Fact Sheet_3.20.09.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.03_SWIRP%20Policy%20and%20Programs%20Fact%20Sheet_3.20.09.pdf"
    						},
    						{
    							"Title": "SW.04_Zero Waste Progress Report_March 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.04_Zero%20Waste%20Progress%20Report_March%202013.pdf"
    						},
    						{
    							"Title": "SW.05_IWMP 2012 Annual Report_August 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.05_IWMP%202012%20Annual%20Report_August%202013.pdf"
    						},
    						{
    							"Title": "SW.06_SWIRP Fact Sheet_10.4.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/4.K.3.%20Solid%20Waste/SW.06_SWIRP%20Fact%20Sheet_10.4.13.pdf"
    						}
    					]
    				},
    				{
    					"Title": "6.0. Other CEQA Considerations",
    					"Type": "Section",
    					"nodes": [
    						{
    							"Title": "OTHER.01_CAPCOA, Quantifying GHG MM_August 2010.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.01_CAPCOA,%20Quantifying%20GHG%20MM_August%202010.pdf"
    						},
    						{
    							"Title": "OTHER.02_CARB Final Reg Order, Amendments to Reduce Emissions_August 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.02_CARB%20Final%20Reg%20Order,%20Amendments%20to%20Reduce%20Emissions_August%202014.pdf"
    						},
    						{
    							"Title": "OTHER.03_2008 California Motor Vehicle Stock, Travel and Fuel Forecast.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.03_2008%20California%20Motor%20Vehicle%20Stock,%20Travel%20and%20Fuel%20Forecast.pdf"
    						},
    						{
    							"Title": "OTHER.04_CEC, California Solar Resources_April 2005.PDF",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.04_CEC,%20California%20Solar%20Resources_April%202005.PDF"
    						},
    						{
    							"Title": "OTHER.05_CEC, California Wind Resource Potential_August 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.05_CEC,%20California%20Wind%20Resource%20Potential_August%202014.pdf"
    						},
    						{
    							"Title": "OTHER.06_CA Gas and Electric Utilities 2014 Gas Report.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.06_CA%20Gas%20and%20Electric%20Utilities%202014%20Gas%20Report.pdf"
    						},
    						{
    							"Title": "OTHER.07_LAPW, Bureau of Sanitation, Strategic Programs_9.29.13.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.07_LAPW,%20Bureau%20of%20Sanitation,%20Strategic%20Programs_9.29.13.pdf"
    						},
    						{
    							"Title": "OTHER.08_LADWP, Renewables Portfolio Policy and Enforcement Program_December 2013.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.08_LADWP,%20Renewables%20Portfolio%20Policy%20and%20Enforcement%20Program_December%202013.pdf"
    						},
    						{
    							"Title": "OTHER.09_LADWP, Facts and Figures_July 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.09_LADWP,%20Facts%20and%20Figures_July%202014.pdf"
    						},
    						{
    							"Title": "OTHER.10_LADWP 2012 Power Integrated Resource Plan_December 2012.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.10_LADWP%202012%20Power%20Integrated%20Resource%20Plan_December%202012.pdf"
    						},
    						{
    							"Title": "OTHER.11_California Emissions Estimator Model.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.11_California%20Emissions%20Estimator%20Model.pdf"
    						},
    						{
    							"Title": "OTHER.12_LA Times Hybrid Article_5.22.14.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.12_LA%20Times%20Hybrid%20Article_5.22.14.pdf"
    						},
    						{
    							"Title": "OTHER.13_U.S. Energy Info Admin, Table F3 Estimates 2012_July 2014.pdf",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/6.0.%20Other%20CEQA%20Considerations/OTHER.13_U.S.%20Energy%20Info%20Admin,%20Table%20F3%20Estimates%202012_July%202014.pdf"
    						}
    					]
    				},{
    							"Title": "8150 Sunset Boulevard Mixed Use Project Draft EIR References for City Index.doc",
    							"Type": "link",
    							"Url": "http://planning.lacity.org/eir/8150Sunset/References/8150%20Sunset%20Boulevard%20Mixed%20Use%20Project%20Draft%20EIR%20References%20for%20City%20Index.doc"
    						}
    			];
      
        console.log($scope);
      
    }]);

}());
