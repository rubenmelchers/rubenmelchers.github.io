$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();


    var options = {
        $AutoPlay: true
    };
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

});

var min = -100;
var max = 100;

$('polygon').hover(function () {
    $(this).css({"fill-opacity": "0", "transform":"translate3d("+ Math.floor(Math.random()*(max-min+1)+min) +"px, "+ Math.floor(Math.random()*(max-min+1)+min) +"px, "+ Math.floor(Math.random()*(max-min+1)+min) +"px)"});
    // $('.img-above-svg').css({"opacity": "0", "z-index":"-1"});
    $(this).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
        function() {
            $(this).css({"fill-opacity": "1", "transform":"translate3d(0, 0, 0)"});
            // $('.img-above-svg').css({"opacity": "1", "z-index":"-1"});
        });

});