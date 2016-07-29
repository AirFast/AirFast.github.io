$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	function heightDetect() {
		$(".website-header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".menu li").click(function() {
		$(".menu ul li").removeClass("active");
		$(this).addClass("active");
	});

	/*$(".blog-menu li").click(function() {
		$(".blog-menu ul li").removeClass("active");
		$(this).addClass("active");
	});*/

	$(".sandwich").click(function() {
		$(".sandwich").toggleClass("active");
		$(".menu").slideToggle(50);
	});

	$(".menu li").click(function(){
		$(".sandwich").removeClass("active");
		$(".menu").removeAttr("style");
	});

	$(window).resize(function() {
		if($(window).width() > 768) {
			$(".sandwich").removeClass("active");
			$(".menu").removeAttr("style");
		}
	});

	//Owl Carousel
	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		loop: true,
		margin: 30,
		//autoplay: true,
    //autoplayTimeout: 9000,
    //autoplayHoverPause: true
  });

	//Magnific Popup
	$(".popup-content").magnificPopup();

	//Mixitup
	$("#blog-art").mixItUp({
		load: {
			filter: '.category-1'
		},
		layout: {
			display: 'block'
		},
		selectors: {
			filter: '.filter-1'
		},
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
