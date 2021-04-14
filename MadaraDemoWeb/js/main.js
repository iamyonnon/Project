
/* Hamburger Animation */
(function($) {    
    $('.hamburger').on('click', function() {
       if($(this).hasClass('active-in')) {
          $(this).removeClass('active-in');
          $(this).addClass('active-out');
       } 
         else {
          $(this).removeClass('active-out');
          $(this).addClass('active-in');
       }
    });
 })(jQuery);



/* Preloader */
$(window).on('load', function() {
    if($('.cover').length){
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 2000, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});


/* Back to Top */
var btn = document.getElementById('back-to-top');
window.onscroll = function() {
    scrollFunction();
}
function scrollFunction() {
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = 'flex';
    }
    else {
        btn.style.display = 'none';
    }
}

function clickToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}