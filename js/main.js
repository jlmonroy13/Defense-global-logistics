/*=======SWITCH ES/EN==============*/
$(document).ready(function(){	
	$('.bootstrap-switch-handle-on').text('ES');
	$('.bootstrap-switch-handle-off').text('EN');
  $('.bootstrap-switch').click(function() {
    $(".ES").toggleClass('hide');
    $(".EN").toggleClass('show');
    $(".EN1").toggleClass('ESmision');
  });
  $('.ESEN').click(function() {
    $(".ES").toggleClass('hide');
    $(".EN").toggleClass('show');
    $(".espanol").toggleClass('colornaranja');
    $(".ingles").toggleClass('colornaranja');
  });
});
$(window).on("orientationchange",function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $( ".desktopES" ).toggleClass('hide');
    $( ".mobileES2" ).toggleClass('show');
  }
});

/*=======MENU  NAVBAR DOWN===================*/
    $(".1li").click(function() {
      $("html, body").animate({
        scrollTop: $("#about-us").offset().top
      }, "slow");
    });

    $(".2li").click(function() {
      $("html, body").animate({
        scrollTop: $("#our-services").offset().top
      }, "slow");
    });

    $(".3li").click(function() {
      $("html, body").animate({
        scrollTop: $("#our-experience").offset().top
      }, "slow");
    });

  $(".4li").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact-us").offset().top
    }, "slow");
  });

  $(".ourservices").click(function() {
    $("html, body").animate({
      scrollTop: $("#our-services").offset().top
    }, "slow");
  });

  $(".fli1").click(function() {
      $("html, body").animate({
        scrollTop: $("#about-us").offset().top
      }, "slow");
    });

    $(".fli2").click(function() {
      $("html, body").animate({
        scrollTop: $("#our-services").offset().top
      }, "slow");
    });

    $(".fli3").click(function() {
      $("html, body").animate({
        scrollTop: $("#our-experience").offset().top
      }, "slow");
    });

  $(".fli4").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact-us").offset().top
    }, "slow");
  });