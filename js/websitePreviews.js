var boundLink;

$('#website-preview').hide(0).fadeOut(0);

$('.ambassador-website').mousemove(function(e){
	$('#website-preview').css({'left': e.pageX, 'top': e.clientY+ 30});
})


$('.ambassador-website').hover(
	function(e) {	//mouseenter
		var imageLink = "https://hearclassical.github.io/HEARclassical/assets/images/website-previews/" + $(this).data().image;
		var link = $(this)[0].href;
		var img = $('#ambassador-preview').find('img');
		//var noEmbed = $(this).hasClass('no-embed');
		if (img.attr('src') != imageLink) {
			$('#website-preview').fadeIn(200);
			$('#website-preview-link-display').children('p').html(removePrefix(link));
			$('#website-preview-link-display').fadeIn(100);
			var sx = $('#website-preview-link-display').width() / 342;
			var sy = $('#website-preview-link-display').height() / 198;
			$('#ambassador-preview').css({
				'transform': 'scaleX(' + sx + ') scaleY(' + sy + ')'
			})



			
			img.attr('src', imageLink)
			boundLink = link;
			img.bind('load',function(){


				$('#website-preview-link-display').fadeOut(500);
				$('#ambassador-preview').fadeIn(500);

				$('#ambassador-preview').css({
					'transform': 'scaleX(1.0) scaleY(1.0)',
					'transition': 'transform 0.5s linear'
				})

				boundLink = undefined;
			});
			
		} else {
			$('#website-preview').fadeIn(200);
			$('#ambassador-preview').fadeIn(300);
		}
		
	}, 
	function(e) {	//mouse leave
		$('#website-preview').fadeOut(200);
		$('#ambassador-preview').fadeOut(300);
		$('#ambassador-preview').css({
			'transition': 'none'
		})


		if (boundLink) {
			img.off('load')
			boundLink = undefined;
			link = undefined;
			img.attr('src', '')

		}
	}

);

function removePrefix(string) {

	var rexpstr;

	if (string.startsWith("https://www.")) {
		rexpstr = "https://www."
	} else 

	if (string.startsWith("https://")) {
		rexpstr = "https://"
	} else 

	if (string.startsWith("http://www.")) {
		rexpstr = "http://www."
	} else 
	if (string.startsWith("http://")) {
		rexpstr = "http://"
	} else

	if (string.startsWith("www.")) {
		rexpstr = "www."
	}

	var rexp = new RegExp("^" + rexpstr);

	var newStr = string.replace(rexp, '');

	if (newStr.endsWith('/')) {
		newStr = newStr.substring(0, newStr.length-1);
	}

	return newStr;
}