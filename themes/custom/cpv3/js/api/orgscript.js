jQuery(document).ready(function ($) {
	var baseURL = 'http://ladcp.westus.cloudapp.azure.com/themes/custom/cpv3/';

        $('#checkbox').change(function() {
            setInterval(function () {
                moveRight();
            }, 3000);
        });

        var slideCount = $('.leaf').length;
        var slideWidth = $('.leaf').width();
        var slideHeight = $('.leaf').height();
        var sliderUlWidth = slideCount * slideWidth;


        $('#org-slider').css({ width: slideWidth, height: slideHeight });

        if(slideCount != 1)
            $('.main-section').css({ width: sliderUlWidth, marginLeft: - slideWidth });

        $('.leaf:last-child').prependTo('.main-section');

        function moveLeft() {
            $('.main-section').animate({
                left: + slideWidth
            }, 300, function () {
                $('.leaf:last-child').prependTo('.main-section');
                $('.main-section').css('left', '');
            });
        };

        function moveRight() {
            $('.main-section').animate({
                left: - slideWidth
            }, 300, function () {
                $('.leaf:first-child').appendTo('.main-section');
                $('.main-section').css('left', '');
            });
        };

        $(document).on('click','.next',function () {
            var q = $(this).attr("data-filter");
            var parentEle = $(this).attr("data-parent");

            setBackgroundImage(q);

            search_data(q, parentEle);
            moveRight();
        });

        $(document).on('click','.prev',function () {
            var q = $(this).attr("data-filter");
            var parentEle = $(this).attr("data-parent");

            setBackgroundImage(q);

            search_data(q, parentEle);
            moveLeft();
        });

        var rs;
        function search_data(q, parentEle) {
            $.getJSON(baseURL+'js/api/organization.json', function (data) {

                rs = $(data).filter(function (x,y) {
                    if(y.children) {
                        recursive_function(y.children, q, parentEle);
                    }
                });
            });
        }

        function recursive_function(d, q, parentEle) {
            $.each(d,function (i,j) {
                if(q == j.name) {
                    // match found
                    prepare_html(j, q, parentEle);
                } else {
                    if(j.children)
                        recursive_function(j.children,q, parentEle);
                }
            });
        }

        function prepare_html(rows, q, parentEle) {
            var parent = [];
            var childList = '';
            $.each(rows,function(x,y){
                if($.isArray(y)) {
                    $.each(y, function (i,value) {

                        childList += "<div class='card-list'>";
                        childList += "<div class='row'>";

                        childList += "<div class='col-md-2 col-xs-2'><img src='"+baseURL+"images/city-planning-bureaus/user-circle_32x32.png' class='user-icon'></div>";
                        childList += "<div class='col-md-8 col-xs-8'>" +
                            "   <h4 class='card-list-fullname'>"+value['name'].toLowerCase()+"</h4>\n" +
                            "   <p class='card-list-position'>"+value['title']+"</p>\n" +
                            "</div>";

                        if(typeof value['children'] != 'undefined') {
                            var child = JSON.stringify(value['children']);

                            childList += "<div class='col-md-2 col-xs-2 next' data-filter='"+value['name']+"' data-parent='"+q+"' style='padding-top: 10px; padding-bottom: 20px;'>\n" +
                                "   <a href='#' style='color: #6398f8 !important;'>" +
                                "   <i class='fa fa-angle-right fa-3x' aria-hidden='true' style='padding-top: 5px;'></i></a>\n" +
                                "</div>";
                        }
                        childList += "</div>";
                        childList += "</div>";
                    })
                } else {
                    parent.push(y);
                }
            });

            avatar = 'user-circle_32x32.png';
            if(typeof rows['avatar'] != 'undefined') {
                avatar = rows['avatar'];
            }

            $('.p-prev-icon').html("<div class='icon prev' data-children='' data-filter='"+parentEle+"' data-parent=''><i class='fa fa-angle-left fa-3x'></i></div>")
            $('.p-avatar').attr('src', baseURL+'images/city-planning-bureaus/'+avatar);
            $('.p-name').html(parent[0].toLowerCase());
            $('.p-title').html(parent[1]);

            $('.child-info').html(childList);
        }

        // set background image
        function setBackgroundImage( q = '' ) {
          var bgImage = baseURL+"/images/city-planning-bureaus/social-t.jpg";

          if (q != ""){
            $('.col-centered').css({"background-image": "none"});
            $('.leaf').css({"background-color": "#cfdde6", "background-image": "none"});
          } else {
            $('.col-centered').css({"background-image": "none"});
            $('.leaf').css({"background-image": "url(\"" + bgImage + "\")"});
            
          }
        }

    });
