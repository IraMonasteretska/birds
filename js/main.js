let headerMenu = document.querySelector('.header__menu')
let burger = document.querySelector('.burger__container')
let header = document.querySelector('.header')


burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  headerMenu.classList.toggle('active')
  header.classList.toggle('active')
})

let headerMenuItem = document.querySelectorAll('.header__menu li a')
for( let i of headerMenuItem){
  i.addEventListener('click', () => {
    burger.classList.remove('active')
    headerMenu.classList.remove('active')
    header.classList.remove('active')
  })
}

// view more text
if(document.querySelector('.three-block__text')){
let viewMoreBtn = document.querySelector('.three-block__view-more')
let viewMoreText = document.querySelector('.three-block__text.hidden')
viewMoreBtn.addEventListener('click', () => {
  viewMoreBtn.classList.add('hidden')
  viewMoreText.classList.remove('hidden')
  viewMoreText.classList.add('visible')
})

}




