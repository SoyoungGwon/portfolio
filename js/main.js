new WOW().init();
       
$(window).scroll(function() {
var scrollTop = $(this).scrollTop();
var scrollBottom = scrollTop + $(this).height();

var nav = $('.nav');
var top = $('.top');

if(scrollTop >= 80){
    nav.addClass('white');
    top.removeClass('hide').addClass('block');
}else{;
    nav.removeClass('white');
    top.removeClass('block').addClass('hide');
} 


var dot = $('.dot');

dot.each(function(){
    var dotTop = $(this).offset().top;
    if(dotTop+150 <= scrollBottom){
        $(this).addClass('dot-ani');
    }
})

var line = $('.line');
line.each(function(){
    var lineTop = $(this).offset().top;
    if(lineTop+200 <= scrollBottom){
        $(this).addClass('lineheight');
    }
})

//        var itemTitle = $('.item-title');
//        
//        itemTitle.each(function(){
//            var itemTitleTop = $(this).offset().top;
//            console.log(itemTitleTop);
//            if(itemTitleTop+250 < scrollBottom){
//                $(this).addClass('uptitle');
//            }else{
//                $(this).removeClass('uptitle');
//            }
//        })

    var row = $('.row');
    row.each(function(){
        var rowTop = $(this).offset().top;
        if(rowTop+150 <= scrollBottom){
            if($(this).hasClass('row1')){
                $(this).addClass('fadeleft');
            }else if($(this).hasClass('row2')){
                $(this).addClass('fadeRight');
            }else{
            }
        }
    })
});

$('.top').click(function(){
    $('html, body').animate({scrollTop: $('#header').offset().top}, 1200, 'easeInOutQuart');
    return false;
});

$('.nav a').click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200, 'easeInOutQuart');
    return false;
});

var swiper = new Swiper('.header-swiper', {
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  }
});

$('.button_base').click(function(){
    var getUrl = $(this).attr('data-url');
    
    if($(this).hasClass('btn2')){
        window.open(getUrl,'width=300, height=600');
    }else if($(this).hasClass('btn3')){
        
    }else{
        window.open(getUrl);
    }
})

$('.phone-nav img').click(function(){
    $('.phone-sub').slideToggle();
})

$('.gohome').click(function(){
    $('.phone-sub').slideUp();
})

$('.phone-sub a').click(function(){
    $('.phone-sub').slideUp();
})

$(window).ready(function(){
    var width = $(window).width();
    var row1 = $('.row1');
    var row2 = $('.row2');
    var row3 = $('.row3');
    var phoneNav = $('.phone-nav');
    var nav = $('.nav-container');
    
    if(width<1540){
        row1.removeClass('block').addClass('hide');
        row2.removeClass('block').addClass('hide');
        row3.removeClass('hide').addClass('block');
    }else{
        row1.removeClass('hide').addClass('block');
        row2.removeClass('hide').addClass('block');
        row3.removeClass('block').addClass('hide');
    }
    
    if(width<900){
        phoneNav.removeClass('hide').addClass('block white');
        nav.removeClass('block').addClass('hide');
    }else{
        nav.removeClass('hide').addClass('block');
        phoneNav.removeClass('block white').addClass('hide');
    }
    
    if(width < 1000){
          var swiper = new Swiper('.card-swiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
        
        var ctext = $('.row3 .c-text p');
        ctext.addClass('plus');
    }else{
          var swiper = new Swiper('.card-swiper', {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
    }
    $(window).resize(function(){
        location.reload();
        var width = $(window).width();
    
        if(width < 1040){
              var swiper = new Swiper('.card-swiper', {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
            
            var row3 = $('.row3');
            row3.addClass('plus');
            
        }else{
              var swiper = new Swiper('.card-swiper', {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            });
        }
    })    
})

