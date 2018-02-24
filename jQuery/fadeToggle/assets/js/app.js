(function($) {
  "use strict";
    
  jQuery.fn.fadeSlideToggle = function(options, fn) {
    
    var defaults = $.extend({
      "dimension": "height",
      "duration": jQuery.fx.speeds._default
    }, options);
    
    return this.each(function(index, value) {
      $(value).stop().animate({
        "opacity": "toggle",
        // TODO Find a way to allow the user to pass a dimension option, like "width" or "height".
        "height": "toggle"
      }, defaults.duration, function() {
        jQuery.isFunction(fn) && fn.call(this);
      });
    });
  };
    
}(jQuery));

jQuery(document).ready(function() {
  var jQbox = jQuery(".box"),
      jQstartButton = jQuery(".start");
  
  jQstartButton.on("click", function() {
    jQbox.fadeSlideToggle({
      "duration": 500
    }, function() {
      console.log("Animation complete!");
    });
  });
});