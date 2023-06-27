$(function () {

 $('.header__btn').on('click', function() {
	$('.rightsite-menu').removeClass('rightsite-menu--close')
 });
 $('.rightsite-menu__close').on('click', function() {
	$('.rightsite-menu').addClass('rightsite-menu--close')
 });

 $('.top__slider').slick({
	dots: true,
	arrows: false,
	fade: true,
	autoplay: true
 });

 var mixer = mixitup('.gallery__inner', {
	load: {
		filter: '.category-living'
	}
 });
})