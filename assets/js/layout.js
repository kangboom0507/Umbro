$(function(){
    //스크롤내릴때 header 올라가기
    $(window).scroll(function(){
        curr = $(window).scrollTop(); 

        if (curr > 0) {
            $(".header-area").addClass('top');
        } else {
            $('.header-area').removeClass('top');
        }
    })

    //ad-top
    var swiper = new Swiper(".ad-top", {
        loop:true,
        effect:'fade',
        
        autoplay: {                
            delay:3000,
            disableOnInteraction: false,
          },
    });

    //gnb-item
    $('.gnb-item').hover(function(e){
        e.preventDefault();
       
        $(this).find('.tops-wrap').show();
      },function(){
        $(this).find('.tops-wrap').hide();
      })

    //sub-menu
    $('.gnb-wrap').click(function(e){
        e.preventDefault();

        $('.sub-menu-wrap').toggleClass('on');
    })  

})
