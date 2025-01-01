const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.primary-navigation');
const content = document.querySelector('.content-intro');

menuToggle.addEventListener('click', () => {
  const isOpened = menuToggle.getAttribute('aria-expanded') === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute('aria-expanded', "true");
  siteNavigation.setAttribute('data-state', "opened");
  content.style.display ='none';
 
}
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', "false");
  siteNavigation.setAttribute('data-state', "closing");
  content.style.display ='block';


  siteNavigation.addEventListener('animationend', () => {
    siteNavigation.setAttribute('data-state', "closed");
  }, {once: true})
}