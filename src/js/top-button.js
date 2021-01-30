
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top-button').fadeIn();
  } else {
    $('.top-button').fadeOut();
  }
});
$(document).ready(function () {
  $('.top-button').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});