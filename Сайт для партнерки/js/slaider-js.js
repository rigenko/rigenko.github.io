


	
	// слайдер на главной

	$('.Projects_img_1').slick({
		arrows: false,
		autoplay: true,
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplaySpeed: 4000

		});

	$('.Slaider-Our-Team-galeri-img').slick({
		arrows: false,
		autoplay: true,
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'

		});

	// слайдер на стр.Development

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		autoplay: true,
		fade: true,
		asNavFor: '.slider-nav'
		});

	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		arrows: false,
		focusOnSelect: true
		});

	// слайдер на стр.Buy

	$('.works-games_slaider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		prevArrow: '<botton class="slick-next"></botton>',
		nextArrow: '<botton class="slick-prev"></botton>',
		appendArrows: '.works-bloc_arrows'
		  
		});

	// слайдер на стр.News

	$('.slider-News').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		prevArrow: '<botton class="slick-next"></botton>',
		nextArrow: '<botton class="slick-prev"></botton>'
		
		
		});

	
