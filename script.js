
$(function () {

  //nav
  document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.nav');
    window.addEventListener('scroll', function (e) {
      lastScrollPosition = window.scrollY;

      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-effect');
      else
        navbar.classList.remove('navbar-effect');
    });
  }

  //scroll down button
  $(document).ready(function () {
    $("#scroll-down-animation").click(function () {
      $('html,body').animate({
        scrollTop: $("#about").offset().top
      },
        'slow');
    });
  });

  //scroll
  AOS.init({
    easing: 'ease-out-back',
    duration: 1200
  });

  //section 위치이동
  let section = document.querySelectorAll("section");
  let menu = document.querySelectorAll(".nav ul li a");

  window.onscroll = () => {
    section.forEach((i) => {
      let top = window.scrollY;
      let offset = i.offsetTop - 150;
      let height = i.offsetHeight;
      let id = i.getAttribute("id");

      if (top >= offset && top < offset + height) {
        menu.forEach((link) => {
          link.classList.remove("nav_active");
          document
            .querySelector(".nav ul li a[href*=" + id + "]")
            .classList.add("nav_active");
        });
      }
    });
  };

  //top btn
  var btn = $('#top-btn');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

});




