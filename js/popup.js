$('.form-links').find('a').click(function(){

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
	$('#popup-iframe').bind('load',function(){
		$('#popup-overlay').addClass('dark');
		$('#popup-overlay').fadeIn(1000);

	})

})