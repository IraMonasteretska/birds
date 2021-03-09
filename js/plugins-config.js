var controller = new ScrollMagic.Controller();
// start slick slider - welcome block
$(".welcome__slider-left").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 7000,
  cssEase: "linear",
  infinite: true,
  vertical: true,
  arrows: false,
});
$(".welcome__slider-right").slick({
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 7000,
  cssEase: "linear",
  infinite: true,
  vertical: true,
  arrows: false,
});

$(".welcome__slider-left, .welcome__slider-right").on("mouseover", function () {
  $(".welcome__slider-right").slick("pause");
  $(".welcome__slider-left").slick("pause");
});
$(".welcome__slider-left, .welcome__slider-right").on("mouseout", function () {
  $(".welcome__slider-right").slick("play");
  $(".welcome__slider-left").slick("play");
});

// end slick slider - welcome block

// start slick slider - two-block
if (document.querySelector('.two-block__slider')) {
  $(".two-block__slider").slick({
    slidesToShow: 1,
    speed: 1000,
    infinite: true,
    arrows: true,
    focusOnSelect: false,
    prevArrow: '<div class="slick-prev slick-arrow">Prev</div>',
  });

  let currentSlide;
  const updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(".two-block__slider-current-slide").text("0" + currentSlide + '.');
  };

  $(".two-block__slider").on("init", function (event, slick) {
    updateSliderCounter(slick);
  });

  $(".two-block__slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    }
  );
}
//end slick slider - two-block

