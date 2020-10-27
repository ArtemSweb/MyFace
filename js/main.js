$(document).ready(function () {
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');	
		$('body').toggleClass('lock');
		$('.header__link, .header__logo-link').click(function(event){
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
		});
	});
});