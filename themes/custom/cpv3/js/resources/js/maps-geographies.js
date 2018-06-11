(function () {
  'use strict';

  angular.module('demoApp')
    .controller('mapsGeographiesCtrl', ['$scope', function ($scope) {
      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
      };

      $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };

      $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };

      $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

      $scope.data = [
						{
							'id': 1,
							'title': 'Citywide Maps',
						    'nodes': [
						    	{'id': 11, 'title': 'City Boundary', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CityBoundary.pdf'},
						    	{'id': 12, 'title': 'Commercial Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CommlZones.pdf'},
						    	{'id': 13, 'title': 'Community Plan Areas (CPA)', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CPA_apc.pdf'},
						    	{'id': 14, 'title': 'Council Districts with APC and CPA', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CD_APC_CPA.pdf'},
						    	{'id': 15, 'title': '2002 Council Districts Boundary', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CD_CPA.pdf'},
						    	{'id': 16, 'title': 'Economic Development Area', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/EconDev.pdf'},
						    	{'id': 17, 'title': 'Fire and Police Stations', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/LAPD_LAFD.pdf'},
						    	{'id': 18, 'title': 'General Plan Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/GenCirculation.pdf'},
						    	{'id': 19, 'title': 'General Plan Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/GPLanduse.pdf'},
						    	{'id': 111, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/HeightDist.pdf'},
						    	{'id': 112, 'title': 'Historic-Cultural Monuments (HCM)', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/LA_HCM.pdf'},
						    	{'id': 113, 'title': 'Historic Preservation Overlay Zone (HPOZ)', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/HPOZ.pdf'},
						    	{'id': 114, 'title': 'Industrial Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/IndustrialZones.pdf'},
						    	{'id': 115, 'title': 'Other Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/OtherDistricts.pdf'},
						    	{'id': 116, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/SpecificPlans.pdf'},
						    	{'id': 117, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/Zoning.pdf'},
						    	{'id': 118, 'title': 'Community Redevelopment Area (CRA)', 'link' :'http://planning.lacity.org/MapGallery/Image/Citywide/CRA.pdf'}
						    ]
						},
                        {
							'id': 2,
                        	'title': 'Council Districts',
                        	'nodes':[
                        		{
									'id': 21,
                        			'title': '1 - Gilbert Cedillo',
                        			'nodes':[
                        				{'id': 211, 'title': 'CD1 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_1.pdf'},
                        				{'id': 212, 'title': 'CD1 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_1.pdf'},
                        				{'id': 213, 'title': 'CD1 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_1.pdf'},
                        				{'id': 214, 'title': 'CD1 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_1.pdf'},
                        				{'id': 215, 'title': 'CD1 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_1.pdf'},
                        				{'id': 216, 'title': 'CD1 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_1.pdf'},
                        				{'id': 217, 'title': 'CD1 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_1.pdf'}
                        			]
                        		},
                        		{
									'id': 22,
                            		'title': '2 - Paul Krekorian',
                            		'nodes': [
                            			{'id': 221, 'title': 'CD2 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_2.pdf'},
                        				{'id': 222, 'title': 'CD2 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_2.pdf'},
                        				{'id': 223, 'title': 'CD2 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_2.pdf'},
                        				{'id': 224, 'title': 'CD2 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_2.pdf'},
                        				{'id': 225, 'title': 'CD2 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_2.pdf'},
                        				{'id': 226, 'title': 'CD2 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_2.pdf'},
                        				{'id': 227, 'title': 'CD2 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_2.pdf'}
                            		]
                        		},
                        		{
									'id': 23,
                            		'title': '3 - Bob Blumenfield',
                            		'nodes': [
                            			{'id': 231, 'title': 'CD3 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_3.pdf'},
                        				{'id': 232, 'title': 'CD3 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_3.pdf'},
                        				{'id': 233, 'title': 'CD3 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_3.pdf'},
                        				{'id': 234, 'title': 'CD3 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_3.pdf'},
                        				{'id': 235, 'title': 'CD3 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_3.pdf'},
                        				{'id': 236, 'title': 'CD3 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_3.pdf'},
                        				{'id': 237, 'title': 'CD3 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_3.pdf'}
                            		]
                        		},
                        		{
									'id': 24,
                            		'title': '4 - David Ryu',
                            		'nodes': [
                            			{'id': 241, 'title': 'CD4 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_4.pdf'},
                        				{'id': 242, 'title': 'CD4 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_4.pdf'},
                        				{'id': 243, 'title': 'CD4 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_4.pdf'},
                        				{'id': 244, 'title': 'CD4 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_4.pdf'},
                        				{'id': 245, 'title': 'CD4 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_4.pdf'},
                        				{'id': 246, 'title': 'CD4 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_4.pdf'},
                        				{'id': 247, 'title': 'CD4 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_4.pdf'}
                            		]
                        		},
                        		{
									'id': 25,
                            		'title': '5 - Paul Koretz',
                            		'nodes': [
                            			{'id': 251, 'title': 'CD5 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_5.pdf'},
                        				{'id': 252, 'title': 'CD5 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_5.pdf'},
                        				{'id': 253, 'title': 'CD5 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_5.pdf'},
                        				{'id': 254, 'title': 'CD5 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_5.pdf'},
                        				{'id': 255, 'title': 'CD5 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_5.pdf'},
                        				{'id': 256, 'title': 'CD5 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_5.pdf'},
                        				{'id': 257, 'title': 'CD5 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_5.pdf'}
                            		]
                        		},
                        		{
									'id': 26,
                            		'title': '6 - Nury Martinez',
                            		'nodes': [
                            			{'id': 261, 'title': 'CD6 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_6.pdf'},
                        				{'id': 262, 'title': 'CD6 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_6.pdf'},
                        				{'id': 263, 'title': 'CD6 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_6.pdf'},
                        				{'id': 264, 'title': 'CD6 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_6.pdf'},
                        				{'id': 265, 'title': 'CD6 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_6.pdf'},
                        				{'id': 266, 'title': 'CD6 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_6.pdf'},
                        				{'id': 267, 'title': 'CD6 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_6.pdf'}
                            		]
                        		},
                        		{
									'id': 27,
                            		'title': '7 - Felipe Fuentes',
                            		'nodes': [
                            			{'id': 271, 'title': 'CD7 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_7.pdf'},
                        				{'id': 272, 'title': 'CD7 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_7.pdf'},
                        				{'id': 273, 'title': 'CD7 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_7.pdf'},
                        				{'id': 274, 'title': 'CD7 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_7.pdf'},
                        				{'id': 275, 'title': 'CD7 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_7.pdf'},
                        				{'id': 276, 'title': 'CD7 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_7.pdf'},
                        				{'id': 277, 'title': 'CD7 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_7.pdf'}
                            		]
                        		},
                        		{
									'id': 28,
                            		'title': '8 - Marqueece Harris-Dawson',
                            		'nodes': [
                            			{'id': 281, 'title': 'CD8 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_8.pdf'},
                        				{'id': 282, 'title': 'CD8 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_8.pdf'},
                        				{'id': 283, 'title': 'CD8 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_8.pdf'},
                        				{'id': 284, 'title': 'CD8 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_8.pdf'},
                        				{'id': 285, 'title': 'CD8 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_8.pdf'},
                        				{'id': 286, 'title': 'CD8 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_8.pdf'},
                        				{'id': 287, 'title': 'CD8 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_8.pdf'}
                            		]
                        		},
                        		{
									'id': 29,
                            		'title': '9 - Curren D. Price, Jr.',
                            		'nodes': [
                            			{'id': 291, 'title': 'CD9 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_9.pdf'},
                        				{'id': 292, 'title': 'CD9 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_9.pdf'},
                        				{'id': 293, 'title': 'CD9 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_9.pdf'},
                        				{'id': 294, 'title': 'CD9 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_9.pdf'},
                        				{'id': 295, 'title': 'CD9 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_9.pdf'},
                        				{'id': 296, 'title': 'CD9 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_9.pdf'},
                        				{'id': 297, 'title': 'CD9 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_9.pdf'}
                            		]
                        		},
                        		{
									'id': 230,
                            		'title': '10 - Herb J. Wesson Jr.',
                            		'nodes': [
                            			{'id': 2301, 'title': 'CD10 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_10.pdf'},
                        				{'id': 2302, 'title': 'CD10 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_10.pdf'},
                        				{'id': 2303, 'title': 'CD10 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_10.pdf'},
                        				{'id': 2304, 'title': 'CD10 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_10.pdf'},
                        				{'id': 2305, 'title': 'CD10 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_10.pdf'},
                        				{'id': 2306, 'title': 'CD10 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_10.pdf'},
                        				{'id': 2307, 'title': 'CD10 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_10.pdf'}
                            		]
                        		},
                        		{
									'id': 231,
                            		'title': '11 - Mike Bonin',
                            		'nodes': [
                            			{'id': 2311, 'title': 'CD11 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_11.pdf'},
                        				{'id': 2312, 'title': 'CD11 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_11.pdf'},
                        				{'id': 2313, 'title': 'CD11 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_11.pdf'},
                        				{'id': 2314, 'title': 'CD11 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_11.pdf'},
                        				{'id': 2315, 'title': 'CD11 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_11.pdf'},
                        				{'id': 2316, 'title': 'CD11 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_11.pdf'},
                        				{'id': 2317, 'title': 'CD111 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_11.pdf'}
                            		]
                        		},
                        		{
									'id': 232,
                            		'title': '12 - Mitchell Englander',
                            		'nodes': [
                            			{'id': 2321, 'title': 'CD12 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_12.pdf'},
                        				{'id': 2322, 'title': 'CD12 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_12.pdf'},
                        				{'id': 2323, 'title': 'CD12 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_12.pdf'},
                        				{'id': 2324, 'title': 'CD12 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_12.pdf'},
                        				{'id': 2325, 'title': 'CD12 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_12.pdf'},
                        				{'id': 2326, 'title': 'CD12 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_12.pdf'},
                        				{'id': 2327, 'title': 'CD112 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_12.pdf'}
                            		]
                        		},
                        		{
									'id': 233,
                            		'title': '13 - Mitch O Farrell',
                            		'nodes': [
                            			{'id': 2331, 'title': 'CD13 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_13.pdf'},
                        				{'id': 2332, 'title': 'CD13 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_13.pdf'},
                        				{'id': 2333, 'title': 'CD13 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_13.pdf'},
                        				{'id': 2334, 'title': 'CD13 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_13.pdf'},
                        				{'id': 2335, 'title': 'CD13 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_13.pdf'},
                        				{'id': 2336, 'title': 'CD13 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_13.pdf'},
                        				{'id': 2337, 'title': 'CD113 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_13.pdf'}
                            		]
                        		},
                        		{
									'id': 234,
                            		'title': '14 - Jose Huizar',
                            		'nodes': [
                            			{'id': 2341, 'title': 'CD14 Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Circulation/Circulation_CD_14.pdf'},
                        				{'id': 2342, 'title': 'CD14 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_14.pdf'},
                        				{'id': 2343, 'title': 'CD14 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_14.pdf'},
                        				{'id': 2344, 'title': 'CD14 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_14.pdf'},
                        				{'id': 2345, 'title': 'CD14 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_14.pdf'},
                        				{'id': 2346, 'title': 'CD14 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_14.pdf'},
                        				{'id': 2347, 'title': 'CD114 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_14.pdf'}
                            		]
                        		},
                        		{
									'id': 235,
                            		'title': '15 - Jose Buscaino',
                            		'nodes': [
                        				{'id': 2351, 'title': 'CD15 Economic Dev. Area', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_EconDev/EconDev_CD_15.pdf'},
                        				{'id': 2352, 'title': 'CD15 Height District', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_HeightDist/HeightDist_CD_15.pdf'},
                        				{'id': 2353, 'title': 'CD15 Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_IndZn/IndZn_CD_15.pdf'},
                        				{'id': 2354, 'title': 'CD15 Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Landuse/Landuse_CD_15.pdf'},
                        				{'id': 2355, 'title': 'CD14 Specific Plan', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_SPA/SPA_CD_15.pdf'},
                        				{'id': 2356, 'title': 'CD114 Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/CouncilDist/CD_Zoning/Zoning_CD_15.pdf'}
                            		]
                        		}
                       		]
                       },
                       {
						   'id': 3,
                        	'title': 'Community Plan Areas',
                        	'nodes':[
                        		{
									'id': 31,
                        			'title': 'Valley Area',
                        			'nodes':[
                        				{
											'id': 311,
                            				'title': 'Arleta-Pacoima',
                            				'nodes':[
                                                {'id': 3111, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_ARL.pdf'},
                                                {'id': 3112, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_ARL.pdf'},
                                                {'id': 3113, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_ARL.pdf'},
                                                {'id': 3114, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_ARL.pdf'},
                                                {'id': 3115, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_ARL.pdf'},
                                                {'id': 3116, 'title': 'Specific Plans (None)', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_ARL.pdf'},
                                                {'id': 3117, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_ARL.pdf'}
			                            	]
                            			},
                        				{
											'id': 312,
                            				'title': 'Canoga Park',
                            				'nodes':[
                                                {'id': 3121, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_CPK.pdf'},
                                                {'id': 3122, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_CPK.pdf'},
                                                {'id': 3123, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_CPK.pdf'},
                                                {'id': 3124, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_CPK.pdf'},
                                                {'id': 3125, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_CPK.pdf'},
                                                {'id': 3126, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_CPK.pdf'},
                                                {'id': 3127, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_CPK.pdf'}
			                            	]
                            			},
                        				{
											'id': 313,
                            				'title': 'Chatsworth',
                            				'nodes':[
                                                {'id': 3131, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_CHT.pdf'},
                                                {'id': 3132, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_CHT.pdf'},
                                                {'id': 3133, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_CHT.pdf'},
                                                {'id': 3134, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_CHT.pdf'},
                                                {'id': 3135, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_CHT.pdf'},
                                                {'id': 3136, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_CHT.pdf'},
                                                {'id': 3137, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_CHT.pdf'}
			                            	]
                            			},
                        				{
											'id': 314,
                            				'title': 'Encino',
                            				'nodes':[
                                                {'id': 3141, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(L)_ENC.pdf'},
                                                {'id': 3142, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(L)_ENC.pdf'},
                                                {'id': 3143, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(L)_ENC.pdf'},
                                                {'id': 3144, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_CHT.pdf'},
                                                {'id': 3145, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(L)_ENC.pdf'},
                                                {'id': 3146, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(L)_ENC.pdf'},
                                                {'id': 3147, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(L)_ENC.pdf'}
			                            	]
                            			},
                        				{
											'id': 315,
                            				'title': 'Granada Hills',
                            				'nodes':[
                                                {'id': 3151, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_GHL.pdf'},
                                                {'id': 3152, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_GHL.pdf'},
                                                {'id': 3153, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_GHL.pdf'},
                                                {'id': 3154, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_GHL.pdf'},
                                                {'id': 3155, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_GHL.pdf'},
                                                {'id': 3156, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_GHL.pdf'},
                                                {'id': 3157, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_GHL.pdf'}
			                            	]
                            			},
                        				{
											'id': 316,
                            				'title': 'Mission Hills',
                            				'nodes':[
                                                {'id': 3161, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_MSS.pdf'},
                                                {'id': 3162, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_MSS.pdf'},
                                                {'id': 3163, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_MSS.pdf'},
                                                {'id': 3164, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_MSS.pdf'},
                                                {'id': 3165, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_MSS.pdf'},
                                                {'id': 3166, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_MSS.pdf'},
                                                {'id': 3167, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_MSS.pdf'}
			                            	]
                            			},
                        				{
											'id': 317,
                            				'title': 'North Hollywood',
                            				'nodes':[
                                                {'id': 3171, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_NHL.pdf'},
                                                {'id': 3172, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_NHL.pdf'},
                                                {'id': 3173, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_NHL.pdf'},
                                                {'id': 3174, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_NHL.pdf'},
                                                {'id': 3175, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_NHL.pdf'},
                                                {'id': 3176, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_NHL.pdf'},
                                                {'id': 3177, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_NHL.pdf'}
			                            	]


		                            	
                            			},
                        				{
											'id': 318,
                            				'title': 'Northridge',
                            				'nodes':[
                                                {'id': 3181, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_NRD.pdf'},
                                                {'id': 3182, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_NRD.pdf'},
                                                {'id': 3183, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_NRD.pdf'},
                                                {'id': 3184, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_NRD.pdf'},
                                                {'id': 3185, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_NRD.pdf'},
                                                {'id': 3186, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_NRD.pdf'},
                                                {'id': 3187, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_NRD.pdf'}
			                            	]
                            			},
                        				{
											'id': 319,
                            				'title': 'Reseda',
                            				'nodes':[
                                                {'id': 3191, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_RES.pdf'},
                                                {'id': 3192, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_RES.pdf'},
                                                {'id': 3193, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_RES.pdf'},
                                                {'id': 3194, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_RES.pdf'},
                                                {'id': 3195, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_RES.pdf'},
                                                {'id': 3196, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_RES.pdf'},
                                                {'id': 3197, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_RES.pdf'}
			                            	]
                            			},
                        				{
											'id': 320,
                            				'title': 'Sherman Oaks',
                            				'nodes':[
                                                {'id': 3201, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SHR.pdf'},
                                                {'id': 3202, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SHR.pdf'},
                                                {'id': 3203, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SHR.pdf'},
                                                {'id': 3204, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SHR.pdf'},
                                                {'id': 3205, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SHR.pdf'},
                                                {'id': 3206, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SHR.pdf'},
                                                {'id': 3207, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SHR.pdf'}
			                            	]
                            			},
                        				{
											'id': 321,
                            				'title': 'Sun Valley',
                            				'nodes':[
                                                {'id': 3211, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SVY.pdf'},
                                                {'id': 3212, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SVY.pdf'},
                                                {'id': 3213, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SVY.pdf'},
                                                {'id': 3214, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SVY.pdf'},
                                                {'id': 3215, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SVY.pdf'},
                                                {'id': 3216, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SVY.pdf'},
                                                {'id': 3217, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SVY.pdf'}
			                            	]
                            			},
                        				{
											'id': 322,
                            				'title': 'Sunland',
                            				'nodes':[
                                                {'id': 3221, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SLD.pdf'},
                                                {'id': 3222, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SLD.pdf'},
                                                {'id': 3223, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SLD.pdf'},
                                                {'id': 3224, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SLD.pdf'},
                                                {'id': 3225, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SLD.pdf'},
                                                {'id': 3226, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SLD.pdf'},
                                                {'id': 3227, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SLD.pdf'}
			                            	]
                            			},
                        				{
											'id': 323,
                            				'title': 'Sylmar',
                            				'nodes':[
                                                {'id': 3231, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SYL.pdf'},
                                                {'id': 3232, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SYL.pdf'},
                                                {'id': 3233, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SYL.pdf'},
                                                {'id': 3234, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SYL.pdf'},
                                                {'id': 3235, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SYL.pdf'},
                                                {'id': 3236, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SYL.pdf'},
                                                {'id': 3237, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SYL.pdf'}
			                            	]
                            			},
                        				{
											'id': 324,
                            				'title': 'Van Nuys',
                            				'nodes':[
                                                {'id': 3241, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_VNY.pdf'},
                                                {'id': 3242, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_VNY.pdf'},
                                                {'id': 3243, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_VNY.pdf'},
                                                {'id': 3244, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_VNY.pdf'},
                                                {'id': 3245, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_VNY.pdf'},
                                                {'id': 3246, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_VNY.pdf'},
                                                {'id': 3247, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_VNY.pdf'}
			                            	]
                            			}
                        			]
                        		}
                       		]
                       },
                       {
						   'id': 4,
                        	'title': 'West, Central, East Area',
                        	'nodes':[
                        		{
									'id': 41,
                        			'title': 'Bel Air',
                        			'nodes':[
                        				{'id': 411, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_BAR.pdf'},
                                   		{'id': 412, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_BAR.pdf'},
                                        {'id': 413, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_BAR.pdf'},
                                        {'id': 414, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_BAR.pdf'},
                                        {'id': 415, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_BAR.pdf'},
                                        {'id': 416, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_BAR.pdf'},
                                        {'id': 417, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_BAR.pdf'}
                        			]
                        		},
                        		{
									'id': 42,
                        			'title': 'Boyle Heights',
                        			'nodes':[
                        				{'id': 421, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_BHT.pdf'},
                                   		{'id': 422, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_BHT.pdf'},
                                        {'id': 423, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_BHT.pdf'},
                                        {'id': 424, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_BHT.pdf'},
                                        {'id': 425, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_BHT.pdf'},
                                        {'id': 426, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_BHT.pdf'},
                                        {'id': 427, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_BHT.pdf'}
                        			]
                        		},
                        		{
									'id': 43,
                        			'title': 'Boyle Heights',
                        			'nodes':[
                        				{'id': 431, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_BHT.pdf'},
                                   		{'id': 432, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_BHT.pdf'},
                                        {'id': 433, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_BHT.pdf'},
                                        {'id': 434, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_BHT.pdf'},
                                        {'id': 435, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_BHT.pdf'},
                                        {'id': 436, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_BHT.pdf'},
                                        {'id': 437, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_BHT.pdf'}
                        			]
                        		},
                        		{
									'id': 44,
                        			'title': 'Brentwood',
                        			'nodes':[
                        				{'id': 441, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_BTW.pdf'},
                                   		{'id': 442, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_BTW.pdf'},
                                        {'id': 443, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_BTW.pdf'},
                                        {'id': 444, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_BTW.pdf'},
                                        {'id': 445, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_BTW.pdf'},
                                        {'id': 446, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_BTW.pdf'},
                                        {'id': 447, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_BTW.pdf'}
                        			]
                        		},
                        		{
									'id': 45,
                        			'title': 'Central City',
                        			'nodes':[
                        				{'id': 451, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_CCY.pdf'},
                                   		{'id': 452, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_CCY.pdf'},
                                        {'id': 453, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_CCY.pdf'},
                                        {'id': 454, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_CCY.pdf'},
                                        {'id': 455, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_CCY.pdf'},
                                        {'id': 456, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_CCY.pdf'},
                                        {'id': 457, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_CCY.pdf'}
                        			]
                        		},
                        		{
									'id': 46,
                        			'title': 'Central City North',
                        			'nodes':[
                        				{'id': 461, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_CCN.pdf'},
                                   		{'id': 462, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_CCN.pdf'},
                                        {'id': 463, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_CCN.pdf'},
                                        {'id': 464, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_CCN.pdf'},
                                        {'id': 465, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_CCN.pdf'},
                                        {'id': 466, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_CCN.pdf'},
                                        {'id': 467, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_CCN.pdf'}
                        			]
                        		},
                        		{
									'id': 47,
                        			'title': 'Hollywood',
                        			'nodes':[
                        				{'id': 471, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_HWD.pdf'},
                                   		{'id': 472, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_HWD.pdf'},
                                        {'id': 473, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_HWD.pdf'},
                                        {'id': 474, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_HWD.pdf'},
                                        {'id': 475, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_HWD.pdf'},
                                        {'id': 476, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_HWD.pdf'},
                                        {'id': 477, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_HWD.pdf'}
                        			]
                        		},
                        		{
									'id': 48,
                        			'title': 'LAX',
                        			'nodes':[
                        				{'id': 481, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_LAX.pdf'},
                                   		{'id': 482, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_LAX.pdf'},
                                        {'id': 483, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_LAX.pdf'},
                                        {'id': 484, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_LAX.pdf'},
                                        {'id': 485, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_LAX.pdf'},
                                        {'id': 486, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_LAX.pdf'},
                                        {'id': 487, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_LAX.pdf'}
                        			]
                        		},
                        		{
									'id': 49,
                        			'title': 'Northeast Los Angeles',
                        			'nodes':[
                        				{'id': 491, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_NLA.pdf'},
                                   		{'id': 492, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_NLA.pdf'},
                                        {'id': 493, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_NLA.pdf'},
                                        {'id': 494, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_NLA.pdf'},
                                        {'id': 495, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_NLA.pdf'},
                                        {'id': 496, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_NLA.pdf'},
                                        {'id': 497, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_NLA.pdf'}
                        			]
                        		},
                        		{
									'id': 50,
                        			'title': 'Palms-Mar Vista',
                        			'nodes':[
                        				{'id': 501, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_PLM.pdf'},
                                   		{'id': 502, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_PLM.pdf'},
                                        {'id': 503, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_PLM.pdf'},
                                        {'id': 504, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_PLM.pdf'},
                                        {'id': 505, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_PLM.pdf'},
                                        {'id': 506, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_PLM.pdf'},
                                        {'id': 507, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_PLM.pdf'}
                        			]
                        		},
                        		{
									'id': 51,
                        			'title': 'Silver Lake',
                        			'nodes':[
                        				{'id': 511, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SLK.pdf'},
                                   		{'id': 512, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SLK.pdf'},
                                        {'id': 513, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SLK.pdf'},
                                        {'id': 514, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SLK.pdf'},
                                        {'id': 515, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SLK.pdf'},
                                        {'id': 516, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SLK.pdf'},
                                        {'id': 517, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SLK.pdf'}
                        			]
                        		},
                        		{
									'id': 52,
                        			'title': 'Venice',
                        			'nodes':[
                        				{'id': 521, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_VEN.pdf'},
                                   		{'id': 522, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_VEN.pdf'},
                                        {'id': 523, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_VEN.pdf'},
                                        {'id': 524, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_VEN.pdf'},
                                        {'id': 525, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_VEN.pdf'},
                                        {'id': 526, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_VEN.pdf'},
                                        {'id': 527, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_VEN.pdf'}
                        			]
                        		},
                        		{
									'id': 53,
                        			'title': 'West Los Angeles',
                        			'nodes':[
                        				{'id': 531, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WLA.pdf'},
                                   		{'id': 532, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WLA.pdf'},
                                        {'id': 533, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WLA.pdf'},
                                        {'id': 534, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WLA.pdf'},
                                        {'id': 535, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WLA.pdf'},
                                        {'id': 536, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WLA.pdf'},
                                        {'id': 537, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WLA.pdf'}
                        			]
                        		},
                        		{
									'id': 54,
                        			'title': 'Westchester',
                        			'nodes':[
                        				{'id': 541, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WCH.pdf'},
                                   		{'id': 542, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WCH.pdf'},
                                        {'id': 543, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WCH.pdf'},
                                        {'id': 544, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WCH.pdf'},
                                        {'id': 545, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WCH.pdf'},
                                        {'id': 546, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WCH.pdf'},
                                        {'id': 547, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WCH.pdf'}
                        			]
                        		},
                        		{
									'id': 55,
                        			'title': 'Westlake',
                        			'nodes':[
                        				{'id': 551, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WLK.pdf'},
                                   		{'id': 552, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WLK.pdf'},
                                        {'id': 553, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WLK.pdf'},
                                        {'id': 554, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WLK.pdf'},
                                        {'id': 555, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WLK.pdf'},
                                        {'id': 556, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WLK.pdf'},
                                        {'id': 557, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WLK.pdf'}
                        			]
                        		},
                        		{
									'id': 56,
                        			'title': 'Westwood',
                        			'nodes':[
                        				{'id': 561, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WWD.pdf'},
                                   		{'id': 562, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WWD.pdf'},
                                        {'id': 563, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WWD.pdf'},
                                        {'id': 564, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WWD.pdf'},
                                        {'id': 565, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WWD.pdf'},
                                        {'id': 566, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WWD.pdf'},
                                        {'id': 567, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WWD.pdf'}
                        			]
                        		},
                        		{
									'id': 57,
                        			'title': 'Wilshire',
                        			'nodes':[
                        				{'id': 571, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WIL.pdf'},
                                   		{'id': 572, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WIL.pdf'},
                                        {'id': 573, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WIL.pdf'},
                                        {'id': 574, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WIL.pdf'},
                                        {'id': 575, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WIL.pdf'},
                                        {'id': 576, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WIL.pdf'},
                                        {'id': 577, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WIL.pdf'}
                        			]
                        		}		                            		
                       		]
                       },
                       {
						   'id': 6,
                        	'title': 'South, Harbor Area',
                        	'nodes':[
                        		{
									'id': 61,
                        			'title': 'Harbor Gateway',
                        			'nodes':[
                        				{'id': 611, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_HAR.pdf'},
                                  		{'id': 612, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_HAR.pdf'},
                                       	{'id': 613, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_HAR.pdf'},
                                       	{'id': 614, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_HAR.pdf'},
                                       	{'id': 615, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_HAR.pdf'},
                                       	{'id': 616, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_HAR.pdf'},
                                       	{'id': 617, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_HAR.pdf'}
                        			]
                        		},
                        		{
									'id': 62,
                        			'title': 'Port of Los Angeles',
                        			'nodes':[
                        				{'id': 621, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_PTL.pdf'},
                                  		{'id': 622, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_PTL.pdf'},
                                       	{'id': 623, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_PTL.pdf'},
                                       	{'id': 624, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_PTL.pdf'},
                                       	{'id': 625, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_PTL.pdf'},
                                       	{'id': 626, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_PTL.pdf'},
                                       	{'id': 627, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_PTL.pdf'}
                        			]
                        		},
                        		{
									'id': 63,
                        			'title': 'San Pedro',
                        			'nodes':[
                        				{'id': 631, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SPD.pdf'},
                                  		{'id': 632, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SPD.pdf'},
                                       	{'id': 633, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SPD.pdf'},
                                       	{'id': 634, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SPD.pdf'},
                                       	{'id': 635, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SPD.pdf'},
                                       	{'id': 636, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SPD.pdf'},
                                       	{'id': 637, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SPD.pdf'}
                        			]
                        		},
                        		{
									'id': 64,
                        			'title': 'South Los Angeles',
                        			'nodes':[
                        				{'id': 641, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_SLA.pdf'},
                                  		{'id': 642, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_SLA.pdf'},
                                       	{'id': 643, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_SLA.pdf'},
                                       	{'id': 644, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_SLA.pdf'},
                                       	{'id': 645, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_SLA.pdf'},
                                       	{'id': 646, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_SLA.pdf'},
                                       	{'id': 647, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_SLA.pdf'}
                        			]
                        		},
                        		{
									'id': 65,
                        			'title': 'West Adams',
                        			'nodes':[
                        				{'id': 651, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WAD.pdf'},
                                  		{'id': 652, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WAD.pdf'},
                                       	{'id': 653, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WAD.pdf'},
                                       	{'id': 654, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WAD.pdf'},
                                       	{'id': 655, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WAD.pdf'},
                                       	{'id': 656, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WAD.pdf'},
                                       	{'id': 657, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WAD.pdf'}
                        			]
                        		},
                        		{
									'id': 66,
                        			'title': 'West Adams',
                        			'nodes':[
                        				{'id': 661, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WAD.pdf'},
                                  		{'id': 661, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WAD.pdf'},
                                       	{'id': 663, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WAD.pdf'},
                                       	{'id': 664, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WAD.pdf'},
                                       	{'id': 665, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WAD.pdf'},
                                       	{'id': 666, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WAD.pdf'},
                                       	{'id': 667, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WAD.pdf'}
                        			]
                        		},	                            				                            		
                        		{
									'id': 67,
                        			'title': 'Wilmington',
                        			'nodes':[
                        				{'id': 671, 'title': 'Generalized Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Circulation_PDF\Circ(P)_WLM.pdf'},
                                  		{'id': 672, 'title': 'Economic Development Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\EconDev_PDF\EconDev(P)_WLM.pdf'},
                                       	{'id': 673, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\HeightDist_PDF\HeightDist(P)_WLM.pdf'},
                                       	{'id': 674, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\IndComl_PDF\IndComlZn(P)_WLM.pdf'},
                                       	{'id': 675, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Landuse_PDF\Landuse(P)_WLM.pdf'},
                                       	{'id': 676, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\SPA_PDF\SPA(P)_WLM.pdf'},
                                       	{'id': 677, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image\CPA\Zoning_PDF\Zoning(P)_WLM.pdf'}
                        			]
                        		}
                       		]
                       },
                       {
						   'id': 7,
							'title': 'Area Planning Commission Maps',
							'nodes':[
								{
									'id': 71,
                                    'title': 'North Valley APC',
                                    'nodes': [
                                    	{'id': 711, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_NV.pdf'},
                                  		{'id': 712, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_NV.pdf'},
                                       	{'id': 713, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_NV.pdf'},
                                       	{'id': 714, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_NV.pdf'},
                                       	{'id': 715, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_NV.pdf'},
                                       	{'id': 716, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_NV.pdf'},
                                       	{'id': 717, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_NV.pdf'}
                                    ]
								},
								{
									'id': 72,
                                    'title': 'South Valley APC',
                                    'nodes': [
                                    	{'id': 721, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_SV.pdf'},
                                  		{'id': 722, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_SV.pdf'},
                                       	{'id': 723, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_SV.pdf'},
                                       	{'id': 724, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_SV.pdf'},
                                       	{'id': 725, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_SV.pdf'},
                                       	{'id': 726, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_SV.pdf'},
                                       	{'id': 727, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_SV.pdf'}
                                    ]
								},
								{
									'id': 73,
                                    'title': 'West LA APC',
                                    'nodes': [
                                    	{'id': 731, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_West.pdf'},
                                  		{'id': 732, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_West.pdf'},
                                       	{'id': 733, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_West.pdf'},
                                       	{'id': 734, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_West.pdf'},
                                       	{'id': 735, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_West.pdf'},
                                       	{'id': 736, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_West.pdf'},
                                       	{'id': 737, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_West.pdf'}
                                    ]
								},
								{
									'id': 74,
                                    'title': 'Central LA APC',
                                    'nodes': [
                                    	{'id': 741, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_Cen.pdf'},
                                  		{'id': 742, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_Cen.pdf'},
                                       	{'id': 743, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_Cen.pdf'},
                                       	{'id': 744, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_Cen.pdf'},
                                       	{'id': 745, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_Cen.pdf'},
                                       	{'id': 746, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_Cen.pdf'},
                                       	{'id': 747, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_Cen.pdf'}
                                    ]
								},
								{
									'id': 75,
                                    'title': 'East LA APC',
                                    'nodes': [
                                    	{'id': 751, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_East.pdf'},
                                  		{'id': 752, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_East.pdf'},
                                       	{'id': 753, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_East.pdf'},
                                       	{'id': 754, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_East.pdf'},
                                       	{'id': 755, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_East.pdf'},
                                       	{'id': 756, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_East.pdf'},
                                       	{'id': 757, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_East.pdf'}
                                    ]
								},
								{
									'id': 76,
                                    'title': 'South LA APC',
                                    'nodes': [
                                    	{'id': 761, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_South.pdf'},
                                  		{'id': 762, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_South.pdf'},
                                       	{'id': 763, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_South.pdf'},
                                       	{'id': 764, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_South.pdf'},
                                       	{'id': 765, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_South.pdf'},
                                       	{'id': 766, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_South.pdf'},
                                       	{'id': 767, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_South.pdf'}
                                    ]
								},
								{
									'id': 77,
                                    'title': 'Harbor APC',
                                    'nodes': [
                                    	{'id': 771, 'title': 'Circulation', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Circ/APC_Circ_Harbor.pdf'},
                                  		{'id': 772, 'title': 'Economic Development', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/EconDev/APC_EconDev_Harbor.pdf'},
                                       	{'id': 773, 'title': 'Height Districts', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/HD/APC_HD_Harbor.pdf'},
                                       	{'id': 774, 'title': 'Industrial and Commercial Zones', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/IndZn/APC_IndZn_Harbor.pdf'},
                                       	{'id': 775, 'title': 'Land Use', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Landuse/APC_Landuse_Harbor.pdf'},
                                       	{'id': 776, 'title': 'Specific Plans', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/SPA/APC_SPA_Harbor.pdf'},
                                       	{'id': 777, 'title': 'Zoning', 'link' :'http://planning.lacity.org/MapGallery/Image/APC/Zoning/APC_Zoning_Harbor.pdf'}
                                    ]
								}
							]	
						}
               	];
      
    }]);

}());