// start scroll animation - first
if (document.querySelector('.first-sections-scroll')) {
  if (window.matchMedia("(min-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".first-sections-scroll", 1, { x: "-80%" })
  }
  else if (window.matchMedia("(max-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".first-sections-scroll", 1, { x: "-90%" })
  }
  else if (window.matchMedia("(max-width: 400px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".first-sections-scroll", 1, { x: "-100%" })
  }
  new ScrollMagic.Scene({
    triggerElement: ".first-wrapper-scroll",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin(".first-wrapper-scroll")
    .setTween(horizontalSlide)
    .addTo(controller);

  let sections = document.querySelector('.first-sections-scroll')
  let section = document.querySelectorAll('.section-scroll')


  sections.style.width = section[0].offsetWidth * section.length + 'px'
  // if (window.matchMedia("(min-width: 700px)").matches) {
  //   sections.style.width = section[0].offsetWidth * section.length + 400 + 'px'
  // }
  // else if (window.matchMedia("(max-width: 350px)").matches) {
  //   sections.style.width = section[0].offsetWidth * section.length + 100 + 'px'
  // }
  // else if (window.matchMedia("(max-width: 700px)").matches) {
  //   sections.style.width = section[0].offsetWidth * section.length + 'px'
  // }

  //show more text
  let sectionScrollContainer = document.querySelectorAll('.section-scroll__bot-cont')
  for (let i = 0; i < sectionScrollContainer.length; i++) {
    let button = sectionScrollContainer[i].querySelector('.section-scroll__view-more-btn')
    let text = sectionScrollContainer[i].querySelector('.section-scroll__text.hidden')
    let btnCont = sectionScrollContainer[i].querySelector('.section-scroll__btn-cont')

    button.addEventListener('click', () => {
      text.classList.remove('hidden')
      text.classList.add('visible')
      button.classList.add('hidden')
      btnCont.classList.add('hidden')
    })
  }

}
// end scroll animation - first

// start scroll animation - two
if (document.querySelector('.two-sections-scroll')) {
  if (window.matchMedia("(min-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".two-sections-scroll", 1, { x: "-80%" })
  }
  else if (window.matchMedia("(max-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".two-sections-scroll", 1, { x: "-90%" })
  }
  else if (window.matchMedia("(max-width: 450px)").matches) {
    var horizontalSlide = new TimelineMax()
      .to(".two-sections-scroll", 1, { x: "-100%" })
  }



  new ScrollMagic.Scene({
    triggerElement: ".two-wrapper-scroll",
    triggerHook: "onLeave",
    duration: "400%"
  })
    .setPin(".two-wrapper-scroll")
    .setTween(horizontalSlide)
    .addTo(controller);

  let sections = document.querySelector('.two-sections-scroll')
  let section = document.querySelectorAll('.section-scroll-two')
  if (window.matchMedia("(min-width: 1000px)").matches) {
    sections.style.width = section[0].offsetWidth * section.length - 600 + 'px'
  }
  else if (window.matchMedia("(max-width: 1000px)").matches) {
    sections.style.width = section[0].offsetWidth * section.length + 'px'
  }

  if (document.querySelector('.about-croll-wrapper')) {
    if (window.matchMedia("(min-width: 1000px)").matches) {
      sections.style.width = section[0].offsetWidth * section.length - 100 + 'px'
    }
    else if (window.matchMedia("(max-width: 400px)").matches) {
      sections.style.width = section[0].offsetWidth * section.length + 100 + 'px'
    }
  }
}
// end scroll animation - two


// horiontal block animation
var scene = new ScrollMagic.Scene({
  triggerElement: '.horizontal-block__right-cont',
  triggerHook: 'onEnter'
})
  .setTween('.horizontal-block__right', .4, { height: '100%', delay: .3 }, { duration: 10 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.horizontal-block__right-cont',
  triggerHook: 'onEnter'
})
  .setTween('.horizontal-block__animation-blok', .4, { height: '100%' }, { duration: 50 })
  .addTo(controller);


var scene = new ScrollMagic.Scene({
  triggerElement: '.horizontal-block__left-cont',
  triggerHook: 'onEnter'
})
  .setTween('.horizontal-block__left', .4, { height: '100%', delay: .3 }, { duration: 10 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.horizontal-block__left-cont',
  triggerHook: 'onEnter'
})
  .setTween('.horizontal-block__animation-blok-left', .4, { height: '100%' }, { duration: 50 })
  .addTo(controller);

// pre-scroll block animation
var scene = new ScrollMagic.Scene({
  triggerElement: '.pre-scroll__left-first',
  triggerHook: 'onEnter'
})
  .setTween('.pre-scroll__img-first', .4, { height: '100%', delay: .3 }, { duration: 500 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.pre-scroll__left-first',
  triggerHook: 'onEnter'
})
  .setTween('.pre-scroll__block-first', .4, { height: '100%' }, { duration: 500 })
  .addTo(controller);


// pre-scroll two block animation
var scene = new ScrollMagic.Scene({
  triggerElement: '.pre-scroll__left-two',
  triggerHook: 'onEnter'
})
  .setTween('.pre-scroll__img-two', .4, { height: '100%', delay: .3 }, { duration: 500 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.pre-scroll__left-two',
  triggerHook: 'onEnter'
})
  .setTween('.pre-scroll__block-two', .4, { height: '100%' }, { duration: 500 })
  .addTo(controller);


// our-concept block animation
var scene = new ScrollMagic.Scene({
  triggerElement: '.our-concept__quadro-first',
  triggerHook: 'onEnter'
})
  .setTween('.our-concept__quadro-img', .4, { height: '100%', delay: .3 }, { duration: 500 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.our-concept__quadro-first',
  triggerHook: 'onEnter'
})
  .setTween('.image__animation-block-quadro-first', .4, { height: '100%' }, { duration: 500 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.our-concept__quadro-first',
  triggerHook: 'onEnter'
})
  .setTween('.our-concept__quadro-gradient', .4, { height: '100%', delay: .3 }, { duration: 500 })
  .addTo(controller);

// footer block animation
var scene = new ScrollMagic.Scene({
  triggerElement: '.footer__right',
  triggerHook: 'onEnter'
})
  .setTween('.footer__img', .4, { height: '100%', delay: .3 }, { duration: 500 })
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: '.footer__right',
  triggerHook: 'onEnter'
})
  .setTween('.image__animation-block-footer', .4, { height: '100%' }, { duration: 500 })
  .addTo(controller);


// start slick slider - blog
$(".slider-blog__slider").slick({
  slidesToShow: 1,
  speed: 1000,
  infinite: true,
  arrows: true,
  focusOnSelect: false,
  prevArrow: '<div class="slick-prev slick-arrow">Prev</div>',
});
// end slick slider - blog

// start slick slider - about
$(".about-main__slider").slick({
  slidesToShow: 1,
  speed: 1000,
  infinite: true,
  arrows: true,
  focusOnSelect: false,
  prevArrow: '<div class="slick-prev slick-arrow">Prev</div>',
  nextArrow: '<div class="slick-next slick-arrow">Next</div>',
  vertical: true,
  autoplay: true
});
// end slick slider - about


//start slick slider - services
if (document.querySelector('.services-slider__slider')) {
  // start slick slider - services
  $(".services-slider__slider").slick({
    slidesToShow: 1,
    speed: 1000,
    infinite: true,
    arrows: true,
    focusOnSelect: false,
    prevArrow: '<div class="slick-prev slick-arrow">Prev</div>',
    nextArrow: '<div class="slick-next slick-arrow">Next</div>',
  });

  let currentSlide;
  const updateSliderCounter = function (slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    $(".services-slider__conter").text("0" + currentSlide + '.');
  };

  $(".services-slider__slider").on("init", function (event, slick) {
    updateSliderCounter(slick);
  });

  $(".services-slider__slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    }
  );
}
//end slick slider - services