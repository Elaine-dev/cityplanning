$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month, basicWeek, today'
		},
		
		defaultDate: $.now(),
	    //navLinks: true, // can click day/week names to navigate views
    	eventLimit: true, // allow "more" link when too many events
    	defaultView: 'month',
    	events: {
    		url: 'https://planning.lacity.org/dcpapi/meetings/upcoming/calendar',
	        error: function() {
	        	$('#script-warning').show();
	        }
    	},
    	loading: function(bool) {
    		$('#loading').toggle(bool);
    	},
    	eventRender: function(eventObj, $el) {
    		$el.popover({
		        title: eventObj.title,
		        content: eventObj.description + ' | ' + eventObj.caseNumber,
		        trigger: 'hover',
		        placement: 'top',
		        container: 'body'
	      });
    	},
    });
	$('.fc-event').css('font-size', '1.35em');
	$('.fc-event').css('white-space', 'nowrap');
	
	//calendar
	$("#ci-hearing").on('click', function() {
		$('.hearing').toggle();
		$('#h').toggleClass('cal-hearing-disable');
	});
	$("#ci-commission").click(function() {
		$('.commission').toggle();
		$('#c').toggleClass('cal-commission-disable');
	});
	$("#ci-apc").click(function() {
		$('.apc').toggle();
		$('#a').toggleClass('cal-apc-disable');
	});
	
	$('.fc-scroller').css('overflow','visible');
});