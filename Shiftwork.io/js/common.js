$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("#my-video").backgroundVideo({
		$videoWrap: $("#video-wrap"),
		$outerWrap: $(window),
		preventContextMenu: true,
		parallaxOptions: {
			offset: 60,
			effect: 1.7
		}
	});

	/*function heightDetect() {
		$("#outer-wrap").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});*/

	$(".sandwich").click(function() {
		$(".sandwich").toggleClass("active");
		$('.menu').slideToggle(50);
	});

	$(window).resize(function() {
		if($(window).width() > 768) {
			$(".sandwich").removeClass("active");
			$(".menu").removeAttr("style");
		}
	});

	$(".logo, .menu ul li").click(function(){
		$(".sandwich").removeClass("active");
		$(".menu").removeAttr("style");
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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
