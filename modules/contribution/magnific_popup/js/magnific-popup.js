(function ($, Drupal, drupalSettings) {

  "use strict";
  // Write your own jquery once function --added by EB need this for magnific pop-up nav buttons to work, this error occurs beceause we are using two conflicting versions of JQuery.

  $.fn.once = function(processed_class) {
      if (typeof processed_class == 'undefined') {
          processed_class = 'processed';
      }
      return $(this).not('.' + processed_class).addClass(processed_class);
  };

  Drupal.behaviors.magnific_popup = {
    attach: function (context, settings) {
      // Gallery.
      $(context).find('.mfp-all-items, .mfp-first-item, .mfp-random-item').once('mfp-processed').each( function() {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
            enabled: true
          },
          image: {
            titleSrc: function (item) {
              return item.img.attr('alt') || '';
            }
          }
        });
      });

      // Separate items.
      $(context).find('.mfp-separate-items').once('mfp-processed').each(function () {
        $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          image: {
            titleSrc: function (item) {
              return item.img.attr('alt') || '';
            }
          }
        });
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
