const hamburgerBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close');
const links = document.querySelector('.links')
const overlay = document.querySelector('.backdrop');

hamburgerBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
    closeBtn.classList.toggle('hidden');
    hamburgerBtn.classList.toggle('hidden');
    overlay.classList.remove('hidden');
});

closeBtn.addEventListener('click', ()=>{
    links.classList.toggle("show-links");
    closeBtn.classList.toggle('hidden');
    hamburgerBtn.classList.remove('hidden');
    overlay.classList.add('hidden');
})  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      680:{
        slidesPerView:2,
        spaceBetween:30
      },
      900 :{
        slidesPerView:3,
        spaceBetween:30
      }
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  
  });