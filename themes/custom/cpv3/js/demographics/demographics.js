$(document).ready(function() {
	var hostname = window.location.origin;
	var pathURL = hostname+"/themes/custom/cpv3/js/demographics/";
	var jsFile = pathURL+"cw.js";
	loadScript(jsFile);
	
	$("#demographics-tab").tabs({
		activate: function (event, ui) {
			var activeTabId;
			activeTabId = ui.newPanel[0].id;
			jsFile = pathURL+activeTabId+'.js';
			
			$('#mapcw').html('');
		    $('#mapcp').html('');
		    $('#mapapc').html('');
			$('#mapcd').html('');
		      
			loadScript(jsFile); 
		}
	});
	
	function loadScript(url) {
	    var script = document.createElement("script"); 	//Make a script DOM node
	    script.src = url; 								//Set it's src to the provided URL	    
	    document.head.appendChild(script); 				//Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
	}
	
	// Open/Close All for accordion
	$('.closeall').click(function(){
		  $('.panel-collapse.in')
		    .collapse('hide');
    });
	
	$('.openall').click(function(){
		$('.panel-collapse:not(".in")')
			.collapse('show');
	});
});


/**
 * Chart Type
 */
function load_own_rent_bar(source, targetID) {
    // based on prepared DOM, initialize echarts instance
    var myChart = echarts.init(document.getElementById(targetID));

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
            data: source.labels
        },
        series: [{
            name: '',
            type: 'pie',
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
            data: source.data
        }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}

function donut_chart() {
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
            data: ['Apples', 'Oranges', 'Pineapples', 'Kiwi', 'durian']
        },
        series: [{
            name: '',
            type: 'pie',
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
            data: [{
                    value: 335,
                    name: 'Apples'
                },
                {
                    value: 310,
                    name: 'Oranges'
                },
                {
                    value: 234,
                    name: 'Pineapples'
                },
                {
                    value: 135,
                    name: 'Kiwi'
                },
                {
                    value: 1548,
                    name: 'durian'
                }
            ]
        }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
}