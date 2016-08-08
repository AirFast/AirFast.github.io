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

	
	//Page Scroll to id
	$(".menu nav ul li a[href*='#']").mPageScroll2id();

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

	//Btn top
	$("body").append('<div class="top"><span>');
	$("body").on("click", ".top", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
	})


	//Owl Carousel
	$(".slider").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		loop: true,
		margin: 30,
		autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause: true
  });

	//Magnific Popup
	$(".popup-content").magnificPopup();

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

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

	//Knob
	$(".knob").knob({
		readOnly: true,
		bgColor: "transparent",
		fgColor: "#03a7ff",
		inputColor: "#fff",
		thickness: ".02",
		font: "NoaLTW01-LightOblique, sans-serif",
		linecap: "round",
		dynamicDraw: true,
	});

	startKnob =  function() {
		$(".knob").each(function () {
			var $this = $(this);
			var myVal = $this.attr("rel");
			$this.knob({
			});
			$({
				value: 0
			}).animate({
				value: myVal
			}, {
				duration: 3000,
				easing: "swing",
				step: function () {
					$this.val(Math.ceil(this.value)).trigger("change");
				}
			})
		});
	}

	$(".startKnob").bind("inview", startKnob);

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
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

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
			$(".descr-text, .website-description .socnet").addClass("animated fadeInLeft");
		} else {
			$(".top").removeClass("active");
			//$(".menu ul li").removeClass("active");
		}
	});

});
