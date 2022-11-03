function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesNode = document.querySelector("#boxes");
const createButtonNode = document.querySelector("[data-create]");
const destroyByttonNode = document.querySelector("[data-destroy]");
const amountInputNode = document.querySelector("input");

let boxSize = 30;

function createBoxes(amount) {
  let allCreatedBoxes = "";
  for (let i = 0; i < amount; i += 1) {
    allCreatedBoxes += `<div
      style="width: ${boxSize}px; 
      height: ${boxSize}px; 
      background-color: ${getRandomHexColor()}">
      </div>`;
    boxSize += 10;
  }
  boxesNode.insertAdjacentHTML("beforeend", allCreatedBoxes);
}

createButtonNode.addEventListener("click", () => {
  createBoxes(amountInputNode.value);
});

function destroyBoxes() {
  boxesNode.innerHTML = "";
  boxSize = 30;
}

destroyByttonNode.addEventListener("click", destroyBoxes);
