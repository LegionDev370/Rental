function findElement(element) {
  return document.querySelector(element);
}
const slider = findElement(".section-slider-outer-player");
const sliderItems = findElement(".section-slider-outer-player-items");
const pagesBtn1 = findElement(".section-slider-outer__pages-btn-1");
const pagesBtn2 = findElement(".section-slider-outer__pages-btn-2");
const container = findElement(".container");
const sliderPagination = findElement(".section-slider-outer__pages-active");

let medias = [];
let mediaWidth = 0;
for (let i = 10; i <= 2000; i++) {
  medias.push(window.matchMedia(`(max-width: ${i}px)`));
  i += 10;
}
const setDataId = (width) => {
  let res = 0;
  for (let i = 0; i < sliderPagination.children.length; i++) {
    if (i <= 0) {
      sliderPagination.children[i].dataset.id = res;
    } else {
      sliderPagination.children[i].dataset.id = width;
      width *= 2
    }
  }
};

function sliderPaginationFunc(width = 0) {
  sliderPagination.style.maxWidth = "65px";
  for (let i = 0; i < sliderPagination.children.length; i++) {
    if (+sliderPagination.children[i].dataset.id === width) {
      sliderPagination.children[i].classList.add("pageActive");
    } else {
      sliderPagination.children[i].classList.remove("pageActive");
      if (+sliderPagination.children[i].dataset.id === width) {
        sliderPagination.children[i].classList.add("pageActive");
      } else {
        sliderPagination.children[i].classList.remove("pageActive");
        if (+sliderPagination.children[i].dataset.id === width) {
          sliderPagination.children[i].classList.add("pageActive");
        } else {
          sliderPagination.children[i].classList.remove("pageActive");
        }
      }
    }
  }
}
sliderPaginationFunc();

let widthItems = null;
let widthCont = null;
let widthId = 0;
let num = 0

function sliderFunc(media) {
  const getStyles = findElement(".container");
  let style = getComputedStyle(getStyles);
  let res = style.width.split("").map((item) => {
    if (!isNaN(item)) {
      return item;
    }
  });
  let widthSlider = [];
  for (let i = 0; i < style.width.length; i++) {
    if (style.width[i] === ".") {
      break;
    }
    if (!isNaN(style.width[i])) {
      widthSlider.push(style.width[i]);
    }
  }
  num = +widthSlider.join("") - 20;
  setDataId(num)
  widthId = num;
  let result = +res.join("") * 3;
  slider.style.width = `${result}px`;
  for (let i = 0; i < slider.children.length; i++) {
    let items = slider.children[i];
    items.style.maxWidth = `${num}px`;
  }
  widthItems = num;
  widthCont = result;
}

for (let i = 0; i < medias.length; i++) {
  sliderFunc(medias[i]);
  medias[i].onchange = (e) => sliderFunc(e);
}

let calc = 0;
let stuff = 0;
const onPage = ({ target }) => {
  if (target.dataset.id === "1") {
    if (calc > 0) {
      calc -= widthItems;
      setDataId(num);
      sliderPaginationFunc(calc);
      slider.style.transform = `translateX(${-calc}px)`;
    }
  }
  if (target.dataset.id === "2") {
    stuff = calc + widthItems * 2 + 60;
    if (stuff <= widthCont) {
      calc += widthItems;
      setDataId(num);
      sliderPaginationFunc(calc);
      slider.style.transform = `translateX(${-calc}px)`;
    }
  }
};
pagesBtn1.onclick = function (event) {
  onPage(event);
};
pagesBtn2.onclick = function (event) {
  onPage(event);
};