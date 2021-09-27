(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-mobmenu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobmenu-close]'),
    mobilemenu: document.querySelector('[data-mobmenu]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobilemenu.classList.toggle('is-hidden');
  }
})();