$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		defaultDate: $.now(),
		navLinks: true, 	// can click day/week names to navigate views
		editable: false,
		eventLimit: true, 	// allow "more" link when too many events
		contentHeight: 300,
		defaultView: 'month',
		events: [
    			     	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-11T12:17:00",
    			    		"caseNumber": "ZA 2017-1166(CUB)",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57504"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-11T15:29:00",
    			    		"caseNumber": "ZA-2017-1340-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57505"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-09-11T09:09:00",
    			    		"caseNumber": "CPC-2017-880-DB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57509"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Subdivision Tracts",
    			    		"start": "2017-09-12T14:03:00",
    			    		"caseNumber": "VTT-74918-SL",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57636"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Subdivision Tracts",
    			    		"start": "2017-09-12T16:45:00",
    			    		"caseNumber": "VTT-74581-CN",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57638"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-09-12T18:28:00",
    			    		"caseNumber": "CPC-2016-3655-GPA-ZC-HD-CUB-SPR",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57639"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Subdivision Tracts",
    			    		"start": "2017-09-14T11:10:00",
    			    		"caseNumber": "VTT-73970-CN",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57640"
    			    	},
    			    	{
    			    		"type": "Commission",
    			    		"title": "East Los Angeles",
    			    		"description": "East Los Angeles Area Planning Commission Meeting",
    			    		"start": "2017-09-14T11:04:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57678"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-14T17:23:00",
    			    		"caseNumber": "ZA-2017-861-F",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57461"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-14T10:09:00",
    			    		"caseNumber": "DIR-2017-1165-BSA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57462"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "East Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-15T12:60:00",
    			    		"caseNumber": "ZA-2016-743-ZV",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57463"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-15T15:11:00",
    			    		"caseNumber": "ZA-2017-1140-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57465"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-18T09:24:00",
    			    		"caseNumber": "ZA-2017-376-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57466"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-18T10:28:00",
    			    		"caseNumber": "ZA-2012-341-ZAD-CDP-MEL",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57601"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-18T16:55:00",
    			    		"caseNumber": "ZA-2017-228-CU-ZV",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57705"
    			    	},
    			    	{
        					"type": 'Public',
        					"title": 'Woman\'s Club of Hollywood',
        					"description": 'Hollywood Outreach Event',
        					"start": '2017-09-18T17:00:00',
        					"caseNumber": '',
        					"url" :'http://www.hcpu2.org/get-involved-events.html'
        				},
    			    	{
    			    		"type": "Commission",
    			    		"title": "South Los Angeles",
    			    		"description": "South Los Angeles Area Planning Commission Meeting",
    			    		"start": "2017-09-20T10:22:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57628"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Area Planning Commission",
    			    		"start": "2017-09-20T11:45:00",
    			    		"caseNumber": "APCW-2015-4392-ZC-CDP ",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57528"
    			    	},
    			    	{
    			    		"type": "Commission",
    			    		"title": "West Los Angeles",
    			    		"description": "West Los Angeles Area Planning Commission Meeting",
    			    		"start": "2017-09-23T10:03:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57707"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-23T17:06:00",
    			    		"caseNumber": "ZA-2015-2469-ZV",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57521"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-23T12:53:00",
    			    		"caseNumber": "ZA-2017-1877-F",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57522"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-23T09:09:00",
    			    		"caseNumber": "ZA-2017-71-ZAD-F",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57524"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-27T18:52:00",
    			    		"caseNumber": "ZA-2016-1445-ZAD",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57525"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-27T13:38:00",
    			    		"caseNumber": "ZA-2017-855-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57540"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-27T18:02:00",
    			    		"caseNumber": "ZA-2017-1002-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57541"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "East Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-09-27T11:49:00",
    			    		"caseNumber": "ZA-2012-0069-CUB-PA1",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57542"
    			    	},
    			    	{
    			    		"type": "Commission",
    			    		"title": "Citywide",
    			    		"description": "Citywide Cultural Heritage Commission Meeting",
    			    		"start": "2017-09-28T09:49:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57629"
    			    	},
    			    	{
    			    		"type": "Commission",
    			    		"title": "North Valley",
    			    		"description": "North Valley Area Planning Commission Meeting",
    			    		"start": "2017-10-02T13:30:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57708"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-02T12:12:00",
    			    		"caseNumber": "CPC-2013-2993-GPA-VZC-HD-DB-MCUP-SPR",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57561"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-02T17:41:00",
    			    		"caseNumber": "DIR-2016-304-DB-SPR-1A",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57667"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-04T12:13:00",
    			    		"caseNumber": "ZA-2016-261-CU-F",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57603"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-04T09:51:00",
    			    		"caseNumber": "ZA-2014-817-CU-ZAD",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57604"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-06T18:17:00",
    			    		"caseNumber": "ZA-2016-3520-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57605"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Area Planning Commission",
    			    		"start": "2017-10-06T11:59:00",
    			    		"caseNumber": "ZA-2016-4751-ZAD-CUB-CU-1A",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57616"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Area Planning Commission",
    			    		"start": "2017-10-10T14:05:00",
    			    		"caseNumber": "DIR-2015-1455-DRB-SPP-1A",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57665"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-10T10:53:00",
    			    		"caseNumber": "ZA-2013-1485-MPA-PA1",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57675"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Los Angeles",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-12T15:47:00",
    			    		"caseNumber": "ZA-2009-1067-CUB-PA1",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57676"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-12T12:53:00",
    			    		"caseNumber": "ZA-2017-671-CUB-CUX",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57677"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Subdivision Tracts",
    			    		"start": "2017-10-12T11:24:00",
    			    		"caseNumber": "VTT-74257-CN, CPC-2016-1495-VZC-ZAA-SPR",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57694"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "East Los Angeles",
    			    		"description": "Hearing: Parcel Maps",
    			    		"start": "2017-10-12T14:10:00",
    			    		"caseNumber": "AA-2016-3793-PMLA-SL",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57695"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Los Angeles",
    			    		"description": "Hearing: Parcel Maps",
    			    		"start": "2017-10-13T15:16:00",
    			    		"caseNumber": "AA-2015-3335",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57702"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-16T17:57:00",
    			    		"caseNumber": "ZA-2016-4376-ZAD",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57607"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-16T16:17:00",
    			    		"caseNumber": "ZA-2016-4175-ZAD",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57609"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Los Angeles",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-16T16:51:00",
    			    		"caseNumber": "CPC-2017-1898-CU",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57614"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-16T12:39:00",
    			    		"caseNumber": "ZA-20164722-ZV-ZAD-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57642"
    			    	},
    			    	{
    			    		"type": "Commission",
    			    		"title": "South Valley",
    			    		"description": "South Valley Area Planning Commission Meeting",
    			    		"start": "2017-10-18T15:12:00",
    			    		"caseNumber": "",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57688"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-18T15:11:00",
    			    		"caseNumber": "DIR-2016-304-DB-SPR-1A",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57700"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-18T11:12:00",
    			    		"caseNumber": "DIR-2016-3999-DB-1A",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57710"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-18T18:23:00",
    			    		"caseNumber": "DIR-2017-1917-CDP-MEL & ZA-2017-1918-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57646"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-18T15:53:00",
    			    		"caseNumber": "DIR-2017-1935-CDP-MEL & ZA-2017-1937-ZAA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57647"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-20T13:05:00",
    			    		"caseNumber": "DIR-2017-1951-CDP",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57648"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-20T09:06:00",
    			    		"caseNumber": "DIR-2017-1947-CDP",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57659"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-20T17:07:00",
    			    		"caseNumber": "DIR-2017-650-CDP-MEL ",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57660"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "West Los Angeles",
    			    		"description": "Hearing: Director of Planning",
    			    		"start": "2017-10-20T13:36:00",
    			    		"caseNumber": "DIR-2017-1331-CDP",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57689"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-23T16:41:00",
    			    		"caseNumber": "ZA-2017-585-CUX",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57681"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-23T16:39:00",
    			    		"caseNumber": "ZA-2017-604-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57682"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-23T18:47:00",
    			    		"caseNumber": "ZA-2017-1024-MPA",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57683"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Harbor",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-25T13:54:00",
    			    		"caseNumber": "ZA-2017-954-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57684"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-25T16:54:00",
    			    		"caseNumber": "ZA-2017-834-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57685"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-25T09:50:00",
    			    		"caseNumber": "ZA-2017-1076-CUB",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57686"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: Zoning Administration",
    			    		"start": "2017-10-25T10:23:00",
    			    		"caseNumber": "ZA-2016-4908-CUE",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57687"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-30T18:58:00",
    			    		"caseNumber": "CPC-2014-4942-ZC-HD-DB-SPR-WDI",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57668"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "South Valley",
    			    		"description": "Hearing: City Planning Commission",
    			    		"start": "2017-10-30T09:11:00",
    			    		"caseNumber": "CPC-2013-148-VCU",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57699"
    			    	},
    			    	{
    			    		"type": "Hearing",
    			    		"title": "Central",
    			    		"description": "Hearing: Area Planning Commission",
    			    		"start": "2017-11-01T15:59:00",
    			    		"caseNumber": "APCC-2017-593-SPE",
    			    		"url": "http://161.149.221.142/dcpapi/meetings/document/57657"
    			    	}
    			    ]
	});
});