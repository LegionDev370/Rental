const activeDropDown1 = document.querySelector(
  ".navbar__nav-list-items-collapse-dropdown-1"
);
const activeDropDown2 = document.querySelector(
  ".navbar__nav-list-items-collapse-dropdown-2"
);
const mobileMenu = document.querySelector(".mobile-menu");
const togglerHamburger = document.querySelector(".navbar__toggler-hamburger");
const hamburgerImg = document.querySelector(".navbar__toggler-hamburger-img");
const closeMenu = document.querySelector(".mobile-menu__header-close");
const containerGeneral = document.querySelector(".container-general");
const modeDarkLightBtn = document.querySelector(".navbar__nav-login-data-mode");
const modeDarkLightImg = document.querySelector(
  ".navbar__nav-login-data-mode-img"
);
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
let mode = window.localStorage.getItem("mode") ? false : true;
const body = document.querySelector("body");

const navbarList = findElement(".navbar__nav-list");
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

const viewAllCars = document.querySelector(
  ".section-cars__car-block-body-bottom-view"
);

navbarList.children[1].onclick = function (event) {
  navbarActive(event);
};
navbarList.children[2].onclick = function (event) {
  navbarActive(event);
};

const onMode = (current) => {
  mode = !mode;
  if (mode) {
    localStorage.setItem("mode", mode);
    current.style.background = "#272727";
    body.style.background = "#1C1C1C";
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
    activeDropDown1.style.visibility = "hidden";
    activeDropDown2.style.visibility = "hidden";
    hamburgerIconImg.setAttribute("src", "./assets/darkmode-hamburger.svg");
    modeMobileDarkLightImg.setAttribute("src", "./assets/lightmode.svg");
  } else {
    localStorage.removeItem("mode");
    current.style.background = "#F5F5F5";
    body.style.background = "#fff";
    navbarList.children[1].classList.remove("box-active-1");
    navbarList.children[2].classList.remove("box-active-1");
    navbarList.children[1].classList.remove("box-active-dark");
    navbarList.children[2].classList.remove("box-active-dark");
    activeDropDown1.style.visibility = "hidden";
    activeDropDown2.style.visibility = "hidden";
    linkCss.setAttribute("href", "./dist/css/lightmode.min.css");
    modeDarkLightImg.setAttribute("src", "./assets/darkmode.svg");
    arrowDropDown1.setAttribute("src", "./assets/arrow-darkmode.svg");
    arrowDropDown2.setAttribute("src", "./assets/arrow-darkmode.svg");
    navbarList.children[1].style.color = "#000";
    navbarList.children[0].style.color = "#000";
    navbarList.children[2].style.color = "#000";
    hamburgerIconImg.setAttribute("src", "./assets/hamburger.svg");
    modeMobileDarkLightImg.setAttribute("src", "./assets/darkmode.svg");
  }
};

onMode(modeDarkLightBtn);

modeDarkLightBtn.onclick = function () {
  onMode(this);
};
modeMobileDarkLight.onclick = function () {
  onMode(this);
};
togglerHamburger.onclick = function () {
  this.style.display = "none";
  containerGeneral.classList.add("activeContainer");
  mobileMenu.classList.add("mobile-active");
};
closeMenu.onclick = function () {
  mobileMenu.classList.remove("mobile-active");
  togglerHamburger.style.display = "block";
  containerGeneral.classList.remove("activeContainer");
};

