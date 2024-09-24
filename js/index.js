$(document).ready(function () {

    const html = document.querySelector('html'),
          body = document.querySelector('body');

    const toggleMenu = (event, item) => {
      $(item).toggleClass('is-active');
      $('html').toggleClass('add-overflow');
      $('.overflow').toggleClass('active');
      $('.header nav').toggleClass('active-menu');
    }
  
    $('#menu_btn').on('click', function (event) {
      event.preventDefault();
  
      toggleMenu(event, $('#menu_btn'));
    });
  
    if (window.innerWidth <= 600) {
          $('.header__wrapper a').each(function () {
              $(this).on('click', function (event) {
                  toggleMenu(event, $('#menu_btn'));
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
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        },
      });
    } 
    
    $('#year').text(new Date().getFullYear());
});
