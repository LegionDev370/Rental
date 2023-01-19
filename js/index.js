const activeDropDown1 = document.querySelector(
  ".navbar__nav-list-items-collapse-dropdown-1"
);
const activeDropDown2 = document.querySelector(
  ".navbar__nav-list-items-collapse-dropdown-2"
);
const arrowImage1 = document.querySelector(
  ".navbar__nav-list-items-box-one-btn-dropdown-img-1"
);
const arrowImage2 = document.querySelector(
  ".navbar__nav-list-items-box-one-btn-dropdown-img-2"
);
const mobileMenu = document.querySelector(".mobile-menu");
const togglerHamburger = document.querySelector(".navbar__toggler-hamburger");
const closeMenu = document.querySelector(".mobile-menu__header-close");

const modeDarkLightBtn = document.querySelector(".navbar__nav-login-data-mode");
const modeDarkLightImg = document.querySelector(
  ".navbar__nav-login-data-mode-img"
);
const generalCont = document.querySelector(".container-general");
const linkCss = document.querySelector("#linkcss");
const hamburgerIconImg = document.querySelector(
  ".navbar__toggler-hamburger-img"
);
const modeMobileDarkLight = document.querySelector(
  ".mobile-menu__footer-login-block-mode"
);
const modeMobileDarkLightImg = document.querySelector(
  ".mobile-menu__footer-login-block-mode-img"
);
const arrowDropDown1 = document.querySelector(".navbar__nav-list-items-img-1");
const arrowDropDown2 = document.querySelector(".navbar__nav-list-items-img-2");
let mode = false;
const body = document.querySelector("body");

const navbarList = findElement(".navbar__nav-list");
const activeLink1 = document.querySelector(
  ".navbar__nav-list-items-box-one-link"
);
const activeLink2 = document.querySelector(
  ".navbar__nav-list-items-box-two-link"
);
let activeNav1 = false;
let activeNav2 = false;
const navbarActive = ({ target }) => {
  if (target.dataset.id === "1") {
    activeNav1 = !activeNav1;
    activeNav2 = false;
    if (mode) {
      if (activeNav1) {
        navbarList.children[1].classList.add("box-active-dark");
        navbarList.children[2].classList.remove("box-active-dark");
        navbarList.children[1].style.color = "#000";
        navbarList.children[2].style.color = "#fff";
        arrowDropDown1.setAttribute("src", "./assets/arrow-darkmode.svg");
        arrowDropDown1.style.transform = "rotate(180deg)";
        arrowDropDown2.setAttribute("src", "./assets/arrow-lightmode.svg");
        arrowDropDown2.style.transform = "rotate(0deg)";
        activeDropDown1.style.visibility = "visible";
        activeDropDown2.style.visibility = "hidden";
      } else {
        navbarList.children[1].classList.remove("box-active-dark");
        navbarList.children[2].classList.remove("box-active-dark");
        navbarList.children[1].style.color = "#fff";
        arrowDropDown1.setAttribute("src", "./assets/arrow-lightmode.svg");
        arrowDropDown1.style.transform = "rotate(0deg)";
        activeDropDown1.style.visibility = "hidden";
      }
    } else {
      if (activeNav1) {
        navbarList.children[1].classList.add("box-active-1");
        navbarList.children[2].classList.remove("box-active-1");
        arrowDropDown1.style.transform = "rotate(180deg)";
        arrowDropDown2.style.transform = "rotate(0deg)";
        activeDropDown1.style.visibility = "visible";
        activeDropDown2.style.visibility = "hidden";
      } else {
        navbarList.children[1].classList.remove("box-active-1");
        navbarList.children[2].classList.remove("box-active-1");
        activeDropDown1.style.visibility = "hidden";
      }
    }
  }
  if (target.dataset.id === "2") {
    activeNav2 = !activeNav2;
    activeNav1 = false;
    if (mode) {
      if (activeNav2) {
        navbarList.children[2].classList.add("box-active-dark");
        navbarList.children[1].classList.remove("box-active-dark");
        navbarList.children[1].style.color = "#fff";
        navbarList.children[2].style.color = "#000";
        arrowDropDown2.setAttribute("src", "./assets/arrow-darkmode.svg");
        arrowDropDown2.style.transform = "rotate(180deg)";
        arrowDropDown1.style.transform = "rotate(0deg)";
        arrowDropDown1.setAttribute("src", "./assets/arrow-lightmode.svg");
        activeDropDown1.style.visibility = "hidden";
        activeDropDown2.style.visibility = "visible";
      } else {
        navbarList.children[2].classList.remove("box-active-dark");
        navbarList.children[1].classList.remove("box-active-dark");
        navbarList.children[2].style.color = "#fff";
        arrowDropDown2.setAttribute("src", "./assets/arrow-lightmode.svg");
        arrowDropDown2.style.transform = "rotate(0deg)";
        activeDropDown1.style.visibility = "hidden";
        activeDropDown2.style.visibility = "hidden";
      }
    } else {
      if (activeNav2) {
        navbarList.children[2].classList.add("box-active-1");
        navbarList.children[1].classList.remove("box-active-1");
        arrowDropDown2.style.transform = "rotate(180deg)";
        arrowDropDown1.style.transform = "rotate(0deg)";
        activeDropDown2.style.visibility = "visible";
        activeDropDown1.style.visibility = "hidden";
      } else {
        navbarList.children[2].classList.remove("box-active-1");
        navbarList.children[2].classList.remove("box-active-1");
        arrowDropDown2.style.transform = "rotate(0deg)";
        activeDropDown2.style.visibility = "hidden";
      }
    }
  }
};

