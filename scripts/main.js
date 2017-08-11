$(document).ready(function(){

  const blades = 1000;
  var grass = $('.grass').get(0);

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
   {selector: '.header', offset: $(window).height() * 1.75, callback: function() {
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

 for(var i = 0; i < blades; i++){
   var blade = document.createElement('div');
   createRandomStyles(blade);
   grass.appendChild(blade);
 }

function createRandomStyles(blade){
  var randHeight = Math.floor(Math.random() * 60);
  var randLeft = Math.floor(Math.random() * (window.innerWidth - 8));
  var randRotate = Math.floor(Math.random() * 10) - 5;
  blade.style.height = `${randHeight + 100}px`;
  blade.style.zIndex = randHeight;
  blade.style.opacity = randHeight * 0.02;
  blade.style.left = randLeft + 'px';
  blade.style.transform = `rotate(${randRotate}deg)`;
}


})
