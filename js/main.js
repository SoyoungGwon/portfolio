new WOW().init();
       
// 스크롤했을때 메뉴가 바뀌도록
$(window).scroll(function() {
var scrollTop = $(this).scrollTop();
var scrollBottom = scrollTop + $(this).height();

var nav = $('.nav');
var top = $('.top');

if(scrollTop >= 80){
    nav.addClass('white');
    top.removeClass('hide').addClass('block');
}else{
    nav.removeClass('white');
    top.removeClass('block').addClass('hide');
} 

// 스크롤에 맞춰 원형 도형 확대 후 축소
var dot = $('.dot');

dot.each(function(){
    var dotTop = $(this).offset().top;
    if(dotTop+150 <= scrollBottom){
        $(this).addClass('dot-ani');
    }
})

// 스크롤에 맞춰 세로선 그리기    
var line = $('.line');
line.each(function(){
    var lineTop = $(this).offset().top;
    if(lineTop+200 <= scrollBottom){
        $(this).addClass('lineheight');
    }
})


// PC화면 상태일때 포트폴리오 부분 두파트로 나뉘어서 나타남
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
 
// top 버튼 클릭시 스크롤 애니메이션
$('.top').click(function(){
    $('html, body').animate({scrollTop: $('#header').offset().top}, 1200, 'easeInOutQuart');
    return false;
});

// 메뉴 클릭시 스크롤 애니메이션
$('.nav a').click(function(){
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1200, 'easeInOutQuart');
    return false;
});


// 헤더부분 자동 슬라이드
var swiper = new Swiper('.header-swiper', {
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  }
});


// 포트폴리오 사이트 링크 연결
$('.button_base').click(function(){
    var getUrl = $(this).attr('data-url');
    
    if($(this).hasClass('btn2')){
        window.open(getUrl,'width=300, height=600');
    }else if($(this).hasClass('btn3')){
        
    }else{
        window.open(getUrl);
    }
})


// 모바일화면에서 메뉴바 눌렀을때 설정
$('.phone-nav img').click(function(){
    $('.phone-sub').slideToggle();
})

$('.gohome').click(function(){
    $('.phone-sub').slideUp();
})

$('.phone-sub a').click(function(){
    $('.phone-sub').slideUp();
})


// 리사이징시 가로 화면 크기에 따라 적용되는 화면 변화

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
    var ctext = $('.row3 .c-text p');
    ctext.addClass('plus');
}


// 리사이즈가 완료 됐을 시에만 함수 호출

$(window).resize(function() {
    if(this.resizeTO) {
        clearTimeout(this.resizeTO);
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
});


$(window).on('resizeEnd', function() {
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
        var ctext = $('.row3 .c-text p');
        ctext.addClass('plus');
    }

});


var swiper = new Swiper('.card-swiper',{
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        940:{
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
})


