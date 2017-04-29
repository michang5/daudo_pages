$(function () {
	$('[href="#top"], [href="#sport-1"], [href="#sport-2"], [href="#sport-3"]').click(function () {
		if ($(this).attr('href') == '#') {} else {
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - 50
			}, 500);
			return false;
		}
	});


	$('.slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 10,
		slidesToScroll: 10,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
    },
			
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
    }
  ]
	});

	$('.js-tp-voucher-filter').on('change', function () {
		var val = $(this).val();

		if (val === '__') {
			console.log(val);
			$('.js-tp-slider-filter').slick('slickUnfilter');
		} else {
			$('.js-tp-slider-filter').slick('slickFilter', function (index) {
				var indexval = $(this).data('filter').indexOf(val),
					filter = (indexval >= 0) ? 1 : 0;
				console.log(index, val, indexval, filter);
				return filter;
			});
		}
	});

});