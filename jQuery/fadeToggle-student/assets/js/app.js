(function($) {
  "use strict";
    
  //$.fn allows you to exted jQuery with your own functions
  jQuery.fn.fadeSlideToggle = function(options, fn) {
    
    var defaults = $.extend({ //Merge the contents of two or more objects together into the first object.
      "dimension": "height",
      "duration": jQuery.fx.speeds._default //jQuery.fx.speeds._default
    }, options);
    
    return this.each(function(index, value) {
      $(value).stop().animate({
        "opacity": "toggle",
        // TODO Find a way to allow the user to pass a dimension option, like "width" or "height".
        "height": "toggle"
      }, defaults.duration, function() {
        jQuery.isFunction(fn) && fn.call(this); //Determines if its argument is callable as a function.
      });
    });
  };
    
}(jQuery));

$(document).ready(function() {
  $(".start").on("click", function() {
    $(".box").fadeSlideToggle({
      "duration": 500
    }, function() {
      console.log("Animation complete!");
    });
  });
});