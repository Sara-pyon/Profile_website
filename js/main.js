import { websites } from "./websites.js";
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

// ===================== Portfolio Cards ========================================
const portfolioCards = document.getElementById('portfolio-cards');
let portfolioHTML =`<div class="swiper-wrapper">`;

websites.forEach(item => {
    portfolioHTML += `
    
    <div class="portfolio__card swiper-slide">
        <div class="portfolio__img">
            <img src="${item.image}" alt="website image">
            <div class="portfolio__git-div">
                <a target="_blank" href="${item.github}">
                <i class="ri-github-fill portfolio__git"></i>
                </a>
            </div>
        </div>
        <h3 class="portfolio__title">${item.title}</h3>
        <p class="portfolio__text">${item.text}</p>
        <button class="portfolio__btn">
            <a target="_blank" href="${item.url}">
                visit</a></button>
    </div>
    `
})
portfolioHTML += `</div> <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>`

portfolioCards.innerHTML = portfolioHTML;





// ===================== Portfolio Swiper ========================================
const swiperHome = new Swiper('.portfolio__swiper', {
    spaceBetween: 10,
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  });