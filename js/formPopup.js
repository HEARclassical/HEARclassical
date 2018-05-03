$('.form-links').find('a').click(function(){

	$('#form-iframe').bind('load',function(){
		$('#form-overlay').fadeIn(1000);

	})
	console.log('clicked')

});

$('#form-close-button').click(function(){
	$('#form-overlay').fadeOut(1000);


});