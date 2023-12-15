const e=document.getElementById("menu"),t=document.getElementById("toggle-open"),i=document.getElementById("toggle-close");t.addEventListener("click",()=>e.classList.add("show-menu")),i.addEventListener("click",()=>e.classList.remove("show-menu"));const o=document.getElementById("history"),s=document.getElementById("education"),l=document.getElementById("aboutMe-detail");o.addEventListener("click",()=>l.classList.remove("show-education")),s.addEventListener("click",()=>l.classList.add("show-education"));const a=document.getElementById("portfolio-cards");let d='<div class="swiper-wrapper">';[{title:"E-book website",image:"image/Portfolio-1.png",text:"Designed by Bedimcode",url:"https://e-bookwebsite.netlify.app/",github:"https://github.com/Sara-pyon/e-book_website"},{title:"Christmas website",image:"image/Portfolio-2.png",text:"Designed by Bedimcode",url:"https://main--christmas-websitebysara.netlify.app/",github:"https://github.com/Sara-pyon/Christmas_website"},{title:"Youtube Sidebar",image:"image/Portfolio-3.png",text:"Designed by Bedimcode",url:"https://youtube-sidebar.netlify.app/",github:""},{title:"Travel website",image:"image/Portfolio-4.png",text:"Designed by Bedimcode",url:"https://6578bae32a5c070008dddebd--travel-websitebysara.netlify.app/",github:"https://github.com/Sara-pyon/Travel_website"},{title:"Moshify website",image:"image/Portfolio-5.png",text:"Designed by Mosh Hamadani",url:"https://654af43db57e610008cca27b--moshfiedbysara.netlify.app/",github:"https://github.com/Sara-pyon/Sarafield"}].forEach(e=>{d+=`
    
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
        <a target="_blank" href="${e.url}" class='portfolio__link'>
            <button class="portfolio__btn">
                visit</button></a>
    </div>
    `}),d+=`</div> <div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>`,a.innerHTML=d,new Swiper(".portfolio__swiper",{loop:"true",spaceBetween:15,grapCursor:!0,slidesPerView:"auto",centeredSlides:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1e3:{slidesPerView:2,centeredSlides:!1}}});const r=document.getElementById("header");window.addEventListener("scroll",()=>{let e=document.getElementById("aboutMe").offsetTop;window.scrollY>=e?r.classList.add("header-shadow"):r.classList.remove("header-shadow")});const n=document.querySelectorAll(".section");window.addEventListener("scroll",()=>{n.forEach(e=>{let t=e.offsetHeight,i=e.offsetTop,o=e.getAttribute("id"),s=document.querySelector(".header__menu a[href*="+o+"]");window.scrollY>=i&&window.scrollY<i+t?s.classList.add("active-link"):s.classList.remove("active-link")})}),window.addEventListener("scroll",()=>{let e=document.getElementById("scrollUp");window.scrollY>=30?e.classList.add("show-scrollUp"):e.classList.remove("show-scrollUp")});
//# sourceMappingURL=index.621ceb21.js.map
