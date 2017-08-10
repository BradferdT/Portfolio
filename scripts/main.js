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

  var options = [
   {selector: '.header', offset: $(window).height() * 2, callback: function() {
     $('.htmlProg').addClass('perfectSkillRow');
     $('.htmlProgressHeight').addClass('shrinkRow');
     $('.ngProg').addClass('perfectSkillRow');
     $('.ngProgressHeight').addClass('shrinkRow');
     $('.cssProg').addClass('perfectSkillRow');
     $('.cssProgressHeight').addClass('shrinkRowLess');
     $('.jsProg').addClass('perfectSkillRow');
     $('.jsProgressHeight').addClass('shrinkRowLess');
     $('.reactProg').addClass('perfectSkillRow');
     $('.reactProgressHeight').addClass('shrinkRowMore');
     $('.jqueryProg').addClass('perfectSkillRow');
     $('.jqueryProgressHeight').addClass('shrinkRow');
   } },
 ];
 Materialize.scrollFire(options);


})
