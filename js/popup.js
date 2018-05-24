$('.form-links').find('a').click(function(){

	$('#popup-iframe').bind('load',function(){
		$('#popup-overlay').fadeIn(1000);

	})
	console.log('clicked')

});

$('#popup-close-button').click(function(){
	$('#popup-overlay').fadeOut(1000);


});

$('.lightbox-link').click(function(){
	$('#popup-iframe').bind('load',function(){
		$('#popup-overlay').fadeIn(1000);

	})

})