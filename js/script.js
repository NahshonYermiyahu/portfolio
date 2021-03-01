$(document).ready(function () {

  // $('.js--to-gallery').click(function () {
  //   $('html, body').animate({ scrollTop: $('.js--gallery').offset().top }, 700);
  // });

  $(function() {
    $('a[href*=#]:not([href=#popup])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });



  /* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animate__fadeInUp');
  }, {
    offset: '90%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animate__fadeInUp');
  }, {
    offset: '90%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animate__fadeInUp');
  }, {
    offset: '90%'
  });

});
