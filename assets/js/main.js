// client Slick Slider

$('.client-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 0,
  speed: 7000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

// client Slick Slider

$('.slide-book').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".slick-left"),
  nextArrow: $(".slick-right"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  ]
});
$('.testimonial-slide').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".slick-left"),
  nextArrow: $(".slick-right"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }

  ]
});


// Get Quote Form validation

(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();


$(document).ready(function () {
  $('.navdesktop').hover(
    function () {
      $(this).addClass('show');
      $(this).find('.dropdown-navdesktop').first().addClass('show');
    },
    function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-navdesktop').first().removeClass('show');
    }
  );
});

// Sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// end Sticky header



