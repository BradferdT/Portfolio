$(document).ready(function(){
  $('.scrollspy').scrollSpy({
    'scrollOffset': 0
  });
  $('.spaceship').addClass('animateSpaceship');
  setTimeout(function () {
    $('.loading').fadeOut();
    $('.main').css('display','block');
    $('.planet').css('display','block');
  }, 2000);
})
