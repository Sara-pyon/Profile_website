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

      educationBtn.addEventListener('click', () => detailBody.classList.remove('show-education'));
      historyBtn.addEventListener('click', () => detailBody.classList.add('show-education'));

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
        <a target="_blank" href="${item.url}" class='portfolio__link'>
            <button class="portfolio__btn">
                visit</button></a>
    </div>
    `
})
portfolioHTML += `</div> <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>`

portfolioCards.innerHTML = portfolioHTML;





// ===================== Portfolio Swiper ========================================
const swiperHome = new Swiper('.portfolio__swiper', {
    loop: 'true',
    spaceBetween: 15,
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1000: {
            slidesPerView: 2,
            centeredSlides: false,
        } 
    }
  });

// ===================== Header Shadow ========================================
const header = document.getElementById('header');

const headerScroll = () => {
    const aboutMe = document.getElementById('aboutMe'),
          aboutTop = aboutMe.offsetTop;
    window.scrollY >= aboutTop ? header.classList.add('header-shadow') :
                                 header.classList.remove('header-shadow');
}

window.addEventListener('scroll', headerScroll);

// ===================== link Active ========================================
const sections = document.querySelectorAll('.section');

const linkActive = () => {

    sections.forEach(current => {
        const currentHeight = current.offsetHeight,
              currentTop = current.offsetTop,
              currentId = current.getAttribute('id'),
              currentClass = document.querySelector('.header__menu a[href*=' + currentId + ']');
              if(window.scrollY >= currentTop && window.scrollY < currentTop + currentHeight){
                currentClass.classList.add('active-link');
              }else{
                currentClass.classList.remove('active-link');
              }
    })
}

window.addEventListener('scroll', linkActive);

// ===================== Scroll Up Btn ========================================

const scrollUp = () => {
    const scrollUp = document.getElementById('scrollUp');

    window.scrollY >= 30 ? scrollUp.classList.add('show-scrollUp') :
                    scrollUp.classList.remove('show-scrollUp');
}

window.addEventListener('scroll', scrollUp);

// ===================== Footer References ========================================

const references = document.querySelector('.footer__list'),
      reference = [{
        name: 'Takehisa Hasegawa',
        post: 'Professor',
        from: '(Ibaraki University, Ibaraki, Japan)',
        url: 'http://takehisahasegawa.sci.ibaraki.ac.jp/',
        email: 'takehisa.hasegawa.sci@vc.ibaraki.ac.jp'
      },{
        name: 'Zoey Wang',
        post: 'Restaurant Manager',
        from: '(Honjin Izakaya, Calgary, Canada)',
        mobile: '+1 587-888-3873',
        email: 'zoey.kekitchen@gmail.com'
      },{
        name: 'Dan Osborne',
        post: 'Host Father (School Principal)',
        from: '(Calgary, Canada)',
        mobile: '+1 403-919-0819',
        email: 'dan56@shaw.ca'
      }];
let referencesHTML = '';

reference.forEach(item => {
    if(item.url){

        referencesHTML += `
    
    <div class="footer__item">
        <div class="footer__reference">
            <a href="${item.url}" target="_blank"><i class="ri-link footer__link"></i></a>
            <div class="footer__reference">
                <h4 class="footer__name">${item.name}</h4>
                <h4 class="footer__post">${item.post}</h4>
            </div>
        </div>
        <div class="footer__contact">
            <p class="footer__from">${item.from}</p>
            <div class="footer__mail-container">
                <a href="mailto:${item.email}">
                    <i class="ri-mail-line footer__icon"></i>
                </a>
                <p class="footer__mail">${item.email}</p>
            </div>
        </div>
    </div>
    `
    }else{
        referencesHTML += `
    
    <div class="footer__item">
        <div class="footer__reference">
            <h4 class="footer__name">${item.name}</h4>
            <h4 class="footer__post">${item.post}</h4>
        </div>
        <div class="footer__contact">
            <p class="footer__from">${item.from}</p>
            <div class="footer__mobile-container">
                <i class="ri-phone-line footer__icon"></i>
                <p class="footer__mobile">${item.mobile}</p>
            </div>
            <div class="footer__mail-container">
                <a href="mailto:${item.email}">
                    <i class="ri-mail-line footer__icon"></i>
                </a>
                <p class="footer__mail">${item.email}</p>
            </div>
            
        </div>
    </div>
    `
    }
    
})

references.innerHTML = referencesHTML;