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

  window.addEventListener('load', function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

    if (window.scrollY>60) {
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      this.document.querySelector('#scroll-top').classList.remove('active');
    }
    
  })


  const slides = document.querySelectorAll('.img-slider, .img-slide');
  const slider = document.querySelector('.slider');
  let index = 0;

  function showSlide(i) {
    const newTransformValue = -100 * i + '%';
    slider.style.transform = `translateX(${newTransformValue})`;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  setInterval(nextSlide, 3000);

  showSlide(index);


  const dynamicText = document.getElementById('typing-text');
  const words = ["Abdi Malika", "Web Developer", "Backend Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1200);
    }
  }

  typeEffect();
});
