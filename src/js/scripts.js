$(document).ready(function($) {
	$('.nav-container-content a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 10
        }, 1200);
        return false;
    });

	$('.header-nav').on('click', function(event) {
		event.preventDefault();
		$('.nav-container-content').toggle();
	});

});