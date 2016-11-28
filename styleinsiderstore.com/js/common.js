$(function() {

	// Custom JS

	$('#slider').owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['', ''],
		autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
	})

	function heightDetect() {
		$('.slide-img').css("height", $(window).width()/2);
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

});
