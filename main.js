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
