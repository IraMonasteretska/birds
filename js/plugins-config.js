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

//end slick slider - two-block

// start scroll animation - first
if(document.querySelector('.first-sections-scroll')){
var controller = new ScrollMagic.Controller();

var horizontalSlide = new TimelineMax()
  .to(".first-sections-scroll", 1, { x: "-20%" })
  .to(".first-sections-scroll", 1, { x: "-40%" })
  .to(".first-sections-scroll", 1, { x: "-60%" })
  .to(".first-sections-scroll", 1, { x: "-80%" })

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
}
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

// end scroll animation - first

// start scroll animation - two
if(document.querySelector('.two-sections-scroll')){
var controller = new ScrollMagic.Controller();

var horizontalSlide = new TimelineMax()
  .to(".two-sections-scroll", 1, { x: "-20%" })
  .to(".two-sections-scroll", 1, { x: "-40%" })
  .to(".two-sections-scroll", 1, { x: "-60%" })
  .to(".two-sections-scroll", 1, { x: "-80%" })

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
sections.style.width = section[0].offsetWidth * section.length + 'px'
}
// end scroll animation - two