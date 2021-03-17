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
if (document.querySelector(".two-block__slider")) {
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
    $(".two-block__slider-current-slide").text("0" + currentSlide + ".");
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
if (document.querySelector(".first-sections-scroll")) {
  if (window.matchMedia("(min-width: 1780px)").matches) {
    var horizontalSlide = new TimelineMax().to(".first-sections-scroll", 1, {
      x: "-25%",
    });
  } else if (window.matchMedia("(max-width: 1360px)").matches) {
    var horizontalSlide = new TimelineMax().to(".first-sections-scroll", 1, {
      x: "-60%",
    });
  } else if (window.matchMedia("(max-width: 1780px)").matches) {
    var horizontalSlide = new TimelineMax().to(".first-sections-scroll", 1, {
      x: "-40%",
    });
  }

  if (window.matchMedia("(min-width: 1780px)").matches) {
    new ScrollMagic.Scene({
      triggerElement: ".first-wrapper-scroll",
      triggerHook: "onLeave",
      duration: "170%",
    })
      .setPin(".first-wrapper-scroll")
      .setTween(horizontalSlide)
      .addTo(controller);
  }else if (window.matchMedia("(max-width: 1780px)").matches) {
    new ScrollMagic.Scene({
      triggerElement: ".first-wrapper-scroll",
      triggerHook: "onLeave",
      duration: "100%",
    })
      .setPin(".first-wrapper-scroll")
      .setTween(horizontalSlide)
      .addTo(controller);
  }


  let sections = document.querySelector(".first-sections-scroll");
  let section = document.querySelectorAll(".section-scroll");
  sections.style.width = section[0].offsetWidth * section.length + "px";

  //show more text
  let sectionScrollContainer = document.querySelectorAll(
    ".section-scroll__bot-cont"
  );
  for (let i = 0; i < sectionScrollContainer.length; i++) {
    let button = sectionScrollContainer[i].querySelector(
      ".section-scroll__view-more-btn"
    );
    let text = sectionScrollContainer[i].querySelector(
      ".section-scroll__text.hidden"
    );
    let btnCont = sectionScrollContainer[i].querySelector(
      ".section-scroll__btn-cont"
    );

    button.addEventListener("click", () => {
      text.classList.remove("hidden");
      text.classList.add("visible");
      button.classList.add("hidden");
      btnCont.classList.add("hidden");
    });
  }
}
// end scroll animation - first

// start scroll animation - two
if (document.querySelector(".two-sections-scroll")) {
  if (window.matchMedia("(min-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax().to(".two-sections-scroll", 1, {
      x: "-80%",
    });
  } else if (window.matchMedia("(max-width: 700px)").matches) {
    var horizontalSlide = new TimelineMax().to(".two-sections-scroll", 1, {
      x: "-90%",
    });
  } else if (window.matchMedia("(max-width: 450px)").matches) {
    var horizontalSlide = new TimelineMax().to(".two-sections-scroll", 1, {
      x: "-100%",
    });
  }

  new ScrollMagic.Scene({
    triggerElement: ".two-wrapper-scroll",
    triggerHook: "onLeave",
    duration: "400%",
  })
    .setPin(".two-wrapper-scroll")
    .setTween(horizontalSlide)
    .addTo(controller);

  let sections = document.querySelector(".two-sections-scroll");
  let section = document.querySelectorAll(".section-scroll-two");
  if (window.matchMedia("(min-width: 1000px)").matches) {
    sections.style.width = section[0].offsetWidth * section.length - 600 + "px";
  } else if (window.matchMedia("(max-width: 1000px)").matches) {
    sections.style.width = section[0].offsetWidth * section.length + "px";
  }

  if (document.querySelector(".about-croll-wrapper")) {
    if (window.matchMedia("(min-width: 1000px)").matches) {
      sections.style.width =
        section[0].offsetWidth * section.length - 100 + "px";
    } else if (window.matchMedia("(max-width: 400px)").matches) {
      sections.style.width =
        section[0].offsetWidth * section.length + 100 + "px";
    }
  }
}
// end scroll animation - two

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
  autoplay: true,
});
// end slick slider - about

//start slick slider - services
if (document.querySelector(".services-slider__slider")) {
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
    $(".services-slider__conter").text("0" + currentSlide + ".");
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

// start services animation
const getEnterText = () => {
  function setupTypewriter(t) {
    var HTML = t.innerHTML;
    t.innerHTML = "";
    var cursorPosition = 0,
      typeSpeed = 100,
      tempTypeSpeed = 0;

    var type = function () {
      tempTypeSpeed = Math.random() * typeSpeed + 50;
      t.innerHTML += HTML[cursorPosition];
      cursorPosition += 1;
      if (cursorPosition < HTML.length) {
        setTimeout(type, tempTypeSpeed);
      }
      if (cursorPosition == HTML.length) {
        document.querySelector(".anim-services__bot").classList.add("active");
        setTimeout(() => {
          document
            .querySelector(".anim-services__bottom-cvg")
            .classList.add("active");
        }, 500);
      }
    };

    return {
      type: type,
    };
  }

  var typewriter = document.getElementById("typewriter");
  typewriter = setupTypewriter(typewriter);
  typewriter.type();
};

const getResetText = () => {
  document
    .querySelector(".anim-services__bottom-cvg")
    .classList.remove("active");
  document.querySelector(".anim-services__bot").classList.remove("active");
};

new ScrollMagic.Scene({
  triggerElement: ".anim-services__anim-container",
  triggerHook: "onEnter",
})
  .setTween(
    ".anim-services__anim-container",
    0.8,
    { opacity: "1", transform: "translateX(40px)" },
    { duration: 500 }
  )
  .addTo(controller)
  .on("enter", () => {
    getEnterText();
  })
  .on("leave", () => {
    getResetText();
  });

// end services animation
