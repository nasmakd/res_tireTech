$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave', function(aa){
   if($(window).width() > 1169){   //pc(desktop) 상태
      if(aa.type == 'mouseenter'){
         $('.sub').stop().fadeIn();
         $('.sub_shadow').stop().slideDown();  
      }else{
         $('.sub').stop().fadeOut(300, function(){
            $(this).removeAttr('style');
         });
         $('.sub_shadow').stop().slideUp(300, function(){
            $(this).removeAttr('style');
         }); 
      }
   }
})
// mouseenter / mouseleave - 자식요소가 있다면 해당 자식요소 영역은 제외
// mouseover / mouseout - 자식요소가 있다면 해당 자식요소 영역까지 포함

// 모바일 - 메인메뉴 클릭시 서브메뉴 보임
const $mainBtn = $('.navbar_gnb > li > a');
$mainBtn.click(function(){
   if($(window).width() < 1170){    //mobile 상태
      if(!$(this).parents('li').hasClass('on')){
         $('.sub').slideUp(300);
         $('.navbar_gnb > li').removeClass('on');
         $(this).siblings('.sub').slideDown(500);
         $(this).parents('li').addClass('on');
      }else{
         $('.sub').slideUp(300);
         $('.navbar_gnb > li').removeClass('on');
      }
      
   }
   
});

// 모바일 상태에서 햄버거 버튼 클릭시 메뉴 나타남
$('.trigger').click(function(){
   $(this).toggleClass('open');
   if($(this).hasClass('open')){
      $('.gnb').animate({right: 0}, 500)
      $('header').animate({left: -250},500)
   }else{
      $('.gnb').animate({right: -250}, 500)
      $('header').animate({left: 0},500)
   }
})


$(window).resize(function(){
   if($(window).width() > 1169){
      $('.sub').removeAttr('style');
      $('.navbar_gnb > li').removeClass('on');
   }
});
