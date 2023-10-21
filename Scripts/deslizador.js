let cardsContainer = document.querySelector(".cards-container");

let scrollAmount = 0;
const scrollStep = 300;

function scrollToRight() {
  scrollAmount += scrollStep;
  cardsContainer.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth"
  });
}

function scrollToLeft() {
  scrollAmount -= scrollStep;
  cardsContainer.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: "smooth"
  });
}