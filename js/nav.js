document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('nav-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile menu after a link inside it is chosen.
  menu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && window.innerWidth <= 768) {
      menu.classList.remove('nav-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
