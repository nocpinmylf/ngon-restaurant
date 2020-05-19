const collapseBTN = document.getElementById('collaspe-btn');
const headerNavContent = document.getElementsByClassName('nav')[0];
const headerNav = document.querySelector('.header-nav');

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    items:1,
    center: true,
    margin:0,
    lazyLoad:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,

  });
});

collapseBTN.addEventListener('click', () => {
  headerNavContent.classList.toggle('hide');
  collapseBTN.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 1) {
    headerNav.classList.add('show');
    document.querySelector('.logo').classList.add('trig')
  }

  else {
    headerNav.classList.remove('show');
    document.querySelector('.logo').classList.remove('trig')
  }
})

//search
document.querySelector('.search-icon').addEventListener('click', () => {

  document.querySelector('.search-form').classList.remove('hide');
  document.querySelector('.search-icon').classList.add('hide');
});

document.getElementById('search-txt').addEventListener('blur', () => {
  document.querySelector('.search-form').classList.add('hide');
  document.querySelector('.search-icon').classList.remove('hide');
})