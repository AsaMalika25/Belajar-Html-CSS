document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const navbar = document.querySelector('nav.navbar');

  if (menu && navbar) {
    menu.addEventListener('click', function() {
      navbar.classList.toggle('nav-toggle');
      menu.classList.toggle('fa-bars');
      menu.classList.toggle('fa-times');
    });
  }

  const slides = document.querySelectorAll('.img-slide');
  const slider = document.querySelector('.slider');
  let index = 0;

  function showSlide(i) {
    const totalSlides = slides.length;
    const newTransformValue = -100 * i + '%';
    slider.style.transform = `translateX(${newTransformValue})`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 3000);

  showSlide(index);
});
