
///ANIMATION FOR THE HEAR LOGO OF THE SITE-HEADER/////

/*****this script adds a hover event to each letter of the hear logo, causing a folding animation to trigger.  ****/

$('.logo .logo-head').click(function(){ //clicking on the logo will scroll back up to the intro
	$.fn.fullpage.moveSectionUp()
})

$('.logo .logo-head').hover( 
	function(){ //mouseenter
		var ufw = $(this).parent()
		console.log($(this), ufw)

		if (ufw.hasClass('folding')) { //interrupting the fold
			ufw.removeClass('folding');
			ufw.addClass('unfolding');
		} else {
			//start from the bottom
			ufw.addClass('unfolding');
			nextFold(ufw[0], 0);
		}
	
		$(this).animate({"color": "gray"})
	},

	function(){ //mouseleave

		var ufw = $(this).parent()

		if (ufw.hasClass('unfolding')) { //interrupting the unfolding, so timeouts in effect and will reverse direction
			ufw.removeClass('unfolding');
			ufw.addClass('folding');

		} else {
			ufw.addClass('folding');
			nextFold(ufw[0], undefined);
		}
		$(this).animate({"color": "black"})

	}
);

function nextFold(element, index) {

	var letters = element.querySelector('ul').children;
	if (index === undefined) {index = letters.length}; //means we start from the top;


	if ($(element).hasClass('unfolding') && index < letters.length) {
		$(letters[index]).css({
			"transform": "perspective(10px) rotateX(0deg)",
			"transition": "0.1s linear 0s"
		});
		if (index == letters.length - 1) {$(element).removeClass('unfolding')} //finished unfolding
		else { setTimeout(function(){nextFold(element, index + 1)}, 100)}


	} else if ($(element).hasClass('folding') && index > 0) {

		$(letters[index-1]).css({
			"transform": "perspective(1000px) rotateX(-90deg)",
			"transition": "1.0s linear 0.05s"
		});

		if (index == 1 ) {$(element).removeClass('folding')} 
		else { setTimeout(function(){nextFold(element, index - 1)}, 100)}
	}




}