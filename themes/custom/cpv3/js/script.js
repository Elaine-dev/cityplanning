/*!
 * jQuery JavaScript Custom Library v2.1
 */
jQuery(document).ready(function(){
	/** Main Slider **/
	homepageSlider();

	/** Slider **/
	//slider();

	/** Tree - menu **/
	treeMenu();

	/** Feature Section-2 **/
	imagesSwap();

	/** google translate **/
	googleTranslateFun();

	/** Case Search **/
	caseSearch();

	/** Advance Search **/
	advanceSearch();

	/** ZIMAS search **/
	innerPageZIMASSearch();

	/*** Redirect to selected requested form ***/
	redirectPreApplicationForm();

	/*** Search ***/
	// search();

	/** Accordion tab **/
	accordionTab();

	/** Global search **/
 	globalSearch();

 	/** Open external link in new window  **/
	openExtLinkInNewWindow();

	/** Side menu : Development Services > Urban Design **/
	urbanDesignSideMenu();

	/** Image pop-up  **/
	imagePopUpGallery();

	/**Video pop-up **/
	videoPopup();

   /**Bootstrap popup **/
   popImage();

   /**CPU hash url **/
   hashUrlCpu();

/** CPU dropdown menus + child menu**/
	 removeClassActiveTop();
	 removeClassActiveSub();

   /** remove hover effect in all image link **/
   // removeHoverEffectOnImageLink();

   /** Initial Screening checklist: checks if any checkbox is selected or not **/
   isCheckboxSelected();

   /**Commissions, Boards and Hearings hash URL **/
   hashUrlCommissionBoards();

   /** Add attribute 'onmouseover' = 'tooltip.pop(this, '#tip2');' in <img> tag on General Plan Element content.
    *  	add following code in entry form (backend): <span class="dp-tooltip">&nbsp;</span>
    **/
   appHtmlInGeneralPlanEle();
});

function homepageSlider() {
	// Bootstrap slider
    (function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));!function(n){"use strict";n.fn.bsTouchSlider=function(i){var a=n(".carousel");return this.each(function(){function i(i){var a="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";i.each(function(){var i=n(this),t=i.data("animation");i.addClass(t).one(a,function(){i.removeClass(t)})})}var t=a.find(".item:first").find("[data-animation ^= 'animated']");a.carousel(),i(t),a.on("slide.bs.carousel",function(a){var t=n(a.relatedTarget).find("[data-animation ^= 'animated']");i(t)}),n(".carousel .carousel-inner").swipe({swipeLeft:function(n,i,a,t,e){this.parent().carousel("next")},swipeRight:function(){this.parent().carousel("prev")},threshold:0})})}}(jQuery);

    //Initialise Bootstrap Carousel Touch Slider
    // Curently there are no option available.

    jQuery('#bootstrap-touch-slider').bsTouchSlider();
    // END Bootstrap slider
}

function slider() {
	//Function to animate slider captions
    function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var jQuerythis = jQuery(this),
				jQueryanimationType = jQuerythis.data('animation');
			jQuerythis.addClass(jQueryanimationType).one(animEndEv, function () {
				jQuerythis.removeClass(jQueryanimationType);
			});
		});
	}

	//Variables on page load
	var jQuerymyCarousel = jQuery('#cp-carousel-generic'),
		jQueryfirstAnimatingElems = jQuerymyCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Initialize carousel
	jQuerymyCarousel.carousel();

	//Animate captions in first slide on page load
	doAnimations(jQueryfirstAnimatingElems);

	//Pause carousel
	jQuerymyCarousel.carousel('pause');

	//Other slides to be animated on carousel slide event
	jQuerymyCarousel.on('slide.bs.carousel', function (e) {
		var jQueryanimatingElems = jQuery(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations(jQueryanimatingElems);
	});

    jQuery('#cp-carousel-generic').carousel({
        interval:3000,
        pause: "false"
    });
    //END Slider
}

