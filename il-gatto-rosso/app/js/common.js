$(function() {
    // Preloader
    $(window).on('load', function () {
        setTimeout(function () {
            var preloader = $('#site-preloaser');
            if (!preloader.hasClass('done')) {
                preloader.addClass('done');
            }
        }, 1000);
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

    // Google map 50.511572, 30.509444
    function initMap() {
        var LatLng = {lat: 50.511599, lng: 30.509396};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: LatLng
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }

    initMap();
});
