$('nav').onePageNav();

$('#nav-btn').click(function() {
  $('nav').slideToggle(1000);
  $('body').toggleClass('padded');
  // $('#home').animate({paddingTop: '250px'}, 5000);
});

var nav = $('nav');

// When the user resizes the window
$(window).resize(function() {
  // Get the width of the page and store it in a nav
  var width = $(window).width();
  // If width > breakpoint and nav is hidden
  if (width > 768 && nav.is(':hidden')) {
    // Change the css of the nav to display blank
    nav.css('display', '');
  }
});
