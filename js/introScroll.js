var scrollingSpeed = 700;
var IDX;
var nxtIDX;
var isRendered = false;
var loadedMap = false;

//CONTROL ANIMATION TIMINGS (RELATIVE TO INTRO PAGE LOAD)
var scrollIndicatorDelay = 3000;
var scrollIndicatorFadeInDuration = 1500;

var comingFromSlide = false;
var comingFromIntro = false;

var slideTransitioningCounter = 0;



///////////////////////////
//HEADER NAVIGATION STUFF//
///////////////////////////

$('.site-header .header-button').click(function(){

	//if any subheaders are open, close them
	$('.site-header').find('.sub-header').each(function(){
		if ($(this).hasClass('open')) {
			$(this).toggleClass('open').fadeOut(0);
			$(this).parent().children('.header-button').fadeIn(500);
		}
	});
	var subheader = $(this).parent().find('.sub-header')
	if (subheader.length) {
		$(this).hide(0);
		subheader.toggleClass('open').fadeIn(500);
	}

});

//scroll up to intro when logo is tapped;
$('.logo .logo-head').click(function(){ //clicking on the logo will scroll back up to the intro
	//$('.header-wrapper').animate({'opacity': 0.0}, 100)
	
	//setTimeout(function(){
		$.fn.fullpage.moveSectionUp()
	//}, 100);*/

	//for mobile devices make sure we are zoomed out for the intro. 
	//$('meta[name="viewport"]').attr('content', 'width=' + zoomWidth + ', user-scalable:no');

})

$(window).bind("load",function() {	
	//seems to be a problem with chrome setting the inherited header background in the right place; this seems to hack it right;
	$('.header-wrapper').fadeOut(0);
	$('.header-blur').fadeOut(0);

	$('#fullpage').fullpage({
		sectionSelector: '.vertical-section',
		slideSelector: '.horizontal-section',
		scrollbar: false,
		css3: false, //only hope of getting background-attachment: fixed to work cross browser
		controlArrows: false,
		anchors: ['HEAR', 'main'],
		scrollingSpeed: scrollingSpeed,
		animateAnchor: false,
		lazyLoading: false,
		normalScrollElements: '#main-content', //, .concerts-container, .map-container, .home-container, main, .horizontal-overlay, .scroll-overlay, .horizontal-section, .header-wrapper',
		afterLoad: function(anchorLink, index) {
			console.log(anchorLink, index);
			
			IDX = index;

			
			if (!comingFromSlide && !comingFromIntro) {
				$('#home-anchor > .header-button-text').css({'color': 'lightgray', 'text-decoration-line': 'underline', 'text-decoration-color': 'lightgray'});
				
			}
			
			if (isRendered) {
				afterSectionLoad(IDX);
			}




			//console.log(anchorLink)
		},
		afterRender: function() {
			isRendered = true;
			afterSectionLoad(IDX);
		},
		onLeave: function(index, nextIndex, direction){
			if (nextIndex == 1) {introWillAppear()}
			if (nextIndex == 2) {mainWillAppear()}

		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

			var comingFromSlide = true;

			slideTransitioningCounter = Math.max(slideTransitioningCounter - 1, 0);

			if (slideAnchor == "educational-videos" && !loadedMap) {
				$.getScript('js/worldMap.js', function(data, textStatus, jqxhr){
					console.log(textStatus);
				});
				loadedMap = true;
			}

			//when we settle on a slide, make all the other slides invisible so that any resize looks a bit nicer 
			if (slideTransitioningCounter == 0 && nxtIDX == slideIndex) {
				IDX = nxtIDX;
				$('.horizontal-section').each(function(n){
					if (n != slideIndex) {
						$(this).css({'visibility': 'hidden'})
					}
						
				});
			}
			console.log(slideTransitioningCounter);

			//indicate in the nav header that we are on the new slide.
			var id = '#' + slideAnchor + '-anchor';

			$('.site-header .header-button-text').css({'color': 'white', 'text-decoration-line': 'inherit', 'text-decoration-color': 'white'});
			$(id + ' > .header-button-text').css({'color': 'lightgray', 'text-decoration-line': 'underline', 'text-decoration-color': 'lightgray'});
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){

			
			//reset location indication in the nav header.
			$('.site-header .header-button-text').css({'color': 'white', 'text-decoration-line': 'inherit', 'text-decoration-color': 'white'});

			/*make slides between current and destination invisible */
			console.log('left')
			$('.horizontal-section').each(function(n){
				if (n == slideIndex || n==nextSlideIndex) {
					$(this).css({'visibility': 'visible'})
				} else {
					$(this).css({'visibility': 'hidden'})
				}
			});

			nxtIDX = nextSlideIndex;

			/*
			$('.horizontal-section').each(function(n){
				var isBetween = ( (Math.min(nextSlideIndex, slideIndex) < n) && (n < Math.max(nextSlideIndex, slideIndex)))
				if (isBetween) {
					$(this).css({'visibility': 'hidden'})
				} else {
					$(this).css({'visibility': 'visible'})
				}
			});

			*/
			slideTransitioningCounter += 1;
			
		}

	});

});


