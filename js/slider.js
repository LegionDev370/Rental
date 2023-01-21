function findElement(element) {
  return document.querySelector(element);
}
const slider = findElement(".section-slider-outer-player");
const sliderItems = document.querySelectorAll(
  ".section-slider-outer-player-items"
);
const pagesBtn1 = findElement(".section-slider-outer__pages-btn-1");
const pagesBtn2 = findElement(".section-slider-outer__pages-btn-2");
const container = findElement(".container");
const sliderPagination = findElement(".section-slider-outer__pages-active");

const num = Array.from(sliderItems).length;

let counter = 0;
pagesBtn1.onclick = function () {
  counter > 0 ? (counter -= 1) : counter;
  if (counter >= 0) {
    slidesFunc();
  }
  sliderPaginationFunc(counter);
};
pagesBtn2.onclick = function () {
  counter++;
  if (counter < num) {
    slidesFunc();
  } else {
    counter = num - 1;
  }
  sliderPaginationFunc(counter)
};

const slides = sliderItems.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function slidesFunc() {
  sliderItems.forEach((item) => {
    item.style.transform = `translateX(-${counter * 100}%)`;
  });
}
sliderPaginationFunc()

function sliderPaginationFunc(counter = 0) {
  sliderPagination.style.maxWidth = "65px";
  for (let i = 0; i < sliderPagination.children.length; i++) {
    if (+sliderPagination.children[i].dataset.id === counter) {
      sliderPagination.children[i].classList.add("pageActive");
    } else {
      sliderPagination.children[i].classList.remove("pageActive");
      if (+sliderPagination.children[i].dataset.id === counter) {
        sliderPagination.children[i].classList.add("pageActive");
      } else {
        sliderPagination.children[i].classList.remove("pageActive");
        if (+sliderPagination.children[i].dataset.id === counter) {
          sliderPagination.children[i].classList.add("pageActive");
        } else {
          sliderPagination.children[i].classList.remove("pageActive");
        }
      }
    }
  }
}