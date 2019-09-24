(function($, Drupal, drupalSettings) {
    'use strict';
    // turn off scrolltoTop
    if (Drupal.AjaxCommands) {
        Drupal.AjaxCommands.prototype.viewsScrollTop = null;
    }
    // Write your own jquery once function
    $.fn.once = function(processed_class) {
        if (typeof processed_class == 'undefined') {
            processed_class = 'processed';
        }
        return $(this).not('.' + processed_class).addClass(processed_class);
    };

    Drupal.behaviors.pagerFragments = {
        attach: function(context, settings) {
            var pager_links = $('.tab-content .pager__items li a').addClass("use-ajax");
        }
    };

    Drupal.behaviors.linkClick = {
        attach: function(context, settings) {
            $(".pager__items li a", context).on('click', function() {

                var ajaxObject = Drupal.ajax({
                    success: function(response) {
                        var viewHtml = response[1].data;
                        Drupal.settings.views = response[0].settings.views;
                        Drupal.attachBehaviors();
                        if (response[1].data !== undefined) {
                            $('.tab-content').html(viewHtml);
                        }
                        var ajaxPath = 'views/ajax';
                        var view_info = {
                            view_name: 'community_plan_update_news_feed',
                            view_display_id: 'general_plan_news',
                        };
                        var ajax_settings = {
                            submit: view_info,
                            url: ajaxPath,
                            cache: true,
                            event: 'click',
                            async: true,
                        };

                        Drupal.ajax(ajax_settings);
                        ajaxObject.success(response, "success");
                    },

                });
            });
            // reload sharethis icons
            if (__sharethis__ && __sharethis__.config) {
                __sharethis__.init(__sharethis__.config);
            }
            Drupal.behaviors.animate = {
                attach: function(context, settings) {
                    $(document).ajaxStart(function() {
                        $('.tab-content').fadeTo(200, .05);
                    });
                    $(document).ajaxSuccess(function() {
                        $('.tab-content').fadeTo(200, 1.0);
                    });
                }
            };
        }
    }
})(jQuery, Drupal, drupalSettings);
