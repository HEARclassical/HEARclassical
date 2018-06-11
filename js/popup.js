$('.form-links').find('a').click(function(){
	resetPopup();
	$('#popup-iframe').bind('load',function(){
		$('#popup-overlay').removeClass('dark');
		$('#popup-overlay').fadeIn(1000);

	})
	console.log('clicked')

});

$('#popup-close-button').click(function(){
	$('#popup-overlay').fadeOut(1000);


});

$('.lightbox-link').click(function(){
	resetPopup();
	$('#popup-iframe').bind('load',function(){
		$('#popup-overlay').addClass('dark');
		$('#popup-overlay').fadeIn(1000);

	})

})


function resetPopup() {
	var iframe = document.getElementById('popup-iframe');
	var container = iframe.parentElement;
	var src = iframe.src;
	iframe.remove();

	iframe.setAttribute('src', src);

	container.append(iframe);

}

