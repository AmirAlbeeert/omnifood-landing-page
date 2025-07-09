const openMenu = document.querySelector(".open--icon");
const closeMenu = document.querySelector(".close--icon")
const menuOpened = document.querySelector(".header--navbar");
const opacityLogos = document.querySelector(".company--logo");
const appScreen = document.querySelector(".first--app--screen")
const menuScroll = document.querySelector(".navbar--links")
const headingOpacity = document.querySelector(".heading--how--section")
const stickyHeader = document.querySelector('main');
openMenu.addEventListener("click",function name(params) {
    menuOpened.classList.add("manu--open");
    opacityLogos.style.opacity= "0.05";
    appScreen.style.opacity= "0.05";
    headingOpacity.style.opacity= "0.05";
});
closeMenu.addEventListener("click",function name(params) {
    menuOpened.classList.remove("manu--open");
    opacityLogos.style.opacity= "1";
    appScreen.style.opacity= "1";
    headingOpacity.style.opacity= "1";
})
menuScroll.addEventListener("click",function name(params) {
    menuOpened.classList.remove("manu--open");
    opacityLogos.style.opacity= "1";
    appScreen.style.opacity= "1";
    headingOpacity.style.opacity= "1";
})

const obs = new IntersectionObserver(
    function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting=== false) {
        document.querySelector('nav').classList.add("sticky");
    }
    else {
        document.querySelector('nav').classList.remove("sticky");
    };
},{
    root : null,
    threshold: 0,
    rootMargin: "-80px"
});
obs.observe(stickyHeader);
