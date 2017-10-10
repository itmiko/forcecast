$(function(e){"use strict";
  e(".animsition").animsition(),
  e(".nav-col").matchHeight(),
  e(".counter").counterUp({delay:10,time:1e3}),
  e(".owl-carousel-single").owlCarousel({loop:!0,navRewind:!1,margin:10,dots:!0,nav:!1,autoplay:!1,navText:[],items:1}),
  Swiper(".swiper-container",{loop:!0,pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"}),
  e(".swiper-slide","#swiper").each(function(){var o=e(this).data("slide-img");
    e(this).css("background-image","url("+o+")")}),
  e("[data-toggle='tooltip']").tooltip();
  var o={delay:200,duration:600,distance:"60px",easing:"ease-in-out",
      rotate:{z:0},scale:1};
      window.sr=ScrollReveal(),
      // sr.reveal(".one-step",o,500),
  e("#animated-text").textillate({loop:!0}),
  e(window).on("scroll resize",
  function(){return e(window).scrollTop()>=75?void e("body").
  addClass("body-scrolled"):e("body").removeClass("body-scrolled")})});


var p = $('.popup__overlay');

$('#popup__toggle').click(function() {
  p.css('display', 'block')
})
p.click(function(event) {
  e = event || window.event
  if (e.target == this) {
    $(p).css('display', 'none')
  }
})
$('.popup__close').click(function() {
  p.css('display', 'none')
});

//video popup
function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("popupVid");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  //div.style.display = state == 'hide' ? 'none' : '';
  func = state == 'hide' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

$('#popup__toggle').click(function() {
  p.css('visibility', 'visible').css('opacity', '1');
});

p.click(function(event) {
  e = event || window.event;
  if (e.target == this) {
    $(p).css('visibility', 'hidden').css('opacity', '0');
    toggleVideo('hide');
  }
});

$('.popup__close').click(function() {
  p.css('visibility', 'hidden').css('opacity', '0');
  toggleVideo('hide');
});