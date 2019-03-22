jQuery(document).ready(function($){
    $('.js-tab').click(function() {
        if($(this).hasClass('active')) {
            // do nothing
        	return;
        } else {
            var id = $(this).find('a').attr('id');
        	$('.js-desc').addClass('hidden');
        	$('.item-'+id).removeClass('hidden');
            getData(id);
        }
    });

    $(document).on('click','.accordion-title', function () {
        var id_1 = $(this).attr('data-id');
        getPlanningData(id_1, $(this));
    });

    function getData(id) {
        if(id == 23) {	// id of area planning
            var url = siteurl+'/area-planning/';
        } else {
            var url = siteurl+'/filter-commissions/'+id;
        }
        $.ajax({
            'url': url,
            'beforeSend': function () {
                $('.loading').removeClass('hidden');
                $('#js-content').html('');
            },
            'success': function(response) {
                $('.loading').addClass('hidden');
                $(response).hide().appendTo("#js-content").fadeIn(1500);
            },
            'error': function() {

            }
        });
    }

    function getPlanningData(id, obj) {
        console.log(obj);
        var url = siteurl+'/filter-planning-area/'+id;
        $.ajax({
            'url': url,
            'beforeSend': function () {
                $('.loading_1').removeClass('hidden');
                $('.js-response').html('');
            },
            'success': function(response) {
                console.log(response);
                $('.loading_1').addClass('hidden');
                $(response).hide().appendTo(".js-response").fadeIn(1500);
            },
            'error': function() {

            }
        });
    }
    
    // Publications
    $('.js-publication-tab').click(function(){
    	if ($(this).hasClass('active')){
    		// do nothing
    	}else{
    		var id = $(this).find('a').attr('id');
    		getPublicationData(id);
    	}
    });
    
    function getPublicationData(id) {
    	if (id !=4){
    		$('.js-tab4').addClass('hidden');
    		var url = siteurl+'/filter-publications/'+id;
    		$.ajax({
    			'url': url,
    			'beforeSend':function(){
    				$('#js-content').html('');
    			},
    			'success' : function (response) {
    				$(response).hide().appendTo('#js-content').fadeIn(100);
    			},
    			'error': function(){}
    		});
    	} else {
    		$('#js-content').html('');
    		$('.js-tab4').removeClass('hidden');
    	}
    }
    
    // Map Gallery
    currentRequest = null;

    $('.btn-default-1').on('click', function(){
      tid = $(this).data('tid');
      $('.js-dropdown').hide();
      $(this).next('ul').show();
      if($(this).hasClass('call-ajax')) {
        $this = $(this);
        call_ajax('js-content-1', $this);
      }
    });

    $('.parent, .content-wrapper').mouseenter(function() {
      $('.js-dropdown').hide();
    });

    $('.childLevel-1').on('click', function(){
      tid = $(this).data('tid');
      $('.level-2').hide();
      $(this).next('ul').show();
      if($(this).hasClass('call-ajax')) {
        $this = $(this);
        call_ajax('js-content-2', $this);
      }
    });

    $('.childLevel-2').on('click', function() {
      tid = $(this).data('tid');
      $('.last-level').hide();
      $(this).next('ul').show();
      if($(this).hasClass('call-ajax')) {
        $this = $(this);
        call_ajax('js-content-3', $this);
      }
    });

    function call_ajax(selector, $this) {
      $.ajax({
        url : siteurl+'/location/'+tid,
        type : 'get',
        beforeSend: function() {
          $this.next('ul').html('');
          $('.'+selector).addClass('loading-location');
          if(currentRequest != null) {
            currentRequest.abort();
          }
        },
        success : function (response) {
          $('.'+selector).removeClass('loading-location');
          $this.next('ul').html(response);
        },
        error : function (e) {
          $this.next('ul').html('Error occured');
        }
      });
    }
});

