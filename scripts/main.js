$(document).ready(function(){
  $('.spaceship').addClass('animateSpaceship');
  setTimeout(function () {
    $('.loading').fadeOut();
    $('.main').css('display','block');
  }, 2000);
})