export const arr = [
  {
    category: "compact",
    title: "Ford Fiesta",
    subtitle: "Economy Car",
    img: "./assets/cars/car-1.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "compact",
    title: "Nissan Versa",
    subtitle: "Compact Car",
    img: "./assets/cars/car-2.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "compact",
    title: "Toyota Corolla",
    subtitle: "Mid-size Car",
    img: "./assets/cars/car-3.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "compact",
    title: "Nissan Rogue",
    subtitle: "Mid-size SUV",
    img: "./assets/cars/car-4.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "compact",
    title: "Chevy Traverse",
    subtitle: "Full-size SUV ",
    img: "./assets/cars/car-5.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "compact",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/sportcars/car-1.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/sportcars/car-2.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/sportcars/car-3.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/sportcars/car-4.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/sportcars/car-5.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Sports cars",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
  {
    category: "Vans",
    title: "Nissan Altima",
    subtitle: "Full-size Car",
    img: "./assets/cars/car-6.png",
    human: "5 Seats",
    humanSvg: "./assets/cars/cars-info/human.svg",
    contact: "21+ Years",
    contactSvg: "./assets/cars/cars-info/contact.svg",
    mode: "Automatic",
    modeSvg: "./assets/cars/cars-info/automatic.svg",
    feul: "1-lit / 2.5 km",
    feulSvg: "./assets/cars/cars-info/oil.svg",
  },
];
const activeBtnContainer = document.querySelector(
  ".section-cars__car-block-body-top"
);

function setClass(id = "compact") {
  for (let i = 0; i < activeBtnContainer.children.length; i++) {
    if (activeBtnContainer.children[i].dataset.id === id) {
      activeBtnContainer.children[i].classList.add("category-active");
    } else {
      activeBtnContainer.children[i].classList.remove("category-active");
    }
  }
}
setClass();

activeBtnContainer.onclick = function ({ target }) {
  filterCategory(target.dataset.id);
  setClass(target.dataset.id);
};
const carContainer = document.querySelector(
  ".section-cars__car-block-body-bottom-cars"
);
const spinner = document.querySelector(".spinner");
const filterCategory = (category = "compact") => {
  spinner.style.display = "none";
  let res = arr.filter((item) => item.category.toLowerCase() === category);
  renderCars(res);
};
function renderCars(arr) {
  carContainer.innerHTML = "";
  arr.forEach((item) => {
    const block = document.createElement("div");
    block.setAttribute(
      "class",
      "section-cars__car-block-body-bottom-cars-items"
    );
    block.innerHTML = `
    <h3 class="section-cars__car-block-body-bottom-cars-items-title">${item.title}</h3>
    <p class="section-cars__car-block-body-bottom-cars-items-subtitle">${item.subtitle}</p>
    <div class="section-cars__car-block-body-bottom-cars-items-img">
      <img class = "section-cars__car-block-body-bottom-cars-items-info-right-block-img" src="${item.img}" alt="car-1">
    </div>
    <div class="section-cars__car-block-body-bottom-cars-items-info">
      <div class="section-cars__car-block-body-bottom-cars-items-info-left">
        <div class="section-cars__car-block-body-bottom-cars-items-info-left-block">
              <img class = "section-cars__car-block-body-bottom-cars-items-info-img" src="${item.humanSvg}" alt="human">
              <div>
                <p class="section-cars__car-block-body-bottom-cars-items-info-left-block-title">${item.human}</p>
              </div>
        </div>
        <div class="section-cars__car-block-body-bottom-cars-items-info-left-block">
          <img class = "section-cars__car-block-body-bottom-cars-items-info-img" src="${item.contactSvg}" alt="contact">
          <div>
            <p class="section-cars__car-block-body-bottom-cars-items-info-left-block-title">${item.contact}</p>
          </div>
        </div>
      </div>
      <div class="section-cars__car-block-body-bottom-cars-items-info-right">
        <div class="section-cars__car-block-body-bottom-cars-items-info-right-block">
          <img class = "section-cars__car-block-body-bottom-cars-items-info-img" src="${item.modeSvg}" alt="human">
          <div>
            <p class="section-cars__car-block-body-bottom-cars-items-info-right-block-title">${item.mode}</p>
          </div>
       </div>
       <div class="section-cars__car-block-body-bottom-cars-items-info-right-block">
        <img class = "section-cars__car-block-body-bottom-cars-items-info-img" src="${item.feulSvg}" alt="human">
        <div>
          <p class="section-cars__car-block-body-bottom-cars-items-info-right-block-title">${item.feul}</p>
        </div>
     </div>
      </div>
    </div>
      `;
    carContainer.appendChild(block);
  });
}

viewAllCars.onclick = function () {
  renderCars(arr);
};

spinner.style.display = "block";
setTimeout(() => {
  filterCategory();
}, 1000);
