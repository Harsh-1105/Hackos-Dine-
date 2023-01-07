const btn = docment.getElementById('menu-btn')
const nav =  document.getElementById('menu')


btn.addEventListener('click',() => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})
setTimeout(function(){
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');
    
    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
}, 3000);
