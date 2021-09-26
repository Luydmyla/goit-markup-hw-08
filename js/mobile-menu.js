(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector('[data-modal-open]'),
    closeMobileMenuBtn: document.querySelector('[data-modal-close]'),
    mobilemenu: document.querySelector('[data-modal]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleModal() {
    refs.mobilemenu.classList.toggle('is-hidden');
  }
})();