var map, dialog;
require([
    "esri/map", "esri/geometry/Extent", "esri/SpatialReference", "esri/layers/FeatureLayer",
    "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",
    "esri/renderers/SimpleRenderer", "esri/graphic", "esri/lang",
    "esri/Color", "dojo/number", "dojo/dom-style",
    "dijit/TooltipDialog", "dijit/popup", "dojo/on", "dojo/domReady!"
], function (
    Map, Extent, SpatialReference, FeatureLayer,
    SimpleFillSymbol, SimpleLineSymbol,
    SimpleRenderer, Graphic, esriLang,
    Color, number, domStyle,
    TooltipDialog, dijitPopup, on
) {
    map = new Map("mapcw");

    map.setExtent(new Extent(-13210222.2528312, 3988873.49814092, -13152914.3379387, 4074312.78310352, new SpatialReference({
        wkid: 102100
    })));

    var SHAPE = new FeatureLayer("https://services1.arcgis.com/tzwalEyxl2rpamKs/ArcGIS/rest/services/ACS_2016_CityWide/FeatureServer/0", {
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
        new Color([152, 224, 178, 0.35])
    );
    SHAPE.setRenderer(new SimpleRenderer(symbol));
    map.addLayer(SHAPE);

    map.infoWindow.resize(245, 125);

    dialog = new TooltipDialog({
        id: "tooltipDialog-x"+Math.floor((Math.random() * 100) + 1),
        style: "position: absolute; width: 250px; font: normal normal normal 10pt Helvetica;z-index:100"
    });
    
    dialog.startup();

    var highlightSymbol = new SimpleFillSymbol(
        SimpleFillSymbol.STYLE_SOLID,
        new SimpleLineSymbol(
            SimpleLineSymbol.STYLE_SOLID,
            new Color([109, 114, 112]), 2.5
        ),
        new Color([152, 224, 178, 0.5])
    );

    //close the dialog when the mouse leaves the highlight graphic
    map.on("load", function () {
        // map.graphics.enableMouseEvents();
        map.disableScrollWheel();
        map.graphics.on("click", sendToChart);
        map.graphics.on("mouse-out", closeDialog);
    });

    var Area_Planning_Commission_APC_Na, Owner_Households, Renter_Households, Below_Poverty, At_Above_Poverty, 
	Households, Households_with_2_People, Households_with_3_People, Households_with_4_People, 
	Households_with_5_People, Households_with_6_People, Households_with_7_People, Nonfamily_Households, 
	Enrolled_Nursery_Preschool, Enrolled_Kindergarten, Enrolled_Grade_1_4, Enrolled_Grade_5_8, 
	Enrolled_Grade_9_12, Enrolled_College, Enrolled_Grad_Professional_School, Not_Enrolled;
    var arr = [];


    //listen for when the onMouseOver event fires on the countiesGraphicsLayer
    //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer
    SHAPE.on("mouse-over", function (evt) {
    	var t = "<b>City of Los Angeles</b>";

    	var content = esriLang.substitute(evt.graphic.attributes,t);
    	var highlightGraphic = new Graphic(evt.graphic.geometry, highlightSymbol, evt.graphic.attributes);
    	map.graphics.add(highlightGraphic);

    	Area_Planning_Commission_APC_Na = evt.graphic.attributes.City_Boundary_CITY;
    	Owner_Households = evt.graphic.attributes.Demographics_Comparison___Cit_1;
    	Renter_Households = evt.graphic.attributes.Demographics_Comparison___Cit_2;
    	Below_Poverty = evt.graphic.attributes.Demographics_Comparison___Cit_3;
    	At_Above_Poverty = evt.graphic.attributes.Demographics_Comparison___Cit_4;
    	Households = evt.graphic.attributes.Demographics_Comparison___Cit_5;
    	Households_with_2_People = evt.graphic.attributes.Demographics_Comparison___Cit_6;
    	Households_with_3_People = evt.graphic.attributes.Demographics_Comparison___Cit_7;
    	Households_with_4_People = evt.graphic.attributes.Demographics_Comparison___Cit_8;
    	Households_with_5_People = evt.graphic.attributes.Demographics_Comparison___Cit_9;
    	Households_with_6_People = evt.graphic.attributes.Demographics_Comparison___Ci_10;
    	Households_with_7_People = evt.graphic.attributes.Demographics_Comparison___Ci_11;
    	Nonfamily_Households = evt.graphic.attributes.Demographics_Comparison___Ci_12;
    	Enrolled_Nursery_Preschool = evt.graphic.attributes.Demographics_Comparison___Ci_13;
    	Enrolled_Kindergarten = evt.graphic.attributes.Demographics_Comparison___Ci_14;
    	Enrolled_Grade_1_4 = evt.graphic.attributes.Demographics_Comparison___Ci_15;
    	Enrolled_Grade_5_8 = evt.graphic.attributes.Demographics_Comparison___Ci_16;
    	Enrolled_Grade_9_12 = evt.graphic.attributes.Demographics_Comparison___Ci_17;
    	Enrolled_College = evt.graphic.attributes.Demographics_Comparison___Ci_18;
    	Enrolled_Grad_Professional_School = evt.graphic.attributes.Demographics_Comparison___Ci_19;
    	Not_Enrolled = evt.graphic.attributes.Demographics_Comparison___Ci_20;


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
        arr.push(Area_Planning_Commission_APC_Na, Owner_Households, Renter_Households, 
	  		Below_Poverty, At_Above_Poverty, Households, Households_with_2_People, 
			Households_with_3_People, Households_with_4_People, Households_with_5_People, 
			Households_with_6_People, Households_with_7_People, Nonfamily_Households, 
			Enrolled_Nursery_Preschool, Enrolled_Kindergarten, Enrolled_Grade_1_4, 
			Enrolled_Grade_5_8, Enrolled_Grade_9_12, Enrolled_College, 
			Enrolled_Grad_Professional_School, Not_Enrolled);
        
		console.log(arr);
        
        $("h5").html('City of Los Angeles');
        
        //create objects for the graphs
        
        //own/rent bar chart
        var data = {}
        data["labels"] = ["Own","Rent"];
        data["data"] = [arr[7],arr[8]];
        load_own_rent_bar(data, "own_rent_bar");
        
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
