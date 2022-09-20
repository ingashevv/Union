$(function(){
    
    prevArrow: $('.prev');
    nextArrow: $('.next');

    prevArrow: $('.prev-arrow');
    nextArrow: $('.next-arrow');

    $('.suppliers__slider ul').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 2
              }
            },
          ],
    });

    $('.reviews__slider ul').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow'),
        responsive: [
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1
              }
            },
          ],
    });

});