function treeMenu() {
	jQuery('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
	  jQuery('.tree li.parent_li > ul > li').hide();
	  jQuery('.tree li.parent_li > span').on('click', function (e) {
	      var children = jQuery(this).parent('li.parent_li').find(' > ul > li');

	      if (children.is(":visible")) {
	        children.hide('medium');
	          jQuery(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus').removeClass('fa-minus');
	      } else {
	          children.show('medium');
	          jQuery(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus').removeClass('fa-plus');
	      }
	      e.stopPropagation();
	  });
}

/**
 * Images swap on mouse hover.
 */
function imagesSwap() {
	var sourceSwap = function () {
		var $this = $(this);
		var newSource = $this.data('alt-src');
		$this.data('alt-src', $this.attr('src'));
		$this.attr('src', newSource);
    }

    $(function () {
      $('.f-block img, .f-block h5 a').hover(sourceSwap, sourceSwap);
    });
}

function googleTranslateFun() {
	var gtConstEvalStartTime = new Date();function d(b){var a=document.getElementsByTagName("head")[0];a||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(b)}function _loadJs(b){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;d(a)}function _loadCss(b){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.charset="UTF-8";a.href=b;d(a)}function _isNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)if(!(a=a[b[c]]))return!1;return!0}
	function _setupNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)a.hasOwnProperty?a.hasOwnProperty(b[c])?a=a[b[c]]:a=a[b[c]]={}:a=a[b[c]]||(a[b[c]]={});return a}window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
	if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk=eval('((function(){var a\x3d2926286325;var b\x3d-1952953556;return 417498+\x27.\x27+(a+b)})())');var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();
}

function caseSearch() {
	$("#case-search").on('click', function(){
		var caseNumber = $('#case-number').val();
		var callAPI = "https://planning.lacity.org/PdisCaseInfo/caseNumber/"+caseNumber;
		window.open(callAPI, '_blank');
	});
}

function advanceSearch() {
	var apiPath = 'https://planning.lacity.org/pdiscaseinfo2/search';
	$("#adv-case-search").on('click', function(){
		var advCaseNumber = $('#adv-case-number').val();
		window.open(apiPath+'/case/'+advCaseNumber, '_blank');
	});

	$("#ordinances-search").on('click', function(){
		var ordNumber = $('#ordinances').val();
		window.open(apiPath+'/ord/'+ordNumber, '_blank');
	});

	$("#zoning-case-search").on('click', function(){
		var zoningNumber = $('#zoning-case').val();
		window.open(apiPath+'/zi/'+zoningNumber, '_blank');
	});

	$("#cpc-card-search").on('click', function(){
		var cpcNumber = $('#cpc-card').val();
		window.open(apiPath+'/cpc/'+cpcNumber, '_blank');
	});

	$("#za-card-search").on('click', function(){
		var zaNumber = $('#za-card').val();
		window.open(apiPath+'/za/'+zaNumber, '_blank');
	});
}

/**
 * Search functionality for ZIMAS form in a page (<url>/zoning/zoning-map)
 */
function innerPageZIMASSearch() {
	$("#search-zoning").on('click', function() {
		var streetNumber = $('#street-number').val();
		var streetName = $('#street-name').val();
		var callAPI = "http://zimas.lacity.org/?streetname="+streetName+"&housenum="+streetNumber;
		window.open(callAPI, '_blank');
	});
}

function redirectPreApplicationForm() {
	$("#submit_request_type").on('change', function() {
		var selected, redUrl;
		selected = $('#submit_request_type :selected').text();

		if ( selected == 'Pre-Application' || selected == 'Clearance / Effectuation' ) {
			if (selected == 'Pre-Application'){
				redUrl = 'request-form/pre-application-request-form';
			}
			if (selected == 'Clearance / Effectuation'){
				redUrl = 'request-form/clearance-request-form';
			}
			window.open(redUrl, '_parent');
		}

	});
}

