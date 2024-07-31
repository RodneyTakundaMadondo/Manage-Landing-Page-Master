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

  let email = document.getElementById("email-input");
  let formBtn = document.getElementById("form-button");
  let errorMsg = document.querySelector(".error-msg");


  
  function ValidateEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
      email.classList.remove("errorForm");
      errorMsg.classList.add("hidden")
      return true;
  
    } else {
  
      email.classList.add("errorForm");
      errorMsg.classList.remove("hidden")
  
      return false;
  
    }
  
  }
  email.addEventListener("input", ValidateEmail)
  formBtn.addEventListener("click", ()=>{
    ValidateEmail
    email.value ="";
  })