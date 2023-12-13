// ===================== Show Menu ========================================
const menu = document.getElementById('menu'),
      toggleOpen = document.getElementById('toggle-open'),
      toggleClose = document.getElementById('toggle-close');

toggleOpen.addEventListener('click', () => menu.classList.add('show-menu'));
toggleClose.addEventListener('click', () => menu.classList.remove('show-menu'));