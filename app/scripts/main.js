'use strict';
$(document).ready(function() {
  $('.scroll-to').click(function(e) {
    e.preventDefault();
    var end = $(this).attr('data-end');
    $('html, body').animate({
      scrollTop: $(end).offset().top
    }, 2000);
  });
});
