(function($) {
/*
	var list = $('.jokes'),
		copy = $('.copy');

	//$('header').after( $('<h1>nadpis biach</h1>'))

	$('<h1 class="btn-primary">nadpis biach</h1>').insertBefore( '.list' );

	list.find('dd').slideUp();

	list.find('dt').on('click', function(event) {

		var dt = $(this),
			dd = dt.next();

		dd.slideToggle().siblings('dd').slideUp();

		//dd.add(dt).remove();

		//copy.html( $('html').html());

		//var newC = dt.text() + dd.html()

		copy.html(dt.text() + dd.html());

		event.preventDefault();
	});*/

/*	var ul = $('.list');

	ul.find('li').on('click', function() {
		copy.text($(this).is('li:eq(2)'));
	});*/






	var copy = $('.copy'),
		list = $('.jokes'),
		load = $('.loader');
		kockaa = $('.kocka').css({
			position: 'relative',
			zInder: 10
		});

		list.find('dd').slideUp();

		load.hide();

		list.find('dt:eq(3)').on('click', function(event) {
			load.fadeIn();

			list.find('dd:eq(3)').slideToggle();

			kockaa.animate({ bottom:500}, 2000, function(){
					load.fadeOut();
			});




			/*copy.slideToggle().html($('dd:eq(3)').html()) + load.fadeOut();*/

		event.preventDefault();

		});






/*
	var hey = +prompt('hey'),
		serus = +prompt('serus');

	console.log(hey);
	console.log(serus);


	var vysledok = (hey + serus);

	console.log(vysledok);

	if (vysledok%2==0) {
		console.log('parne');
	}

	else {
		console.log('neparne');
	}
*/


})(jQuery);