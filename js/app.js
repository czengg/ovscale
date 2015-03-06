
function toggleNav() {
  var nav = $('.navbar');
  if (nav.is(':visible')) {
    nav.slideUp();
  } else {
    nav.slideDown();
  }
}