var boundLink;

$('#website-preview').hide(0).fadeOut(0);

$('.ambassador-website').mousemove(function(e){
	$('#website-preview').css({'left': e.pageX, 'top': e.clientY+ 30});
})

$('.ambassador-website').hover(
	function(e) {	//mouseenter
		var link = $(this)[0].href;

		if ($('#ambassador-iframe').attr('src') != link) {
			$('#website-preview').fadeIn(200);
			$('#website-preview-link-display').children('p').html(removePrefix(link));
			$('#website-preview-link-display').fadeIn(100);

			$('#ambassador-iframe').attr('src', link)
			boundLink = link
			$('#ambassador-iframe').bind('load',function(){
				//$('#website-preview').fadeIn(200);
				$('#website-preview-link-display').fadeOut(200);
				$('#ambassador-iframe').fadeIn(300);


				boundLink = undefined;
			});
		} else {
			$('#website-preview').fadeIn(200);
			$('#ambassador-iframe').fadeIn(300);

		}
		
	}, 
	function(e) {	//mouse leave
		$('#website-preview').fadeOut(200);
		$('#ambassador-iframe').fadeOut(300);

		if (boundLink) {
			$('#ambassador-iframe').off('load')
			boundLink = undefined;
			link = undefined;
			$('#ambassador-iframe').attr('src', 'about:blank')

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