const menu = document.getElementsByClassName("header-mobile-nav")[0];
const body = document.body;

function open() {

    document.getElementsByClassName("header-nav")[0].classList.add("header-nav--mobile");
    document.getElementsByClassName("header-nav")[0].style.display = "block";
    document.getElementsByClassName("header-main-menu")[0].classList.add("header-main-menu--mobile");
    
    Array.from(document.getElementsByClassName("main-menu__item"))
    .forEach(element => element.classList.add("main-menu__item--mobile"));
    Array.from(document.getElementsByClassName("main-menu__link"))
    .forEach(element => element.classList.add("main-menu__link--mobile"));
    
    document.getElementsByClassName("header-mobile-nav__button--open")[0]
    .classList.replace("header-mobile-nav__button--open", "header-mobile-nav__button--close");
}

function hide() {
    
    document.getElementsByClassName("header-nav")[0].style.cssText = "@media (min-width: 320px) and (max-width: 768px) {display: none;}"
    document.getElementsByClassName("header-nav")[0].classList.remove("header-nav--mobile");
    document.getElementsByClassName("header-main-menu")[0].classList.remove("header-main-menu--mobile");
        
    Array.from(document.getElementsByClassName("main-menu__item"))
    .forEach(element => element.classList.remove("main-menu__item--mobile"));
    Array.from(document.getElementsByClassName("main-menu__link"))
    .forEach(element => element.classList.remove("main-menu__link--mobile"));
        
    document.getElementsByClassName("header-mobile-nav__button--close")[0]
    .classList.replace("header-mobile-nav__button--close", "header-mobile-nav__button--open");
}

menu.addEventListener("click", () => {
    const cross = document.getElementsByClassName("header-mobile-nav__button--close")[0];

    !cross ? open() : hide(); 
});