$(document).ready(function() {
  // var leftpanel = $('#left-panel');
  var middlepanel = $('#middle-panel');
  // var rightpanel = $('#right-panel');
  var leftclicker = $('#left-clicker');
  var rightclicker = $('#right-clicker');

  var document_width = $(document).width()
  var middlepanel_width = middlepanel.outerWidth();
  var middlepanel_left = middlepanel.offset().left;
  var middlepanel_right = middlepanel_left + middlepanel_width;
  var middlepanel_top = middlepanel.offset().top;

  // leftpanel.css('left', middlepanel_left - middlepanel_width);
  // rightpanel.css('left', middlepanel_right);
  leftclicker.css('left', middlepanel_left);
  rightclicker.css('left', middlepanel_width + middlepanel_left - 32);

  $(window).resize(function() {
    document_width = $(document).width();
    middlepanel_width = middlepanel.outerWidth();
    middlepanel_left = middlepanel.offset().left;
    middlepanel_right = middlepanel_left + middlepanel_width;
    middlepanel_top = middlepanel.offset().top;

    // leftpanel.css('left', middlepanel_left - middlepanel_width);
    // rightpanel.css('left', middlepanel_right);
    leftclicker.css('left', middlepanel_left);
    rightclicker.css('left', middlepanel_width + middlepanel_left - 32);

  });

  $('.panel-img').hide();
  // $('#left-panel .panel-1').show();
  $('#middle-panel .panel-2').show();
  // $('#right-panel .panel-3').show();

});

var current_image = 2;
var next_image = current_image + 1;
var previous_image = current_image - 1;
var num_images = 3;

function previous() {
  $('.clicker').show();
  if (previous_image !== 0) {
    current_image -= 1;
    previous_image -= 1;
    next_image -= 1;

    $('.panel-img').hide();
    $('#middle-panel .panel-'+current_image+'').show();
    // $('#right-panel .panel-'+next_image+'').show();
    // $('#left-panel .panel-'+previous_image+'').show();
  } 

  if (current_image === 1) {
    $('#left-clicker').hide();
  }
}

function next() {
  $('.clicker').show();
  if (next_image !== 4) {
    current_image += 1;
    previous_image += 1;
    next_image += 1;

    $('.panel-img').hide();
    $('#middle-panel .panel-'+current_image+'').show();
    // $('#right-panel .panel-'+next_image+'').show();
    // $('#left-panel .panel-'+previous_image+'').show();
  } 

  if (current_image === 3) {
    $('#right-clicker').hide();
  }
}




