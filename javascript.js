document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');
  const authButtons = document.querySelector('.auth-buttons');

  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
    authButtons.classList.toggle('active');

    // Update aria-expanded for accessibility
    const expanded = menu.classList.contains('active');
    menu.setAttribute('aria-expanded', expanded);
  });

  // Optional: allow keyboard toggle for accessibility
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      menu.click();
    }
  });
});
