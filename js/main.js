$(function () {



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
        breakpoint: 1301,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 361,
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
        breakpoint: 361,
        settings: {
          slidesToShow: 1
        }
      },
    ],
  });

  $('.close__burger').on('click', function () {
    $('.burger__menu').removeClass('active');
  })


});
const burgerMenu = document.querySelector('.media__menu');
const headerMenu = document.querySelector('.burger__menu');

burgerMenu.addEventListener('click', function () {
  headerMenu.classList.toggle('active');
})