navbarList.children[1].onclick = function (event) {
  navbarActive(event);
};
navbarList.children[2].onclick = function (event) {
  navbarActive(event);
};

const onMode = (current) => {
  mode = !mode;
  if (mode) {
    current.style.background = "#272727";
    body.style.background = "#000";
    linkCss.setAttribute("href", "./dist/css/darkmode.min.css");
    arrowDropDown1.setAttribute("src", "./assets/arrow-lightmode.svg");
    arrowDropDown2.setAttribute("src", "./assets/arrow-lightmode.svg");
    modeDarkLightImg.setAttribute("src", "./assets/lightmode.svg");
    navbarList.children[1].classList.remove("box-active-1");
    navbarList.children[2].classList.remove("box-active-1");
    navbarList.children[1].style.color = "#fff";
    navbarList.children[2].style.color = "#fff";
    navbarList.children[0].style.color = "#fff";
    arrowDropDown1.style.transform = `rotate(0deg)`;
    arrowDropDown2.style.transform = `rotate(0deg)`;
    activeDropDown1.style.visibility = "hidden"
    activeDropDown2.style.visibility = "hidden"
  } else {
    current.style.background = "#F5F5F5";
    body.style.background = "#fff";
    navbarList.children[1].classList.remove("box-active-1");
    navbarList.children[2].classList.remove("box-active-1");
    navbarList.children[1].classList.remove("box-active-dark");
    navbarList.children[2].classList.remove("box-active-dark");
    activeDropDown1.style.visibility = "hidden"
    activeDropDown2.style.visibility = "hidden"
    linkCss.setAttribute("href", "./dist/css/lightmode.min.css");
    modeDarkLightImg.setAttribute("src", "./assets/darkmode.svg");
    arrowDropDown1.setAttribute("src", "./assets/arrow-darkmode.svg");
    arrowDropDown2.setAttribute("src", "./assets/arrow-darkmode.svg");
    navbarList.children[1].style.color = "#000";
    navbarList.children[0].style.color = "#000";
    navbarList.children[2].style.color = "#000";
  }
};

modeDarkLightBtn.onclick = function () {
  onMode(this);
};
modeMobileDarkLight.onclick = function () {
  onMode(this);
};
togglerHamburger.onclick = function () {
  this.style.display = "none";
  mobileMenu.classList.add("mobile-active");
};
closeMenu.onclick = function () {
  mobileMenu.classList.remove("mobile-active");
  togglerHamburger.style.display = "block";
};
