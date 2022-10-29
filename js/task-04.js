let counterValue = 0;

const decrement = document.querySelector("[data-action='decrement']");
const increment = document.querySelector("[data-action='increment']");
const counterNode = document.querySelector("#value");

function changeBy(value) {
  counterValue += value;
  counterNode.innerHTML = counterValue;
}

increment.addEventListener("click", () => {
  changeBy(1);
});

decrement.addEventListener("click", () => {
  changeBy(-1);
});
