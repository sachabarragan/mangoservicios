(function ($) {
  "use strict";

  // Mobile Navigation
  if ($('.main-nav').length < 1024) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="large material-icons">menu</i>');
    $('body').append('<nav class="mobile-nav d-lg-none"><ul><li><a href="#intro">Home</a></li><li><a href="#aboutMagno">Sobre Magno</a></li><li><a  href="#services">Servicios</a></li><li><a  href="#why-us">¿Por que elegirnos?</a></li><li><a href="#portfolio">Trabajos</a></li><li><a href="#contactoMagno">Contaco</a></li></ul></nav><div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      if ($('.mobile-nav-toggle i').html() === "menu") {
        $('.mobile-nav-toggle i').html("close");
        
      } else if ($('.mobile-nav-toggle i').html() === "close") {
        $('.mobile-nav-toggle i').html("menu");
      }
      //$('.mobile-nav-toggle i').html("close");
      $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').html("menu");
          $('.mobile-nav-overly').fadeOut();
        } 
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
    $('.mobile-nav-toggle i').html("menu");
  } 

})(jQuery);
