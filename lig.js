$( document ).ready(function() {

  // Codigo para el slideshow
  var counter = 0, 
      $items = $('.diy-slideshow figure'),
      numItems = $items.length; 
  var showCurrent = function(){
      var itemToShow = Math.abs(counter%numItems);
    $items.removeClass('show'); 
    $items.eq(itemToShow).addClass('show');    
  };


  $('.next').on('click', function(){
      counter++;
      showCurrent(); 
  });
  $('.prev').on('click', function(){
      counter--;
      showCurrent(); 
  });


  if('ontouchstart' in window){
    $('.diy-slideshow').swipe({
      swipeLeft:function() {
        counter++;
        showCurrent(); 
      },
      swipeRight:function() {
        counter--;
        showCurrent(); 
      }
    });
  }

  // Codigo para menu animado

  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });

});
