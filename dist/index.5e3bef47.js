const e=document.getElementById("menu"),t=document.getElementById("toggle-open"),i=document.getElementById("toggle-close");t.addEventListener("click",()=>e.classList.add("show-menu")),i.addEventListener("click",()=>e.classList.remove("show-menu"));const s=document.getElementById("history"),o=document.getElementById("education"),a=document.getElementById("aboutMe-detail");s.addEventListener("click",()=>a.classList.remove("show-education")),o.addEventListener("click",()=>a.classList.add("show-education"));const l=document.getElementById("portfolio-cards");let d='<div class="swiper-wrapper">';[{title:"E-book website",image:"image/Portfolio-1.png",text:"Designed by Bedimcode",url:"https://e-bookwebsite.netlify.app/",github:"https://github.com/Sara-pyon/e-book_website"},{title:"Christmas website",image:"image/Portfolio-2.png",text:"Designed by Bedimcode",url:"https://main--christmas-websitebysara.netlify.app/",github:"https://github.com/Sara-pyon/Christmas_website"},{title:"Youtube Sidebar",image:"image/Portfolio-3.png",text:"Designed by Bedimcode",url:"https://youtube-sidebar.netlify.app/",github:""},{title:"Travel website",image:"image/Portfolio-4.png",text:"Designed by Bedimcode",url:"https://6578bae32a5c070008dddebd--travel-websitebysara.netlify.app/",github:"https://github.com/Sara-pyon/Travel_website"},{title:"Moshify website",image:"image/Portfolio-5.png",text:"Designed by Mosh Hamadani",url:"https://654af43db57e610008cca27b--moshfiedbysara.netlify.app/",github:"https://github.com/Sara-pyon/Sarafield"}].forEach(e=>{d+=`
    
    <div class="portfolio__card swiper-slide">
        <div class="portfolio__img">
            <img src="${e.image}" alt="website image">
            <div class="portfolio__git-div">
                <a target="_blank" href="${e.github}">
                <i class="ri-github-fill portfolio__git"></i>
                </a>
            </div>
        </div>
        <h3 class="portfolio__title">${e.title}</h3>
        <p class="portfolio__text">${e.text}</p>
        <button class="portfolio__btn">
            <a target="_blank" href="${e.url}">
                visit</a></button>
    </div>
    `}),d+=`</div> <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>`,l.innerHTML=d,new Swiper(".portfolio__swiper",{loop:"true",spaceBetween:15,grapCursor:!0,slidesPerView:"auto",centeredSlides:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1e3:{slidesPerView:2,centeredSlides:!1}}});const n=document.getElementById("header");window.addEventListener("scroll",()=>{let e=document.getElementById("aboutMe").offsetTop;window.scrollY>=e?n.classList.add("header-shadow"):n.classList.remove("header-shadow")});const r=document.querySelectorAll(".section");window.addEventListener("scroll",()=>{let e=window.pageYOffset;r.forEach(t=>{let i=t.offsetHeight,s=t.offsetTop,o=t.getAttribute("id"),a=document.querySelector(".header__menu a[href*="+o+"]");e>=s&&e<s+i?a.classList.add("active-link"):a.classList.remove("active-link")})}),window.addEventListener("scroll",()=>{let e=window.scrollY,t=document.getElementById("scrollUp");e>=30?t.classList.add("show-scrollUp"):t.classList.remove("show-scrollUp")});
//# sourceMappingURL=index.5e3bef47.js.map
