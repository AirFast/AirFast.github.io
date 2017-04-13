$(function() {

	// Slider Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true
    });

});
