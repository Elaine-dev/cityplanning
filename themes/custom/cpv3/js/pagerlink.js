(function ($) {
'use strict';
Drupal.behaviors.pager_fragments = {
attach: function (context, settings) {
var pager_links = $('.tab-content .pager__items li a');
pager_links.each(function(){
//this.href = this.href.replace('?ajax=1', '');
this.href = this.href + '#updates';
//$('.tab-content').load(/plans-policies/general-plan-updates?page=1);
})
}}}(jQuery));
