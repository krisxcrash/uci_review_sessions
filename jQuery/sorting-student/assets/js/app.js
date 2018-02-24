jQuery(function($){

  $(".nav li").click(function(){

    // 1. store data-type attribute
    var color = $(this).attr("data-type"); 

    // 2. hide all matched elements
    $('.objects li').hide(); 

    // 3. if 'color' is not defined hide/show all elements ("show all" button), if color IS defined show elemtnts that match color variable
    // (!color) ? $('.objects li').hide().fadeIn(625)  : $('li[data-type="' + color + '"]').fadeIn(625);

    // if-else option 

    if (!color) {
      $('.objects li').hide().fadeIn(625);
    }
    else {
      $('li[data-type="' + color + '"]').fadeIn(625);
    }

    // classes for nav buttons
    $('.active').removeClass('active'); 
    $(this).addClass('active'); 

  });

});