// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll > 0) {
//         $("#topBar").addClass("darkHeader");
//     } else {
//         $("#topBar").removeClass("darkHeader");
//     }
// });
jQuery(document).ready(function($) {
    $('.fadeOut').owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    loop: true,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 3000,
    });
    $('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450
    });
});
//
$(document).ready(function(){
$("#cancel_edit").click(function(){
  document.getElementById('form_seacrh_top').style.display = 'block'; 
  document.getElementById('form_seacrh_top').style.zIndex = '1000'
});
}); 

// if ($('.footer_home_big').length) {
//   var scrollTrigger = 500, // px
//       backToTop = function () {
//           var scrollTop = $(window).scrollTop();
//           if (scrollTop > scrollTrigger) {
//               $('#back-to-top').addClass("show_back");
//           } else {
//               $('#back-to-top').removeClass("show_back");
//           }
//       };
//   backToTop();
//   $(window).on('scroll', function () {
//       backToTop();
//   });
//   $('#back-to-top').on('click', function (e) {
//       e.preventDefault();
//       $('html,body').animate({
//           scrollTop: 0
//       }, 2000);
//   });
// } 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#back-to-top').fadeIn(); 
            $('.fa-chevron-up').addClass("animated slideInDown");
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
    $('#back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
//
// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//    if (scroll > 0) {
//     $("#text_slider").addClass("slideInLeft");
//    }
//    else {
//             $("#text_slider").removeClass("slideInLeft");
//         }
// });


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        // $('#text_show_fade').each(function(i){
            
        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
            
        //     /* If the object is completely visible in the window, fade it it */
        //     if( bottom_of_window > bottom_of_object ){
                
        //            $(".text_slide").animate({opacity:1});
        //             $(".text_slide").addClass("animated slideInLeft");
                    
        //     }
        // }); 
        $('#text_show_fade_02').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                    
                $(".list_detail_event").animate({opacity:1});
                    $(".list_detail_event").addClass("animated slideInLeft");
            }
        }); 
        $('.show_name').each(function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if ( bottom_of_window > bottom_of_object-500 ){
                
                    
                $(".show_name").animate({opacity:1});
                    $(".show_name").addClass("animated slideInRight");
            }
        }); 
    });
    
});
///meu
// $(document).ready(function(){
//     // Requires jQuery

// $(document).on('click','.js-menu_toggle.closed',function(e){
// 	e.preventDefault(); $('.list_load, .list_item').stop();
// 	$(this).removeClass('closed').addClass('opened');

// 	$('.side_menu').css({ 'left':'0px' });

// 	var count = $('.list_item').length;
// 	$('.list_load').slideDown( (count*.6)*100 );
// 	$('.list_item').each(function(i){
// 		var thisLI = $(this);
// 		timeOut = 100*i;
// 		setTimeout(function(){
// 			thisLI.css({
// 				'opacity':'1',
// 				'margin-left':'0'
// 			});
// 		},100*i);
// 	});
// });

// $(document).on('click','.js-menu_toggle.opened',function(e){
// 	e.preventDefault(); $('.list_load, .list_item').stop();
// 	$(this).removeClass('opened').addClass('closed');

// 	$('.side_menu').css({ 'left':'-250px' });

// 	var count = $('.list_item').length;
// 	$('.list_item').css({
// 		'opacity':'0',
// 		'margin-left':'-20px'
// 	});
// 	$('.list_load').slideUp(300);
// });    
// });