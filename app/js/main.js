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

 $('.contact-slider').slick({
	slidesToShow: 10,
	slidesToScroll: 10,
	dots: true,
	arrows: false,
 });

 var player = videojs('my-video');
 player.controlBar.addChild('VolumeMenuButton');
 var mixer = mixitup('.gallery__inner', {
	load: {
		filter: '.category-living'
	}
 });
})