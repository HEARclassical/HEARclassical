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
			normalScrollElements: '.concerts-container, .map-container, .home-container',
			afterLoad: function(anchorLink, index){
				if (isRendered) {
					if (index == 1) {showIntro()} 
					else {hideIntro(); showHeader()}	
				} else {
					hideIntro();
				}
				console.log('load')
				IDX = index;
				//console.log(anchorLink)
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
				//console.log(index, nextIndex, direction)
			},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
				console.log(slideAnchor)
				if (slideAnchor == "educational-videos" && !loadedMap) {
					$.getScript('js/worldMap.js', function(data, textStatus, jqxhr){
						console.log(textStatus);
					});
					loadedMap = true;
				}
				$('.horizontal-section').css({'visibility': 'visible'})
			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
				console.log(slideIndex, nextSlideIndex);

				$('.horizontal-section').each(function(n){
					var isBetween = ( (Math.min(nextSlideIndex, slideIndex) < n) && (n < Math.max(nextSlideIndex, slideIndex)))
					console.log(n, isBetween)

					if (isBetween) {
						$(this).css({'visibility': 'hidden'})
					}
					
				});
			}

		});
	
	});

	function hideIntro(){
		$('.intro-wrap').stop();
		$('.intro-wrap .intro-sub').stop();
		$('.intro-wrap .intro-sub span').stop();
		$('.intro-wrap').css({"opacity": "0.0"});
		$('.scroll-indicator').stop();
		$('.scroll-indicator').css({"opacity": "0.0"});
		$('.intro-wrap .intro-sub span').css({"opacity": 0.0, "pointer-events": "none"});
		//$('.intro-wrap span').hide();
	}

	function showIntro(){

		hideIntro();
		$('.intro-wrap').css({"opacity": 1.0});

		window.requestAnimationFrame( function() {
			//$('.intro-wrap .intro-head span').show(0);
			$('.intro-head').animate({"opacity": 1.0});

			$('.intro-sub > span').delay(1000).each(function(n){
				var delay = Math.ceil(n/2)*600 + Math.floor(n/2)*200
				$(this).delay(delay).animate({"opacity": 1.0}, 200, function(){
						$(this).css({"pointer-events": "auto"})
					});
			});
			//$('.intro-sub:not(span)').delay(5000).animate({"opacity": 1.0})
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
	})

	$(window).resize(function () {
    	//if touch device should rebuild immediately....
        $.fn.fullpage.setScrollingSpeed(0);
        $.fn.fullpage.reBuild();
        $.fn.fullpage.setScrollingSpeed(scrollingSpeed); //default one
    });
	

