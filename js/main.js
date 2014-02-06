$(document).ready(function(){

    // Place background menu so it extends to one side of the page only.
    function positionBackground(){
        var position = $('.nav').offset();
        var height = $('.nav').height();
        var width = $('html').width() - position.left -20;

        $('.nav-bg').height(height).css({
            left: position.left + 20,
            width: width
        });
    }

    positionBackground();

    $(window).resize(function(){
        positionBackground();
    });


});


