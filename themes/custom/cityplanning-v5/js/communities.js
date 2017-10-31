var map, dialog;
      require([
        "esri/map", "esri/layers/FeatureLayer","esri/tasks/query",
        "esri/symbols/SimpleFillSymbol", "esri/symbols/SimpleLineSymbol",
        "esri/renderers/SimpleRenderer", "esri/graphic", "esri/lang",
        "esri/Color", "dojo/number", "dojo/dom-style",
        "dijit/TooltipDialog", "dijit/popup", "dojo/dom","dojo/domReady!"
      ], function(
        Map, FeatureLayer, Query,
        SimpleFillSymbol, SimpleLineSymbol,
        SimpleRenderer, Graphic, esriLang,
        Color, number, domStyle,
        TooltipDialog, dijitPopup, dom
      ) {
        map = new Map("map", {
          basemap: "topo",
          center: [-118.4077, 34.047528],
          zoom: 11
        });

        var southCarolinaCounties = new FeatureLayer("http://services1.arcgis.com/tzwalEyxl2rpamKs/arcgis/rest/services/CPA_StoryMap/FeatureServer/0", {
          mode: FeatureLayer.MODE_SNAPSHOT,
          outFields: ["NAME_ALF", "URL"]
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
        southCarolinaCounties.setRenderer(new SimpleRenderer(symbol));
        map.addLayer(southCarolinaCounties);


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
          map.graphics.enableMouseEvents();
          map.graphics.on("mouse-out", function(evt){
            map.graphics.clear();
            dom.byId("info").innerHTML = '<b>Hover over a CPA</b><br>Click on a CPA to get more information';
          });
          map.graphics.on("click", function(evt){
            window.open(graphic);
          })

        });

        //listen for when the onMouseOver event fires on the countiesGraphicsLayer
        //when fired, create a new graphic with the geometry from the event.graphic and add it to the maps graphics layer
        var graphic;
        southCarolinaCounties.on("mouse-over", function(evt){
          var t = "<b>${NAME_ALF}</b>";
          link = "${URL}";
          graphic = evt.graphic.attributes.URL; 

          var content = esriLang.substitute(evt.graphic.attributes,t);
          dom.byId("info").innerHTML = content + '<br>Click on a CPA to get more information'
          var highlightGraphic = new Graphic(evt.graphic.geometry,highlightSymbol);
          map.graphics.add(highlightGraphic);
        });
        
        document.getElementsByClassName('NV')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'North Valley'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('SV')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'South Valley'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('WLA')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'West LA'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('CLA')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'Central LA'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('ELA')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'East LA'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('SLA')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'South LA'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });


        document.getElementsByClassName('H')[0].addEventListener('click', function (event) {
          southCarolinaCounties.setDefinitionExpression("APC = 'Harbor'");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });

        document.getElementsByClassName('ALL')[0].addEventListener('click', function (event) {
            southCarolinaCounties.setDefinitionExpression("APC IS NOT NULL");
          var query = new Query();  
          query.where = "1=1";
          query.outSpatialReference = map.spatialReference;
          southCarolinaCounties.queryFeatures(query, function (featureSet) {  
              var data = [];  
              if (featureSet && featureSet.features && featureSet.features.length > 0) {  
                  data = featureSet.features;  
              }  
              var zoomExtent = esri.graphicsExtent(data).expand(1.5);  
              map.setExtent(zoomExtent);  
          });
        });


      });