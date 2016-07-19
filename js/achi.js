jQuery(document).ready(function($){
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });
});


var box = $('#moreless');

$('#showbutton').on('click', function () {

  if (box.hasClass('hidden')) {

    box.removeClass('hidden');
    setTimeout(function () {
      box.removeClass('visuallyhidden');
      document.getElementById('showbutton').innerHTML="Show Less";
    }, 20);

  } else {

    box.addClass('visuallyhidden');
    $('html,body').animate({
        scrollTop: $("#showless").offset().top -40},
        'slow');
    box.one('transitionend', function(e) {
      document.getElementById('showbutton').innerHTML="Show more";
      box.addClass('hidden');
    });
    
  }

});