$(document).ready(function() {
	$.get('http://161.149.221.142/dcpapi/meetings/upcoming/calendar', function(data) {
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month, basicWeek, basicDay'
			},
			defaultDate: $.now(),
			navLinks: true, 		// can click day/week names to navigate views
			editable: false,
			eventLimit: true, 			// allow "more" link when too many events
			contentHeight: 50,
			defaultView: 'month',
			events: data
		});		
	});

	$(".fc-other-month .fc-day-number").hide();
});