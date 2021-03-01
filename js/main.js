feather.replace();

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50)
});
jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 50);
    })
});

// $(document).ready(function() {
//     $("html").niceScroll();
// });