function search() {
	$(function() {
	    $('a[href="#toggle-search"], .navbar-search-box .search-bar-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
			event.preventDefault();
			$('.navbar-search-box .search-bar-search .input-group > input').val('');
			$('.navbar-search-box .search-bar-search').toggleClass('open');
			$('a[href="#toggle-search"]').closest('li').toggleClass('active');

			if ($('.navbar-search-box .search-bar-search').hasClass('open')) {
				/* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
				setTimeout(function() {
					$('.navbar-search-box .search-bar-search .form-control').focus();
				}, 100);
			}
		});

		$(document).on('keyup', function(event) {
			if (event.which == 27 && $('.navbar-search-box .search-bar-search').hasClass('open')) {
				$('a[href="#toggle-search"]').trigger('click');
			}
		});

	});
}

function accordionTab() {
	/**
	 *	Accordion tab
	 *	add/remove .active class in the panel-heading
	 *	used in Commission tab for area planning and Staff Directory
	 */
	$('.panel-group .panel-collapse.in').prev().addClass('active');
	$('.panel-group')
	  .on('show.bs.collapse', function(e) {
	    $(e.target).prev('.panel-heading').addClass('active');
	  })
	  .on('hide.bs.collapse', function(e) {
	    $(e.target).prev('.panel-heading').removeClass('active');
	  });

	// open collapse panel when search box is clicked.
	$('#search_text').keyup(function(event){
		var val = this.value.length;
		if (val > 1) {
			$('#sr').css('display', 'block');
		} else {
			$('#sr').css('display', 'none');
		}
	});

	$('#search_text').blur(function(event){
		var val = $('#search_text').val().length;
		if (val == 0) {
			$('#sr').css('display', 'none');
		}
	});
}

function globalSearch() {
	var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
     submitIcon.mouseup(function(){
         return false;
     });

    searchBox.mouseup(function(){
        return false;
    });

    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });

	 function buttonUp(){
	     var inputVal = $('.searchbox-input').val();
	     inputVal = $.trim(inputVal).length;
	     if( inputVal !== 0){
	         $('.searchbox-icon').css('display','none');
	     } else {
	         $('.searchbox-input').val('');
	         $('.searchbox-icon').css('display','block');
	     }
	 }
}

function openExtLinkInNewWindow() {
	$('a').each(function() {
		var a = new RegExp('/' + window.location.host + '/');
	    if (!a.test(this.href)) {
	      $(this).attr("target","_blank");
	    }
    });
}

function urbanDesignSideMenu() {
	  var pathname = $(location).attr('pathname');
	  var splitPathName = pathname.split('/');

	  if (splitPathName[1] === 'development-services') {
	  	var subLevel1 = splitPathName[1];					// development-services
	  	var subLevel2 = splitPathName[2];					// urban-design
	  	var subLevel3 = splitPathName[3];					// program-overview

	  	var urbanDesignMenus = ['program-overview', 'project-review', 'guidelines-resources'];

		  if (subLevel1 == 'development-services' && subLevel2 == 'urban-design') {

			  if (jQuery.inArray(subLevel3, urbanDesignMenus) != -1) {
				  $('.hide-urd').hide();
				  $('.unhide-urd').show();
			  }
			  else{
				  $('.hide-urd').show();
				  $('.unhide-urd').hide();
			  }
		  } else {
			  $('.unhide-urd').hide();
		  }
	  }
}

function imagePopUpGallery() {
	var groups = {};
	$('.galleryItem').each(function() {
	  var id = parseInt($(this).attr('data-group'), 10);

	  if(!groups[id]) {
	    groups[id] = [];
	  }

	  groups[id].push( this );
	});

	$.each(groups, function() {
	  $(this).magnificPopup({
	      type: 'image',
	      closeOnContentClick: true,
	      closeBtnInside: false,
	      gallery: { enabled:true }
	  })
	})
};

function videoPopup() {
	$(".video").on("click", function () {
		var theModal = $(this).data("target"),
		videoSRC = $(this).attr("data-video"),
		videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";;
		$(theModal + ' iframe').attr('src', videoSRCauto);
		$(theModal).on('click', function(){
			$(theModal + ' iframe').attr('src', videoSRC);
			var memory = $(this).html();
			$(this).html(memory);
		});
	});
};

$('#videoModal').on('hidden.bs.modal', function (e) {
	$('#videoModal').find('iframe').attr('src', '');
});

function popImage() {
	$("#pop").on("click", function() {
		$('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
		$('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
	});
};

// store the currently selected tab in the hash value
function hashUrlCpu() {
	var url = document.location.toString();
	if (url.match('#')) {
		$('#hollywood-tab ul.nav.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
	}

	$('#hollywood-tab ul.nav.nav-tabs a').click(function(e) {
		//e.preventDefault();
		//  e.stopPropagation();
		$(this).tab('show');
		window.location.hash = e.target.hash;
	});
};

// removes active class from non-parent in CPU dropdown menus
function removeClassActiveTop() {
	//  e.preventDefault();
	$('.childLevel-1').on('click', function() {
			$('li').closest('li').removeClass('active');
});
};
function removeClassActiveSub() {
	//  e.preventDefault();
	$('.padding-top0').on('click', function() {
			$('li.childLevel-1').removeClass('active');
});
};

/**
 * This function adds a css class 'image-link' to it's parent tag (<a>) which includes image tag (<img>).
 *
 * For instance, we have html code as: 	<a href="#"><img src="#" /></a>
 * The o/p will be: 					<a href="#" class="image-link"><img src="#" /></a>
 *
 */
function removeHoverEffectOnImageLink() {
	$('img').parent('a').addClass('image-link');
}


function isCheckboxSelected(){
	$('#ischecklist').submit(function() {
		if ($('input[name="type_of_project"]:checked').length < 1) {
			var msg = "<div class='messages-error-status' style='padding: 10px;'>Please select the Type of Project.</div>";
			$('#error-message').html(msg);
			return false;
	    }
	});
}

function hashUrlCommissionBoards() {
	var url = document.location.toString();
	var replaceSt = url.replace("%3F", "?");						// replace URL-encoding value to it's ASCII character. ie. '%3F' represents '?'
	var arrUrl = replaceSt.split('/');

	if (arrUrl[4] !== undefined) {
		var splitUrl = (arrUrl[4]).split('#');						// "commissions-boards-hearings#boards?q=southlosangeles" => o/p 'commissions-boards-hearings', 'boards?q=southlosangeles'
		var setTargetParam, setTargetMenu, tabContent, alink = '';

		if (splitUrl[1] !== undefined) {
			setTargetMenu = splitUrl[0];
			setTargetParam = (splitUrl[1].indexOf("?") != -1) ?  (splitUrl[1].split('?'))[0] : splitUrl[1];

			if (setTargetMenu) {
				switch(setTargetMenu) {
					case 'commissions-boards-hearings' :
						tabContent = '#commissions-meeting-tab ul.nav.nav-tabs a';
						alink = tabContent + '[href="#' + setTargetParam + '"]';
						break;

					/*case 'publications' :
						tabContent = '#publication-tab ul.nav.nav-tabs a';
						alink = tabContent + '[href="#' + setTargetParam + '"]';
						break;*/
				}

				$(alink).tab('show');
			}

			$(tabContent).click(function(e) {
				$(this).tab('show');
				window.location.hash = e.target.hash;
			});

		}
	}
}

function appHtmlInGeneralPlanEle() {
	var customHtml;
	customHtml = '<img alt="Health" data-entity-type="file" src="/sites/default/files/icons/general_plan/Health.jpg" class="general-plan-elements-icons" style="cursor:pointer;" />';
	customHtml += '<span class="dp-top">';
	customHtml += '<h3>Health Element</h3>';
	customHtml += '<p><a href="https://planning.lacity.org/odocument/7f065983-ff10-4e76-81e5-e166c9b78a9e/Plan_for_a_Healthy_Los_Angeles.pdf" target="_blank">Health Element (General Plan)</a></p>';
	customHtml += '<p><a href="https://planning.lacity.org/odocument/04a6a47b-9269-4773-a3ae-55f110b7d1e8/Health_Atlas.pdf" target="_blank">Health Atlas</a></p>';
	customHtml += '<span id="pointer"></span>';
	customHtml += '</span>';

	$('.dp-tooltip').append(customHtml);
}
