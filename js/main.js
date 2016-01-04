/*=======SWITCH ES/EN==============*/
$(document).ready(function(){	
	$('.bootstrap-switch-handle-on').text('EN');
	$('.bootstrap-switch-handle-off').text('ES');
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