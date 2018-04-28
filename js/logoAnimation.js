
///ANIMATION FOR THE HEAR LOGO OF THE SITE-HEADER/////

/*****this script adds a hover event to each letter of the hear logo, causing a folding animation to trigger.  ****/


var logoLiGradient = 0.03;



$('.logo > div').each(function(){
	$(this).find('li').each(function(n){
		$(this).css({'background': 'linear-gradient(to bottom, rgba(0,0,0,' + n*logoLiGradient + '), rgba(0,0,0,' + (n+1)*logoLiGradient + ')'})
	});
});


$('.logo .logo-head').hover( 
	function(){ //mouseenter
		var ufw = $(this).parent();
		if (ufw.data('hidingTimeout')){clearTimeout(ufw.data('hidingTimeout')); ufw.data('hidingTimeout', undefined)}
		if (ufw.hasClass('folding')) { //interrupting the fold
			ufw.removeClass('folding');
			ufw.addClass('unfolding');
		} else {
			//start from the bottom
			//ufw.children('ul').clearQueue()
			ufw.children('ul').show()
			ufw.addClass('unfolding');
			nextFold(ufw[0], 0);
		}
	
		$(this).animate({"color": "gray"})
	},

	function(){ //mouseleave

		var ufw = $(this).parent();

		if (ufw.hasClass('unfolding')) { //interrupting the unfolding, so timeouts in effect and will reverse direction
			ufw.removeClass('unfolding');
			ufw.addClass('folding');

		} else {
			ufw.addClass('folding');
			nextFold(ufw[0], undefined);
		}
		
		$(this).animate({"color": "white"})

	}
);

function nextFold(element, index) {

	var letters = element.querySelector('ul').children;
	if (index === undefined) {index = letters.length}; //means we start from the top;


	if ($(element).hasClass('unfolding') && index < letters.length) {
		$(letters[index]).css({
			"transform": "perspective(10px) rotateX(0deg)",
			"transition": "transform 0.1s linear 0s"
		});
		//$(letters[index]).show()


		if (index == letters.length - 1) {$(element).removeClass('unfolding')} //finished unfolding
		else { setTimeout(function(){nextFold(element, index + 1)}, 100)}


	} else if ($(element).hasClass('folding') && index > 0) {

		$(letters[index-1]).css({
			"transform": "perspective(1000px) rotateX(-90deg)",
			"transition": "transform 1.0s linear 0s",
		});


		if (index == 1 ) {
			$(element).removeClass('folding')
			needsClear = true;
			$(element).data('hidingTimeout', setTimeout(function(){
				$(element).children('ul').hide();
			}, 1000));
		} 
		else { setTimeout(function(){nextFold(element, index - 1)}, 100)}
	}




}