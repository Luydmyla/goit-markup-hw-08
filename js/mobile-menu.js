(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-mobmodal-open]'),
    closeMobileMenuBtn: document.querySelector('[data-mobmodal-close]'),
    mobilemenu: document.querySelector('[data-mobmodal]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleModal() {
    refs.mobilemenu.classList.toggle('is-hidden');
  }
})();