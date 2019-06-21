$(document).ready(function () {
    var cu = $("header");
    // menu
    $(window).scroll(function () { 
        var Yne = window.scrollY;
        if (Yne > 50) {
            cu.addClass('deo-biet-sai-fixed');
        } else {
            cu.removeClass('deo-biet-sai-fixed');
        }
    });
    // scroll to 
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    $('figure').each(function (index, element) {
        $(element).click(function (e) { 
            console.log($(this).find('img').attr('src'));
            console.log($(this).find('h3').text());
            console.log($(this).find('p').text());
        });
    });
});



// slider bacongu
var nguvc = $('.slider img');
var current = 0;
function updateSlide(current) {
    nguvc.removeClass('active');
    nguvc.eq(current).addClass('active')
}
function clickSlide() {
    if (current < nguvc.length - 1) {
        current++
        updateSlide(current);
    }
}
function clickPrev() {
    if (current > 0) {
        current--
    }
    updateSlide(current);
}
updateSlide(current)

  $(window).scroll(function () {

      /* Check the location of each desired element */
      $('.hide').each(function (i) {

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if (bottom_of_window > bottom_of_object) {

              $(this).animate({
                  'opacity': '1'
              }, 2000);

          }
      });
      
  });
  $('#scrollTop').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 750);
  });