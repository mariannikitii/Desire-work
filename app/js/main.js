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

 $('.article-slider__box').slick({
	prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
	nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
 });

 var mixer = mixitup('.gallery__inner', {
	load: {
		filter: '.category-living'
	}
 });

})