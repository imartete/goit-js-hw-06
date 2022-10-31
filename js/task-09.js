function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonNode = document.querySelector(".change-color");
const colorSpanNode = document.querySelector(".color");
const bodyNode = document.querySelector("body");

buttonNode.addEventListener("click", () => {
  bodyNode.style.backgroundColor = colorSpanNode.innerHTML =
    getRandomHexColor();
});
