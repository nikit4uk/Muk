$(document).ready(function () {

    const html = document.querySelector('html'),
          body = document.querySelector('body');

    const toggleMenu = (event, item) => {
      $(item).toggleClass('is-active');
      $('html').toggleClass('add-overflow');
      $('.header nav').toggleClass('active-menu');
    }
  
    $('#js-hamburger').on('click', function (event) {
      event.preventDefault();
  
      toggleMenu(event, $('#js-hamburger'));
    });
  
    if (window.innerWidth <= 600) {
          $('.header__wrapper a').each(function () {
              $(this).on('click', function (event) {
                  toggleMenu(event, $('#js-hamburger'));
              });
          });
      }
  
    const offset = 80;
  
    $(window).on('load scroll', function () {
      $(window).scrollTop() > offset
        ? $('.header').addClass('scrolled')
        : $('.header').removeClass('scrolled');
    });
    
    const hidePreloader = () => {
        html.classList.remove('hide');
        setTimeout(function () {
            html.classList.add('hide');
        }, 1000);
    };
    
    hidePreloader();

    if(body.classList.contains('main')){
      const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    } 
    
    $('#year').text(new Date().getFullYear());
});
