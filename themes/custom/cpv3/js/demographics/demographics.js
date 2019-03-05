function load_all_charts() {
     		//donut_chart();
     		//load_chart2();
     		//load_barchart();
     	}
		
		
		
		function load_own_rent_bar(source) {
 		// based on prepared DOM, initialize echarts instance
 		    var myChart = echarts.init(document.getElementById('own_rent_bar'));

 		        // specify chart configuration item and data
 		        var option = {
 		    yAxis: {
 		        type: 'category',
 		        data: source.labels
 		    },
 		    xAxis: {
 		        type: 'value'
 		    },
 		    series: [{
 		        data: source.data,
 		        type: 'bar'
 		    }]
 		};

 		        // use configuration item and data specified to show chart
 		        myChart.setOption(option);
 		}
		
		function load_donut(source, targetID) {
 		// based on prepared DOM, initialize echarts instance
 		    var myChart = echarts.init(document.getElementById(targetID));

 		        // specify chart configuration item and data
 		        var option = {
 		    tooltip: {
 		        trigger: 'item',
 		        formatter: "{a} <br/>{b}: {c} ({d}%)"
 		    },
 		    legend: {
 		        orient: 'vertical',
 		        x: 'left',
 		        data:source.labels
 		    },
 		    series: [
 		        {
 		            name:'Fruit',
 		            type:'pie',
 		            radius: ['50%', '70%'],
 		            avoidLabelOverlap: false,
 		            label: {
 		                normal: {
 		                    show: false,
 		                    position: 'center'
 		                },
 		                emphasis: {
 		                    show: true,
 		                    textStyle: {
 		                        fontSize: '30',
 		                        fontWeight: 'bold'
 		                    }
 		                }
 		            },
 		            labelLine: {
 		                normal: {
 		                    show: false
 		                }
 		            },
 		            data:source.data
 		        }
 		    ]
 		};

 		        // use configuration item and data specified to show chart
 		        myChart.setOption(option);

 		}
		

 		function donut_chart () {
 		// based on prepared DOM, initialize echarts instance
 		    var myChart = echarts.init(document.getElementById('donutchart'));

 		        // specify chart configuration item and data
 		        var option = {
 		    tooltip: {
 		        trigger: 'item',
 		        formatter: "{a} <br/>{b}: {c} ({d}%)"
 		    },
 		    legend: {
 		        orient: 'vertical',
 		        x: 'left',
 		        data:['Apples','Oranges','Pineapples','Kiwi','durian']
 		    },
 		    series: [
 		        {
 		            name:'Fruit',
 		            type:'pie',
 		            radius: ['50%', '70%'],
 		            avoidLabelOverlap: false,
 		            label: {
 		                normal: {
 		                    show: false,
 		                    position: 'center'
 		                },
 		                emphasis: {
 		                    show: true,
 		                    textStyle: {
 		                        fontSize: '30',
 		                        fontWeight: 'bold'
 		                    }
 		                }
 		            },
 		            labelLine: {
 		                normal: {
 		                    show: false
 		                }
 		            },
 		            data:[
 		                {value:335, name:'Apples'},
 		                {value:310, name:'Oranges'},
 		                {value:234, name:'Pineapples'},
 		                {value:135, name:'Kiwi'},
 		                {value:1548, name:'durian'}
 		            ]
 		        }
 		    ]
 		};

 		        // use configuration item and data specified to show chart
 		        myChart.setOption(option);

 		}

 		function load_chart2() {
 		// based on prepared DOM, initialize echarts instance
 		    var myChart = echarts.init(document.getElementById('linechart'));

 		        // specify chart configuration item and data
 		        option = {
 		    xAxis: {
 		        type: 'category',
 		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
 		    },
 		    yAxis: {
 		        type: 'value'
 		    },
 		    series: [{
 		        data: [820, 932, 901, 934, 1290, 1330, 1320],
 		        type: 'line'
 		    }]
 		};

 		        // use configuration item and data specified to show chart
 		        myChart.setOption(option);
 		}

 		function load_barchart() {
 		// based on prepared DOM, initialize echarts instance
 		    var myChart = echarts.init(document.getElementById('bar_chart'));

 		        // specify chart configuration item and data
 		        var option = {
 		    yAxis: {
 		        type: 'category',
 		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
 		    },
 		    xAxis: {
 		        type: 'value'
 		    },
 		    series: [{
 		        data: [120, 200, 150, 80, 70, 110, 130],
 		        type: 'bar'
 		    }]
 		};

 		        // use configuration item and data specified to show chart
 		        myChart.setOption(option);
 		}
 		
 		
 		var map, dialog;
 	      require([
 	        "esri/map", "esri/geometry/Extent", "esri/SpatialReference", "esri/layers/FeatureLayer",
 	        "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",
 	        "esri/renderers/SimpleRenderer", "esri/graphic", "esri/lang",
 	        "esri/Color", "dojo/number", "dojo/dom-style",
 	        "dijit/TooltipDialog", "dijit/popup", "dojo/on", "dojo/domReady!"
 	      ], function(
 	        Map, Extent, SpatialReference, FeatureLayer,
 	        SimpleFillSymbol, SimpleLineSymbol,
 	        SimpleRenderer, Graphic, esriLang,
 	        Color, number, domStyle,
 	        TooltipDialog, dijitPopup, on
 	      ) {
 	        map = new Map("mapDiv");

 	        map.setExtent(new Extent(-13210222.2528312,3988873.49814092,-13152914.3379387,4074312.78310352, new SpatialReference({ wkid:102100 })));

 	        var SHAPE = new FeatureLayer("https://services1.arcgis.com/tzwalEyxl2rpamKs/arcgis/rest/services/CPA_Polys/FeatureServer/0", {
 	          mode: FeatureLayer.MODE_SNAPSHOT,
 	          outFields: ["*"]
 	        });

 	        var symbol = new SimpleFillSymbol(
 	          SimpleFillSymbol.STYLE_SOLID,
 	          new SimpleLineSymbol(
 	            SimpleLineSymbol.STYLE_SOLID,
 	            new Color([53, 158, 109]),
 	            2
 	          ),
 	          new Color([152, 224, 178,0.35])
 	        );
 	        SHAPE.setRenderer(new SimpleRenderer(symbol));
 	        map.addLayer(SHAPE);

 	        map.infoWindow.resize(245,125);

 	        dialog = new TooltipDialog({
 	          id: "tooltipDialog",
 	          style: "position: absolute; width: 250px; font: normal normal normal 10pt Helvetica;z-index:100"
 	        });
 	        dialog.startup();

 	        var highlightSymbol = new SimpleFillSymbol(
 	          SimpleFillSymbol.STYLE_SOLID,
 	          new SimpleLineSymbol(
 	            SimpleLineSymbol.STYLE_SOLID,
 	            new Color([109, 114, 112]), 2.5
 	          ),
 	          new Color([152, 224, 178,0.5])
 	        );

 	        //close the dialog when the mouse leaves the highlight graphic
 	        map.on("load", function(){
 	          // map.graphics.enableMouseEvents();
 	          map.disableScrollWheel();
 	          map.graphics.on("click", sendToChart);
 	          map.graphics.on("mouse-out", closeDialog);
 	        });

 	        var NAME_ALF, ACS_2015_Population_3Plus_Enr_1, ACS_2015_Population_3Plus_Enr_2, ACS_2015_Population_3Plus_Enr_3, ACS_2015_Population_3Plus_Enr_4, ACS_2015_Population_3Plus_Enr_5, ACS_2015_Population_3Plus_Enr_6, ACS_2015_Population_3Plus_Enr_7, ACS_2015_Owner_Households, ACS_2015_Renter_Households, ACS_2015_Family_Households_with, ACS_2015_Family_Households_wi_1, ACS_2015_Family_Households_wi_2, ACS_2015_Family_Households_wi_3, ACS_2015_Family_Households_wi_4, ACS_2015_Family_Households_wi_5, ACS_2015_Households_Below_the_P, ACS_2015_Households_at_or_Above;
 	        var arr = [];


 	        //listen for when the onMouseOver event fires on the countiesGraphicsLayer
 	        //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer
 	        SHAPE.on("mouse-over", function(evt){
 	          var t = "<b>${NAME_ALF}</b>";
 			  
 	          var content = esriLang.substitute(evt.graphic.attributes,t);
 	          var highlightGraphic = new Graphic(evt.graphic.geometry, highlightSymbol, evt.graphic.attributes);
 	          map.graphics.add(highlightGraphic);
 	          
 	          NAME_ALF = evt.graphic.attributes.NAME_ALF;
 	          ACS_2015_Population_3Plus_Enr_1 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_1;
 	          ACS_2015_Population_3Plus_Enr_2 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_2;
 	          ACS_2015_Population_3Plus_Enr_3 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_3;
 	          ACS_2015_Population_3Plus_Enr_4 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_4;
 	          ACS_2015_Population_3Plus_Enr_5 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_5;
 	          ACS_2015_Population_3Plus_Enr_6 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_6;
 	          ACS_2015_Population_3Plus_Enr_7 = evt.graphic.attributes.ACS_2015_Population_3Plus_Enr_7;
 	          ACS_2015_Owner_Households = evt.graphic.attributes.ACS_2015_Owner_Households;
 	          ACS_2015_Renter_Households = evt.graphic.attributes.ACS_2015_Renter_Households;
 	          ACS_2015_Family_Households_with = evt.graphic.attributes.ACS_2015_Family_Households_with;
 	          ACS_2015_Family_Households_wi_1 = evt.graphic.attributes.ACS_2015_Family_Households_wi_1;
 	          ACS_2015_Family_Households_wi_2 = evt.graphic.attributes.ACS_2015_Family_Households_wi_2;
 	          ACS_2015_Family_Households_wi_3 = evt.graphic.attributes.ACS_2015_Family_Households_wi_3;
 	          ACS_2015_Family_Households_wi_4 = evt.graphic.attributes.ACS_2015_Family_Households_wi_4;
 	          ACS_2015_Family_Households_wi_5 = evt.graphic.attributes.ACS_2015_Family_Households_wi_5;
 	          ACS_2015_Households_Below_the_P = evt.graphic.attributes.ACS_2015_Households_Below_the_P;
 	          ACS_2015_Households_at_or_Above = evt.graphic.attributes.ACS_2015_Households_at_or_Above;

 	          dialog.setContent(content);

 	          domStyle.set(dialog.domNode, "opacity", 0.85);
 	          dijitPopup.open({
 	            popup: dialog,
 	            x: evt.pageX,
 	            y: evt.pageY
 	          });
 	        });

 	        function closeDialog() {
 	          map.graphics.clear();
 	          dijitPopup.close(dialog);
 	        }
 			
 			

 	        function sendToChart() {
 	          arr = [];
 	          arr.push(ACS_2015_Population_3Plus_Enr_1, ACS_2015_Population_3Plus_Enr_2, ACS_2015_Population_3Plus_Enr_3, ACS_2015_Population_3Plus_Enr_4, ACS_2015_Population_3Plus_Enr_5, ACS_2015_Population_3Plus_Enr_6, ACS_2015_Population_3Plus_Enr_7, ACS_2015_Owner_Households, ACS_2015_Renter_Households, ACS_2015_Family_Households_with, ACS_2015_Family_Households_wi_1, ACS_2015_Family_Households_wi_2, ACS_2015_Family_Households_wi_3, ACS_2015_Family_Households_wi_4, ACS_2015_Family_Households_wi_5, ACS_2015_Households_Below_the_P, ACS_2015_Households_at_or_Above);
 	          console.log(arr);
 			  
 			  console.log(NAME_ALF);
 			  $("h5").html(NAME_ALF);
 			  
 			  //create objects for the graphs
 	          //own/rent bar chart
 	          var data = {}
 	          data["labels"] = ["Own","Rent"];
 	          data["data"] = [arr[7],arr[8]];
 	          load_own_rent_bar(data);
 			  
 			  //poverty level donut chart
 	          var data = {}
 	          data["labels"] = ["Household Below Poverty Level","Households at or Above Poverty Level"];
 	          data["data"] = [{value: arr[15],name: "Household Below Poverty Level"},{value: arr[16],name: "Households at or Above Poverty Level"}];  //mirrors the chart requirements
 	          load_donut(data, "poverty_donut");
 			  
 			  //Education level
 	          var data = {}
 	          data["labels"] = ["Enrolled in Kindergarten",
 	                            "Enrolled in Nursery Preschool",
 	                            "Enrolled in Grade 5-8",
 	                            "Enrolled in Grade 1-4",
 	                            "Enrolled in College",
 	                            "Enrolled in Grade 9-12",
 	                            "Enrolled in Graduate School"];
 	          data["data"] = [{value: arr[0],name: "Enrolled in Kindergarten"},
 	                          {value: arr[1],name: "Enrolled in Nursery Preschool"},
 	                          {value: arr[2],name: "Enrolled in Grade 5-8"},
 	                          {value: arr[3],name: "Enrolled in Grade 1-4"},
 	                          {value: arr[4],name: "Enrolled in College"},
 	                          {value: arr[5],name: "Enrolled in Grade 9-12"},
 	                          {value: arr[6],name: "Enrolled in Graduate School"}];
 	          load_donut(data, "education_donut");
 			  
 			  
 			  //Household size
 	          var data = {}
 	          data["labels"] = ["Family Households 6 people",
 	                            "Family Households 7+ people",
 	                            "Family Households 2 people",
 	                            "Family Households 3 people",
 	                            "Family Households 5 people",
 	                            "Family Households 4 people"];
 	          data["data"] = [{value: arr[9],name: "Family Households 6 people"},
 	                          {value: arr[10],name: "Family Households 7+ people"},
 	                          {value: arr[11],name: "Family Households 2 people"},
 	                          {value: arr[12],name: "Family Households 3 people"},
 	                          {value: arr[13],name: "Family Households 5 people"},
 	                          {value: arr[14],name: "Family Households 4 people"}];
 	          load_donut(data, "household_donut");
 	        }

 	      });