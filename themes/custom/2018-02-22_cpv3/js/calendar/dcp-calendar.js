$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month, basicWeek, today'
		},
		defaultDate: $.now(),
	    navLinks: true, // can click day/week names to navigate views
    	eventLimit: true, // allow "more" link when too many events
    	defaultView: 'basicWeek',
    	contentHeight: 200,
    	events: {
    		url: 'http://161.149.221.142/dcpapi/meetings/upcoming/calendar',
	        error: function() {
	          $('#script-warning').show();
	        }
    	},
    	loading: function(bool) {
    		$('#loading').toggle(bool);
    	},
    	eventRender: function (event, element){
    		element
				.attr('title', event.description + ' | ' + event.caseNumber)
				.tooltip();
		},
    });
	
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
	$(".fc-other-month .fc-day-number").hide();
});