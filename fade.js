$('head').append(
  '<style>body{display:none;}'
  );
  $(window).on("load", function() {
  $('body').fadeIn(2500);
  });