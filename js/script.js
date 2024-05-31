document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const navbar = document.querySelector('nav.navbar');
  
  menu.addEventListener('click', function() {
    navbar.classList.toggle('nav-toggle');
    menu.classList.toggle('fa-bars');
    menu.classList.toggle('fa-times');
  });
});
