let removableLayout = document.querySelector(".removable-layout");

setTimeout(() => {
  document.body.style.setProperty("overflow-y", "auto");
  removableLayout.classList.add("disable-none");
}, 5000);

let clickedButton = document.querySelector(".holder .url .links ul");
let clickableButton = document.querySelector(".button-for-links");

clickableButton.onclick = function () {
  clickedButton.classList.toggle("cliked");
};

let getCards = document.querySelectorAll(".Our-Testimonials .test-cards .card");
let getCardsOne = document.querySelectorAll(
  ".Our-Testimonials .test-cards .card.one"
);
let getCardsTwo = document.querySelectorAll(
  ".Our-Testimonials .test-cards .card.two"
);

let getCardsThree = document.querySelectorAll(
  ".Our-Testimonials .test-cards .card.three"
);
let getCircles = document.querySelectorAll(".Our-Testimonials .circles li");
getCircles.forEach((li) => {
  li.addEventListener("click", (lis) => {
    getCircles.forEach((lolo) => {
      lolo.classList.remove("active");
    });
    li.classList.add("active");

    getCardsOne.forEach((cardOne) => {
      if (cardOne.classList[1] === li.getAttribute("data-number")) {
        cardOne.style.display = "block";
      } else {
        cardOne.style.display = "none";
      }
    });
    getCardsTwo.forEach((cardTwo) => {
      if (cardTwo.classList[1] === li.getAttribute("data-number")) {
        cardTwo.style.display = "block";
      } else {
        cardTwo.style.display = "none";
      }
    });
    getCardsThree.forEach((cardThree) => {
      if (cardThree.classList[1] === li.getAttribute("data-number")) {
        cardThree.style.display = "block";
      } else {
        cardThree.style.display = "none";
      }
    });
  });
});