function afterSectionLoad(index) {
	if (index == 1) {
		comingFromIntro = true;
		comingFromSlide = false;
		introDidAppear()

	} 
	if (index == 2) {

		comingFromSlide = true;
		comingFromIntro = false;
		mainDidAppear()

	}
}

function introWillAppear() {
	//$('.header-wrapper').fadeOut(100);
	$('.header-wrapper').stop().fadeOut(500);
	$('.header-blur').stop().fadeOut(500);
}

function introDidAppear() {
	showIntro();
}

function mainWillAppear() {
	//$('.header-wrapper').fadeOut(100);
	//hideIntro();
	$('#fullpage').css({"z-index": 0})
}

function mainDidAppear() {
	showHeader();
	hideIntro();
}


function hideIntro(){
	//window.requestAnimationFrame(function(){
		$('.intro-wrap').stop();
		$('.intro-wrap .intro-sub').stop();
		$('.intro-wrap .intro-sub span').stop();
		$('.intro-wrap').css({"opacity": "0.0"});
		$('.scroll-indicator').clearQueue().stop();
		$('.scroll-indicator').css({"opacity": "0.0"});
		$('.intro-wrap .intro-sub span').css({"opacity": 0.0, "pointer-events": "none"});
	//});
}

function showIntro(){

	hideIntro();
	$('.intro-wrap').css({"opacity": 1.0});
	//$('#fullpage').css({"z-index": 600})

	window.requestAnimationFrame( function() {
		$('.intro-head').animate({"opacity": 1.0});

		$('.intro-sub > span').delay(1000).each(function(n){
			var delay = Math.ceil(n/2)*600 + Math.floor(n/2)*200
			$(this).delay(delay).animate({"opacity": 1.0}, 200, function(){
					$(this).css({"pointer-events": "auto"})
				});
		});
		$('.scroll-indicator').delay(scrollIndicatorDelay).animate({"opacity": 1.0}, {duration: scrollIndicatorFadeInDuration})
	});
}

function hideHeader() {
	$('.site-header').animate({opacity: 0.0}, {"duration": "1s"});
	//$('body').css({'background': 'white'})
}

function showHeader() {		
	//$('.header-wrapper').fadeIn(100);
	$('.header-wrapper').fadeIn(2000);
	$('.header-blur').fadeIn(2000);

}

//Mousing over H in HEAR or History below transitions both H and History to gray, etc...
$('.intro-wrap span').each(function(n){
	
	var className = $(this).attr('class');
	if (className) {
		$(this).hover(
			function() {
				$('.intro-wrap span.' + className).css("color", "gray")
			},
			function() {
				$('.intro-wrap span.' + className).css("color", "black")
			}
		);
	}
	
});

$('.scroll-indicator').click(function(){
	if ($(this).css('opacity') != 0) {
		$.fn.fullpage.moveSectionDown()
	}
});

$(window).resize(function () {
	//if touch device should rebuild immediately....
    $.fn.fullpage.setScrollingSpeed(0);
    $.fn.fullpage.reBuild();
    $.fn.fullpage.setScrollingSpeed(scrollingSpeed); //default one
});


