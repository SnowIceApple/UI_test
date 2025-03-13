$(document).ready(function(){

    var startPos = 0;
    var pagePos = 0;
    var scrollY = 0;
    var scrollPrevented = false;
    var winHeight = $(window).innerHeight();

    $('.mNav_dragArea').on('touchstart', function(e){
        startPos = pagePos;

        $(this).on('touchmove', function(e2){
            $('.mNav_box').addClass('onSlide');
            scrollY = e.originalEvent.targetTouches[0].pageY;
            pagePos = startPos + scrollY - e2.originalEvent.targetTouches[0].pageY;
            if(pagePos >= winHeight){
                pagePos = winHeight;
            }
            else if(pagePos <= 60){
                pagePos = 60;
            }
            
            if(scrollPrevented == false){
                scrollPrevented = true;
                $('.mNav_box').on('touchmove', function(e){
                    e.preventDefault();        
                });
            }

            console.log(scrollY);
            console.log(pagePos);
            console.log(winHeight);

            $('.mNav_box').css({
                top: - pagePos + 'px',
            });

        });

        $(this).off('touchend').on('touchend', function() {
            $('.mNav_box').removeClass('onSlide');
            if(pagePos >= winHeight - 170){
                $(this).addClass('mNav_slideUp');
                pagePos = winHeight;
                $('.mNav_box').css({
                    top: - pagePos + 'px',
                });
            }
            else{
                $(this).removeClass('mNav_slideUp');
            }
            if(pagePos <= 200){
                $(this).addClass('mNav_slideDown');
                pagePos = 60;
                $('.mNav_box').css({
                    top: - pagePos + 'px',
                });
            }
            else{
                $(this).removeClass('mNav_slideDown');
            }
    
            scrollPrevented = false;
        });



    });



    


});