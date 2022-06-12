const sliderContainer = document.querySelector(".slider-container");
const leftSide = document.querySelector(".left-slide");
const rightSide = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSide.querySelectorAll("div").length;

let activeSlideIndex = 0;
leftSide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => {
  changeSlide("up");
});
downButton.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  rightSide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}
