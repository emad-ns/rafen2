$(window).on('load', function() {
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });

    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-project',
            prevEl: '.swiper-button-prev-project',
          },
        mousewheel: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }
      });

    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next-client',
            prevEl: '.swiper-button-prev-client',
          },
        /* autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          }, */
        mousewheel: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }
      });
  });


  let vw = $(window).width()
  const offset1 = vw > 768 ? 350 : 350
  const offset2 = vw > 768 ? 250 : 250
  const offset3 = vw > 768 ? 250 : 250
  const offset4 = vw > 768 ? 350 : 350
  const offset6 = vw > 768 ? 500 : 350
  /* console.log(vw); */
  
    var $sec1 = $('#about');
   $sec1.waypoint(function(direction){
    if(direction == 'down'){
      $('.menuItem_about').css('color','rgb(199, 169, 72)')
  
      
    }else{
      $('.menuItem_about').css('color','#fff')
    }
  }, {offset: offset1})
  
  var $sec2 = $('#ourService');
   $sec2.waypoint(function(direction){
    if(direction == 'down'){
      $('.menuItem_about').css('color','#fff')
      $('.menuItem_service').css('color','rgb(199, 169, 72)')
    }else{
      $('.menuItem_about').css('color','rgb(199, 169, 72)')
      $('.menuItem_service').css('color','#fff')
    }
  }, {offset: offset2})
  
  var $sec3 = $('#ourClient_content');
   $sec3.waypoint(function(direction){
      if(direction == 'down'){
          $('.menuItem_service').css('color','#fff')
          $('.menuItem_client').css('color','rgb(199, 169, 72)')
        }else{
          $('.menuItem_service').css('color','rgb(199, 169, 72)')
          $('.menuItem_client').css('color','#fff')
        }
  }, {offset: offset3})
  
  var $sec4 = $('#ourProject');
   $sec4.waypoint(function(direction){
      if(direction == 'down'){
          $('.menuItem_client').css('color','#fff')
          $('.menuItem_projects').css('color','rgb(199, 169, 72)')
        }else{
          $('.menuItem_client').css('color','rgb(199, 169, 72)')
          $('.menuItem_projects').css('color','#fff')
        }
  }, {offset: offset3})
  
  var $footer = $('#contact');
   $footer.waypoint(function(direction){
      if(direction == 'down'){
          $('.menuItem_projects').css('color','#fff')
          $('.menuItem_contact').css('color','rgb(199, 169, 72)')
        }else{
          $('.menuItem_projects').css('color','rgb(199, 169, 72)')
          $('.menuItem_contact').css('color','#fff')
        }
  }, {offset: offset6})
  

 var vidHeader = document.getElementById("headerVideo");
$(document).ready(function() { 
  document.querySelector('.videoSound-icon').addEventListener('click',function(){
       
    if (document.querySelector('.videoSound-icon').classList.contains('unmute')){
      $('.unmuteIcon').fadeOut(0)
      $('.muteIcon').fadeIn(30)
      
      $('.videoSound-icon').removeClass('unmute')
      vidHeader.muted = true;

    }else{
      
      $('.muteIcon').fadeOut(0)
      $('.unmuteIcon').fadeIn(30)
      
      $('.videoSound-icon').addClass('unmute')
      vidHeader.muted = false;

    }

    
  })  

/*  
  document.querySelector('.videoPlay-icon').addEventListener('click',function(){
       
    if (document.querySelector('.videoPlay-icon').classList.contains('unPlayVid')){
      $('.played').fadeOut(0)
      $('.stopped').fadeIn(30)
      
      $('.videoPlay-icon').removeClass('unPlayVid')
      vidHeader.play(); 

    }else{
      
      $('.stopped').fadeOut(0)
      $('.played').fadeIn(30)
      
      $('.videoPlay-icon').addClass('unPlayVid')
      vidHeader.pause(); 

    }

    
  }) 
  */
 });