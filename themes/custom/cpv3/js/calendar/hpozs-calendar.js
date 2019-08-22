$(document).ready(function() {
	$('#hpozs-calendar').fullCalendar({
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
    		url: 'https://planning.lacity.org/dcpapi/meetings/upcoming/calendar/hpoz',
	        error: function() {
	        	$('#script-warning').show();
	        }
    	},
    	loading: function(bool) {
    		$('#loading').toggle(bool);
    	},
    	eventRender: function(eventObj, $el) {
    		var eventContent = (eventObj.caseNumber !='') ? eventObj.description + ' | ' + eventObj.caseNumber : eventObj.description;
    		
    		$el.popover({
		        title: eventObj.title,
		        content: eventContent,
		        trigger: 'hover',
		        placement: 'top',
		        container: 'body'
	      });
    	},
    });
	$('.fc-event').css('font-size', '1.35em');
	$('.fc-event').css('white-space', 'nowrap');
	
	// Show/Hide events
	$("#ci-hearing").on('click', function() {
		$('.hearing').toggle();
		$('#h').toggleClass('cal-cat-hearing-disable');
	});
	
	$("#ci-apc").click(function() {
		$('.apc').toggle();
		$('#a').toggleClass('cal-cat-apc-disable');
	});
	
	$("#ci-community-event").click(function() {
		$('.community-event').toggle();
		$('#ce').toggleClass('cal-cat-community-event-disable');
	});
	
	$("#ci-info-session").click(function() {
		$('.info-session').toggle();
		$('#is').toggleClass('cal-cat-info-session-disable');
	});
	
	$("#ci-open-house").click(function() {
		$('.open-house').toggle();
		$('#oh').toggleClass('cal-cat-open-house-disable');
	});
	
	$("#ci-planning-workshop").click(function() {
		$('.planning-workshop').toggle();
		$('#pw').toggleClass('cal-cat-planning-workshop-disable');
	});
	
	$("#ci-drop-in-hours").click(function() {
		$('.drop-in-hours').toggle();
		$('#dih').toggleClass('cal-cat-drop-in-hours-disable');
	});
	
	$("#ci-hpoz-event").click(function() {
		$('.hpoz-event').toggle();
		$('#hpoze').toggleClass('cal-cat-hpoz-event-disable');
	});
	
	$("#ci-event").click(function() {
		$('.event').toggle();
		$('#a').toggleClass('cal-event-disable');
	});
	
	$('.fc-scroller').css('overflow','visible');
});