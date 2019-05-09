$(function($) {
	$('.header-nav').on('click', function(event) {
		event.preventDefault();
		$('.nav-container-content').toggle();
		$('.main').on('click', function(event) {
			event.preventDefault();
			$('.nav-container-content').hide()
		});
		$('.nav-container-content a').click(function() {
	        $('.nav-container-content').hide('slow')
	        $('html, body').animate({
	            scrollTop: $($.attr(this, 'href')).offset().top - 0
	        }, 800)
	        return false;
	    });
	})
});