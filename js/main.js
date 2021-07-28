var Menu = document.querySelector(".menu"),
    ulLing = document.querySelector(".ul");
Menu.onclick = function() {
    ulLing.classList.toggle("active");
}
window.onscroll = function() {
    ulLing.classList.remove("active");
}
var homeLi = document.querySelector(".home"),
    homePage = document.querySelector(".home-page");
homeLi.onclick = function(){
    homePage.classList.toggle("active");
    servicesUl.classList.remove("active");
    worksUl.classList.remove("active");
    pagesUl.classList.remove("active");
    blogUl.classList.remove("active");
    contactUl.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    homePage.classList.remove("active");
}
var servicesPage = document.querySelector(".services-page"),
    servicesUl = document.querySelector(".services-ul");
servicesPage.onclick = function(){
    servicesUl.classList.toggle("active");
    homePage.classList.remove("active");
    worksUl.classList.remove("active");
    pagesUl.classList.remove("active");
    blogUl.classList.remove("active");
    contactUl.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    servicesUl.classList.remove("active");
}
var worksPage = document.querySelector(".works-page"),
    worksUl = document.querySelector(".works-ul");
worksPage.onclick = function(){
    worksUl.classList.toggle("active");
    servicesUl.classList.remove("active");
    homePage.classList.remove("active");
    pagesUl.classList.remove("active");
    blogUl.classList.remove("active");
    contactUl.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    worksUl.classList.remove("active");
}


var pagesPage = document.querySelector(".pages-page"),
    pagesUl = document.querySelector(".pages-ul");
pagesPage.onclick = function(){
    pagesUl.classList.toggle("active");
    worksUl.classList.remove("active");
    servicesUl.classList.remove("active");
    homePage.classList.remove("active");
    blogUl.classList.remove("active");
    contactUl.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    pagesUl.classList.remove("active");
}



var blogPage = document.querySelector(".blog-page"),
    blogUl = document.querySelector(".blog-ul");
blogPage.onclick = function(){
    blogUl.classList.toggle("active");
    pagesUl.classList.remove("active");
    worksUl.classList.remove("active");
    servicesUl.classList.remove("active");
    homePage.classList.remove("active");
    contactUl.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    blogUl.classList.remove("active");
}




var contactPage = document.querySelector(".contact-page"),
    contactUl = document.querySelector(".contact-ul");
contactPage.onclick = function(){
    contactUl.classList.toggle("active");
    blogUl.classList.remove("active");
    pagesUl.classList.remove("active");
    worksUl.classList.remove("active");
    servicesUl.classList.remove("active");
    homePage.classList.remove("active");
    featuresUl.classList.remove("active");
}
window.onscroll = function(){
    contactUl.classList.remove("active");
}




var featuresPage = document.querySelector(".features-page"),
    featuresUl = document.querySelector(".features-ul");
featuresPage.onclick = function(){
    featuresUl.classList.toggle("active");
    contactUl.classList.remove("active");
    blogUl.classList.remove("active");
    pagesUl.classList.remove("active");
    worksUl.classList.remove("active");
    servicesUl.classList.remove("active");
    homePage.classList.remove("active");
}
window.onscroll = function(){
    featuresUl.classList.remove("active");
}



// Start Slides Img
let slids = document.querySelectorAll(".slide");
let index = 0;
function next(){
    slids[index].classList.remove("active");
    index=(index+1)% slids.length;
    slids[index].classList.add("active");
}
function prev(){
    slids[index].classList.remove("active");
    index = (index - 1 + slids.length) % slids.length;
    slids[index].classList.add("active");
}

// Start gallery
const colGallery = document.querySelector(".col");
const galleryItem = document.querySelectorAll(".gallery-item");
colGallery.addEventListener("click", (event)=>{
    // console.log(event.target);
    if(event.target.classList.contains("filter-item")){
        colGallery.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const filterValue = event.target.getAttribute("data-filter");
        galleryItem.forEach((item) =>{
            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.remove("hide")
                item.classList.add("shoe")
            }else{
                item.classList.add("hide");
            }
            console.log(item);
        })
    }
})

// Start Tem
const galleryText = document.querySelector(".textG");
const galleryImg = document.querySelectorAll(".gal-img");

galleryText.addEventListener("click", (event) =>{
    console.log(event.target);
    if(event.target.classList.contains("bul")){
        galleryText.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const valueTem = event.target.getAttribute("data-tem");
        galleryImg.forEach((item) =>{
            if(item.classList.contains(valueTem)){
                document.querySelector(".gal-img.active").classList.remove("active");
                item.classList.add("active");
            }
        })
    }
})

// Start tem Bul
const contactBulTem = document.querySelector(".bul-tem");
const contactItemTem = document.querySelectorAll(".item-tem");
contactBulTem.addEventListener("click", (event) =>{
    // console.log(event.target);
    if(event.target.classList.contains("bul")){
        contactBulTem.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        const valuecontactTem = event.target.getAttribute("data-contactTem");
        contactItemTem.forEach((item)=>{
            console.log(item);
            if(item.classList.contains(valuecontactTem)){
                document.querySelector(".item-tem.active").classList.remove("active");
                item.classList.add("active");
            }
        })
    }
})

const optionBox = document.querySelector(".option-box");
const optionMenu = document.querySelector(".option-menu");
optionMenu.onclick = function(){
    optionBox.classList.toggle("active");
}

const colorsRink = document.querySelector(".colors-list");
colorsRink.addEventListener("click", (event) =>{
    // console.log(event.target);
    if(event.target.classList.contains("bul")){
        colorsRink.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
    }
})

// تغيير الوان الموقع
const colors = document.querySelectorAll(".colors-list li");
colors.forEach(li => {
    li.addEventListener("click", (e) =>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color); // وضعت الوان وضفتها للاسم الذي انشئته
    });
});