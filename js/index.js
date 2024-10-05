$(document).ready(function () {

  const html = document.querySelector('html'),
        body = document.querySelector('body');

  const hidePreloader = () => {
      html.classList.remove('hide');
      setTimeout(function () {
          html.classList.add('hide');
      }, 1000);
  };
    
  hidePreloader();

  const offset = 80;

  $(window).on('load scroll', function () {
    $(window).scrollTop() > offset
      ? $('.header').addClass('scrolled')
      : $('.header').removeClass('scrolled');
  });

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

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.lang__switcher, .switcher').length) {
        $('.switcher').removeClass('active');
    }
  });
  
  $('.lang__switcher').on('click', function (event) {
      $('.switcher').toggleClass('active');
  });

  if(body.classList.contains('main')){
    const swiper = new Swiper('.swiper', {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } 
  
  $('#year').text(new Date().getFullYear());

  emailjs.init("vGKd-Oz9FR5RoAysh");

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Отримуємо всі поля
    const firstName = document.querySelector('input[name="firstName"]').value.trim();
    const lastName = document.querySelector('input[name="lastName"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();
    const company = document.querySelector('input[name="company"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const country = document.querySelector('input[name="country"]').value.trim();

    // Перевірка, чи не порожні обов'язкові поля
    if (!firstName || !lastName || !phone || !email) {
       alert('Будь ласка, заповніть всі обов\'язкові поля!');
       return;
    }

    // Відправка даних через email.js
    emailjs.sendForm('service_idvstcl', 'template_7b9e1nz', this)
       .then(function() {
          // alert('Повідомлення відправлено успішно!');
          document.getElementById('contact-form').reset();
       }, function(error) {
          alert('Сталася помилка: ' + JSON.stringify(error));
       });
  });
});