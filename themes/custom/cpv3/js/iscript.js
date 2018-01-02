jQuery(document).ready(function($){
    $('.js-tab').click(function() {
        if($(this).hasClass('active')) {
            // do nothing
        } else {
            var id = $(this).find('a').attr('id');
            console.log(id);
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
});
