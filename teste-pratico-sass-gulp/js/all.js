"use strict";AOS.init({duration:1e3,easing:"ease-in-out",delay:100,once:!0}),window.addEventListener("scroll",function(e){50<=window.scrollY?(this.document.getElementsByClassName("navbar")[0].style.backgroundColor="#288f45",this.window.document.getElementsByClassName("navbar")[0].style.boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",this.window.document.getElementsByClassName("navbar")[0].style.paddingBottom="20px"):(this.document.getElementsByClassName("navbar")[0].style.backgroundColor="transparent",this.window.document.getElementsByClassName("navbar")[0].style.boxShadow="none")}),$(document).ready(function(){$(".owl-carousel-plans").owlCarousel({loop:!0,margin:10,responsiveClass:!0,nav:!0,dots:!1,navContainer:"#arrowsPrevNext",navText:['<img src="assets/arrow-left.svg" alt="seta esquerda">','<img src="assets/arrow-right.svg" alt="seta direita">'],responsive:{0:{items:1},600:{items:2},1e3:{items:4}}})}),$(".owl-carousel-testimonys").owlCarousel({loop:!0,margin:20,responsiveClass:!0,nav:!1,dots:!0,dotsContainer:"#dotsPersonal",dotsEach:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}}),$(".owl-service-carrosel").owlCarousel({loop:!0,margin:20,responsiveClass:!0,nav:!1,dots:!0,dotsContainer:"#dotsService",dotsEach:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}}),$(".owl-banners").owlCarousel({items:1,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayHoverPause:!0,autoplayTimeout:2e3,mouseDrag:!0,animateIn:"fadeIn",animateOut:"fadeOut"});