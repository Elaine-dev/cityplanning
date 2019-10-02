jQuery(document).ready(function(){
	$("input:radio[name=appointment_location]").click(function(){
		var value = $(this).val();
		if (value != "Metro Office: Figueroa Plaza") {
			$("#edit-appointment-for-wirelessfacilities").attr('disabled', true);
			$("#edit-appointment-for-wirelessfacilities").prop('checked', false);
			
			$("#edit-appointment-for-mapprocessingservices").attr('disabled', true);
			$("#edit-appointment-for-mapprocessingservices").prop('checked', false);
			
			$("#edit-appointment-for-bestservice").attr('disabled', true);
			$("#edit-appointment-for-bestservice").prop('checked', false);
			
			$("#edit-appointment-for-affordablehousing").attr('disabled', true);
			$("#edit-appointment-for-affordablehousing").prop('checked', false);
		} else {
		  	$("#edit-appointment-for-wirelessfacilities").prop('disabled', false);
		  	$("#edit-appointment-for-mapprocessingservices").prop('disabled', false);
		  	$("#edit-appointment-for-bestservice").prop('disabled', false);
		  	$("#edit-appointment-for-affordablehousing").prop('disabled', false);
	  	}
	});
	
	// First available appointment
	$("#edit-first-available-appointment-first-available-appointment").change(function() {
		if (true == $(this).prop("checked")) {
	       $("#any_day").prop('checked', false);
	       $(".weekdays").prop('checked', false);
	       $(".time_preference").prop('checked', false);
	       
	       $('input:radio[name=time_preference]').prop('required', false);
	       $('.time_preference > legend > span').removeClass('js-form-required form-required');
	     }
	 });
	
	 // Any Day
	 $("#any_day").change(function() {
	 	if (true == $(this).prop("checked")) {
	 		$("#edit-first-available-appointment-first-available-appointment").prop('checked', false);
	 		$(".weekdays").prop('checked', false);
	 		
	 		// add strik to time preference
	 		$('.time_preference > legend > span').addClass('js-form-required form-required');
	 		$('input:radio[name=time_preference]').prop('required', true);
	 		
	     }
	 });
	
	 // Other Day
	 $(".weekdays").change(function() {
	 	if (true == $(this).prop("checked")) {
	 		$("#edit-first-available-appointment-first-available-appointment").prop('checked', false);
	 		$("#any_day").prop('checked', false);
	 		
	 		// add strik to time preference
	 		$('.time_preference > legend > span').addClass('js-form-required form-required');
	 		$('input:radio[name=time_preference]').prop('required', true);
		}
	});
	
	// Time frame
	$(".time_preference").change(function() {
		if (true == $(this).prop("checked")) {
			$("#edit-first-available-appointment-first-available-appointment").prop('checked', false);
		}
	});
});