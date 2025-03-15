$(document).ready(function(){

    var startPos = 0;
    var pagePos = 0;
    var scrollY = 0;
    var standPos = 0;
    var scrollPrevented = false;
    var winHeight = $(window).innerHeight();



    $('.mNav_dragArea').each(function(){

        $(this).on('touchstart', function(e){
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

    
                console.log(startPos);
                console.log(pagePos);
    
                $('.mNav_box').css({
                    top: - pagePos + 'px',
                });

                $(this).off('touchend').on('touchend', function(){
                    $('.mNav_box').removeClass('onSlide');

                    if(startPos - pagePos > 0 && pagePos <= winHeight - 220){
                        $(this).addClass('mNav_slideDown');
                        pagePos = 60;
                        $('.mNav_box').css({
                            top: - pagePos + 'px',
                        });
                    }
                    else{
                        pagePos = winHeight;
                        $('.mNav_box').css({
                            top: - pagePos + 'px',
                        });
                        $(this).removeClass('mNav_slideDown');
                    }
                    if(startPos - pagePos < 0 && pagePos > 220){
                        $(this).addClass('mNav_slideUp');
                        pagePos = winHeight;
                        $('.mNav_box').css({
                            top: - pagePos + 'px',
                        });
                    }
                    else{
                        pagePos = 60;
                        $('.mNav_box').css({
                            top: - pagePos + 'px',
                        });
                        $(this).removeClass('mNav_slideUp');
                    }
    
                    standPos = pagePos;

                });

            });

            $(this).off('touchend').on('touchend', function() {
                scrollPrevented = false;

                console.log(standPos);

            });
    
        });


    });

    



    


});