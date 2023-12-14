// ===================== Show Menu ========================================
const menu = document.getElementById('menu'),
      toggleOpen = document.getElementById('toggle-open'),
      toggleClose = document.getElementById('toggle-close');

toggleOpen.addEventListener('click', () => menu.classList.add('show-menu'));
toggleClose.addEventListener('click', () => menu.classList.remove('show-menu'));

// ===================== Show Education ========================================
const historyBtn = document.getElementById('history'),
      educationBtn = document.getElementById('education'),
      detailBody = document.getElementById('aboutMe-detail');

      historyBtn.addEventListener('click', () => detailBody.classList.remove('show-education'));
      educationBtn.addEventListener('click', () => detailBody.classList.add('show-education'));

