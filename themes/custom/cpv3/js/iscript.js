jQuery(document).ready(function($){
	// Commissioners
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

    // Commissioners : Area Planning Commissions
    $(document).on('click','.accordion-title', function () {
        var id_1 = $(this).attr('data-id');
        getPlanningData(id_1, $(this));
    });

    function getPlanningData(id, obj) {
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
    	/* if ($(this).hasClass('active')){
    		// do nothing
    	}else{
    		var id = $(this).find('a').attr('id');
    		getPublicationData(id);
    	}*/
    	
    	var id = $(this).find('a').attr('id');
        var taxId = getPublicationTaxId(id);
        getPublicationData(taxId);
    });
    
    function getPublicationData(id) {
        if (id != 'pub5') {
            $('.js-tab4').addClass('hidden');
            var url = siteurl + '/filter-publications/' + id;
            $.ajax({
                'url': url,
                'beforeSend': function () {
                    $('#js-content').html('');
                },
                'success': function (response) {
                    $(response).hide().appendTo('#js-content').fadeIn(100);
                },
                'error': function () {}
            });
        } else {
            $('#js-content').html('');
            $('.js-tab4').removeClass('hidden');
        }
    }
    
    // has relation with taxonomy's vocabulary 'Publication Type'
    // returns term id according to it's provided name. 
    function getPublicationTaxId(id) {
    	let tid = '';
    	switch (id) {
    		case 'annual' :
    			tid = 203;
    			break;
    			
    		case 'quarterly' :
    			tid = 202;
    			break;
    			
    		case 'housing' :
    			tid = 218;
    			break;
    			
    		case 'community' :
    			tid = 219;
    			break;
    			
			default:
				tid = 'pub5';
				break;
    	}
    	return tid;
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
    
    // Activate tab using URL    
    function hasURLtoTab() {
    	var splitPathname = window.location.pathname.split("/");
        var hashURL = window.location.hash;
        var formatURL = hashURL.replace('%3F', '?');        
        var pathnameIndex2 = splitPathname[2];	// publications

        if (formatURL.indexOf('?') > -1) {
            var splitVar = formatURL.split('?');
            var urlParam = splitVar[0].substr(hashURL.indexOf('#') + 1);
        } else {
            var urlParam = formatURL.substr(hashURL.indexOf('#') + 1);
        }
        
        if (formatURL.length) {
            if (pathnameIndex2 == 'publications') {            	
            	var taxId = getPublicationTaxId(urlParam);
            	
            	jQuery('#' + urlParam).trigger('click');
            	getPublicationData(taxId);
            }else if(pathnameIndex2 == 'commissioners'){
            	jQuery('#' + urlParam).trigger('click');
                getData(urlParam);
            }
        }
    }
    
    hasURLtoTab();
});