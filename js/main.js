let headerMenu = document.querySelector('.header__menu')
let burger = document.querySelector('.burger__container')
let header = document.querySelector('.header')


burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active')
  header.classList.toggle('active')
})

let headerMenuItem = document.querySelectorAll('.header__menu li a')
for (let i of headerMenuItem) {
  i.addEventListener('click', () => {
    burger.classList.remove('active')
    headerMenu.classList.remove('active')
    header.classList.remove('active')
  })
}

// view more text
if (document.querySelector('.three-block__text')) {
  let viewMoreBtn = document.querySelector('.three-block__view-more')
  let viewMoreText = document.querySelector('.three-block__text.hidden')
  viewMoreBtn.addEventListener('click', () => {
    viewMoreBtn.classList.add('hidden')
    viewMoreText.classList.remove('hidden')
    viewMoreText.classList.add('visible')

  })
}


// start custom slect 
if (document.querySelector('.contact__form-select')) {
  let select = document.querySelector('.contact__form-select')
  let selectSvg = document.querySelector('.contact__svg')
  let selectSvg_ = document.querySelector('.contact__svg svg')
  let selectSvg__ = document.querySelector('.contact__svg path')
  let optionsCont = document.querySelector('.contact__select-options')


  //open select
  select.addEventListener('click', () => {
    optionsCont.classList.toggle('active')
    selectSvg.classList.toggle('active')
  })

  selectSvg.addEventListener('click', () => {
    optionsCont.classList.toggle('active')
    selectSvg.classList.toggle('active')
  })

  let option = document.querySelectorAll('.contact__select-option')
  for (let i of option) {
    i.addEventListener('click', e => {
      select.value = e.target.textContent
      optionsCont.classList.remove('active')
      selectSvg.classList.remove('active')
    })
  }
  document.addEventListener('click', e => {
    let target = e.target
    if (!target.classList.contains('contact__select-option') &&
      !target.classList.contains('contact__form-select') &&
      !target.classList.contains('contact__svg') &&
      target != selectSvg_ &&
      target != selectSvg__ )   {
          console.log(target);
      optionsCont.classList.remove('active')
      selectSvg.classList.remove('active')
    }
  })

}

// end custom slect 


// start move tooltipe
$('.tooltipLink').hover(function () {
  var title = $(this).attr('data-tooltip');
  $(this).data('tipText', title);
  if(title == ''){}
  else{
     $('<p class="tooltip"></p>').fadeIn(200).text(title).appendTo('body');
  }
}, function () {
  $(this).attr('data-tooltip', $(this).data('tipText'));
  $('.tooltip').fadeOut(200);
}).mousemove(function (e) {
  var mousex = e.pageX;
  var mousey = e.pageY;
  $('.tooltip').css({
      top: mousey,
      left: mousex,
      dispaly: 'flex'
  })
});
// end move tooltipe




