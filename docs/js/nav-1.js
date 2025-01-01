const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');
const intro = document.querySelector('.intro');

menuToggle.addEventListener('click', () => {
  const isOpened = menuToggle.getAttribute('aria-expanded') === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute('aria-expanded', "true");
  sidebar.setAttribute('data-state', "opened");
  intro.style.display ='none';
 
}
function closeMenu() {
  btn.setAttribute('aria-expanded', "false");
  sidebar.setAttribute('data-state', "closing");
  intro.style.display ='block';


  sidebar.addEventListener('animationend', () => {
    sidebar.setAttribute('data-state', "closed");
  }, {once: true})
}