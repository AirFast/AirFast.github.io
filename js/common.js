$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".sandwich").click(function() {
		$(".sandwich").toggleClass("active");
		$(".top_menu, .top_socnet").slideToggle(50);
	});

	$(window).resize(function() {
		if($(window).width() > 768) {
			$(".sandwich").removeClass("active");
			$(".top_menu, .top_socnet").removeAttr("style");
		}
	});

	$(".logo, .top_menu ul li, .top_socnet ul li").click(function(){
		$(".sandwich").removeClass("active");
		$(".top_menu, .top_socnet").removeAttr("style");
	});

	//$(".top_menu, .top_socnet").animatedUp("fadeInRight", "fadeOutRight");
	$(".btn_up").animated("fadeInRight", "fadeOutRight");
	$(".top_text h1").animatedUp("fadeInDown", "fadeOutUp");
	$(".top_text p").animatedUp("fadeInUp", "fadeOutDown");
	$(".sect_head").animated("fadeInUp", "fadeOutDown");
	$(".sect_menu").animated("flipInY", "flipOutY");

	$("#container-1").mixItUp({
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

	$("#container-2").mixItUp({
		load: {
					filter: '.category-1'
				},
		layout: {
			display: 'block'
		},
		selectors: {
			filter: '.filter-2'
		},
	});

	/*$(".sect_menu li").click(function() {
		$(".sect_menu li").removeClass("active");
		$(this).addClass("active");
	});*/

	/*$(".sandwich, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	//DYNAMIC SUBMENU CLASS SYMBOLS
	$(".top_menu ul li").has( "ul" ).each(function( index ) {
		$(this).toggleClass('submenu');
	});
	
	$(".submenu > a").click(function(e){
		e.preventDefault();
	});
	
	//TO PREVENT MENU CLOSE ON CLICK IN SUBMENU
	$(".submenu ul li").click(function(e){
		e.stopPropagation();
	});
	
	//CLICK ON SUBMENU LINK
	$(".submenu").click(function(e){
		//CLOSE OPEN SUBMENU
		if($(this).hasClass("active")){
			$(".top_menu ul li").removeClass('active');
			$('.top_menu ul li ul').slideUp();
		}else{
			$(".top_menu ul li").removeClass('active');
			$(".top_menu ul li ul").slideUp();
			$(this).addClass("active");
			$(this).find('ul').stop().slideToggle();
			e.stopPropagation();
		}
		$(".top_menu ul li").removeClass('openSub');
		$(this).addClass('openSub');
		
	});
	
	$("body, html").click(function(){
		$(".top_menu ul li").removeClass('active openSub');
		$('.top_menu ul li ul').slideUp();
	});*/

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