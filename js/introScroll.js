	var scrollingSpeed = 700;
	var IDX;
	var isRendered = false;

	$(window).bind("load",function() {


		$('#fullpage').fullpage({
			anchors: ['HEAR', 'main'],
			scrollingSpeed: scrollingSpeed,
			animateAnchor: false,
			normalScrollElements: '.concerts-container',
			afterLoad: function(anchorLink, index){
				
				//if (isRendered) {
					if (index == 1) {showIntro()} 
					else {hideIntro(); showHeader()}	
				//} 
				//else { hideHeader()}
				//	hideLogo()
				//}
				console.log('load')
				IDX = index;
			//console.log(anchorLink, index)
			},
			afterRender: function() {
				/*isRendered = true;
				if (IDX == 1) {
					showLogo();
				}*/
				console.log('render')
			},
			onLeave: function(index, nextIndex, direction){
				if (nextIndex == 1) {hideHeader(); hideIntro()}
				console.log(index, nextIndex, direction)
			}
		});
	
	});

	function hideIntro(){
		$('.intro-logo > div').stop();
		$('.intro-logo > div').css("opacity", "0.0");
		$('.intro-logo .unfold').stop()
		$('.intro-logo li').css({"transform": "perspective(1000px) rotateX(-90deg)", "transition": "transform 0s linear 0s"});
		$('.scroll-indicator').stop();
		$('.scroll-indicator').css("opacity", "0.0");
	}

	function showIntro(){

		hideIntro();
		$('.intro-logo').css({"opacity": 1.0});
		window.requestAnimationFrame( function() {
			$('.intro-logo > div').each(function(n){
				$(this).delay(n*1000).animate({opacity: 1.0})
				$(this).find('li').each(function(i) {
					var delay = String(i*0.1 + n);
					$(this).css({"transform": "perspective(10px) rotateX(0deg)","transition": "transform 0.2s linear " + delay + "s"})			
				});
				
			});

			$('.scroll-indicator').delay(4000).animate({opacity: 1.0}, {duration: 1500})
		});
	}

	function hideHeader() {
		$('.site-header').animate({opacity: 0.0})
	}

	function showHeader() {
		$('.site-header').animate({opacity: 1.0})
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
	
	

