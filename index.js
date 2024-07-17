const hamburgerBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close');
const links = document.querySelector('.links')
const overlay = document.querySelector('.backdrop');

hamburgerBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
    closeBtn.classList.toggle('hidden');
    hamburgerBtn.classList.toggle('hidden');
    overlay.classList.remove('hidden')
});

closeBtn.addEventListener('click', ()=>{
    links.classList.toggle("show-links");
    closeBtn.classList.toggle('hidden')
    hamburgerBtn.classList.remove('hidden');
    overlay.classList.add('hidden')
})  