$(function(){
  
//visual
  gsap.from('.visual-box img',10,{
    scale:1.2,
  })
  gsap.to('.visual-box img',{
  
    scrollTrigger:{ 
      trigger:".visual-box",
      start:"left top", 
      end:"bottom top", 
      scrub:2,  
    },
    yPercent:20,
  })


//img-scroll 
  $('.img-scroll').each(function(){

    child = $(this).find('img');
    gsap.to(child,{

      scrollTrigger:{
        trigger:$(this),
        start:"top bottom",
        end:"bottom top",
        scrub:1,
      },
      yPercent:-15,
    })

  })


//new 
  var swiper = new Swiper(".new-wrap", {
    slidesPerView: 2,
    spaceBetween: 30,

    navigation: {
        nextEl: ".new-wrap .next",
        prevEl: ".new-wrap .prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 3.2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 50,
        }
      },
    })

    
  //best
  var swiper = new Swiper(".best-box",{
    slidesPerView: 2.3,
    spaceBetween:32,
  })



})
