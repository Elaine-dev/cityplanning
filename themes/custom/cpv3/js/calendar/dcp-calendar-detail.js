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
			eventLimit: true, 			// allow "more" link when too many events
			eventLimitText: "Something",
			editable: false,
			//contentHeight: 50,
			defaultView: 'month',
			events: data,
		});		
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
		$('#p').toggleClass('cal-apc-disable');
	});
	
	$('.fc-scroller').css('overflow','visible');
	
});