$(function() {
    // Preloader
    $(window).on('load', function () {
        $('#site-preloader').delay(1000).fadeOut('slow');
    });

    // Sandwich
    $(".sandwich").click(function() {
        $(".sandwich").toggleClass("active");
        $(".header-menu").slideToggle(50);
    });

    $(".site-menu li").click(function(){
        $(".sandwich").removeClass("active");
        $(".header-menu").removeAttr("style");
    });

    $(window).resize(function() {
        if($(window).width() > 768) {
            $(".sandwich").removeClass("active");
            $(".header-menu").removeAttr("style");
        }
    });

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
