	var scrollingSpeed = 700;
	var IDX;
	var isRendered = false;
	var loadedMap = false;

	//CONTROL ANIMATION TIMINGS (RELATIVE TO INTRO PAGE LOAD)
	var scrollIndicatorDelay = 3000;
	var scrollIndicatorFadeInDuration = 1500;


	$(window).bind("load",function() {


		$('#fullpage').fullpage({
			sectionSelector: '.vertical-section',
			slideSelector: '.horizontal-section',
			controlArrows: false,
			anchors: ['HEAR', 'main'],
			scrollingSpeed: scrollingSpeed,
			animateAnchor: false,
			lazyLoading: false,
			normalScrollElements: '.concerts-container, .map-container',
			afterLoad: function(anchorLink, index){
				if (isRendered) {
					if (index == 1) {showIntro()} 
					else {hideIntro(); showHeader()}	
				} else {
					hideIntro();
				}
				console.log('load')
				IDX = index;
				console.log(anchorLink)
			},
			afterRender: function() {
				isRendered = true;
				if (IDX == 1) {
					showIntro();
				}
				console.log('render')
			},
			onLeave: function(index, nextIndex, direction){
				if (nextIndex == 1) {hideHeader(); hideIntro()}
				console.log(index, nextIndex, direction)
			},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
				console.log(slideAnchor)
				if (slideAnchor == "educational-videos" && !loadedMap) {
					$.getScript('js/worldMap.js', function(data, textStatus, jqxhr){
						console.log(textStatus);
					});
					loadedMap = true;
				}
			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}

		});
	
	});

	function hideIntro(){
		$('.intro-logo > div').stop();
		$('.intro-logo > div').css({"opacity": "0.0"});
		$('.intro-logo .unfold').stop()
		$('.intro-logo li').css({"transform": "perspective(1000px) rotateX(-90deg)", "transition": "transform 0s linear 0s, color 0.5s linear 0s"});
		$('.scroll-indicator').stop();
		$('.scroll-indicator').css({"opacity": "0.0"});
	}

	function showIntro(){

		hideIntro();
		$('.intro-logo').css({"opacity": 1.0});
		window.requestAnimationFrame( function() {
			$('.intro-logo > div').each(function(n){
				$(this).delay(n*1000).animate({"opacity": 1.0})
				$(this).find('li').each(function(i) {
					var delay = String(i*0.1 + n);
					$(this).css({"transform": "perspective(10px) rotateX(0deg)","transition": "transform 0.2s linear " + delay + "s, color 0.5s linear 0s"})			
				});
			});

			$('.scroll-indicator').delay(scrollIndicatorDelay).animate({"opacity": 1.0}, {duration: scrollIndicatorFadeInDuration})
		});
	}

	function hideHeader() {
		$('.site-header').animate({opacity: 0.0}, {"duration": "1s"})
		$('.site-header').delay(1000).css("visibility", "hidden")
	}

	function showHeader() {
		$('.site-header').animate({opacity: 1.0}, {"duration": "1s"});
		$('.site-header').css("visibility", "visible");
	}

	
	$('.scroll-indicator').click(function(){
		if ($(this).css('opacity') != 0) {
			$.fn.fullpage.moveSectionDown()
		}
	})

	$(window).resize(function () {
    	//if touch device should rebuild immediately....
        $.fn.fullpage.setScrollingSpeed(0);
        $.fn.fullpage.reBuild();
        $.fn.fullpage.setScrollingSpeed(scrollingSpeed); //default one
    });
	
	$('.intro-logo .logo-head').hover(
		function() {
			$(this).parent().children('ul').children('li').css("color","black");
			$(this).css("color","gray");
		}, 
		function() {
			$(this).parent().children('ul').children('li').css("color","gray");
			$(this).css("color","black");
		}
	)

	$('.intro-logo ul').hover(
		function() {
			$(this).children('li').css("color","black");
			$(this).parent().children('.logo-head').css("color","gray");
		}, 
		function() {
			$(this).children('li').css("color","gray");
			$(this).parent().children('.logo-head').css("color","black");
		}
	)
