const inputNode = document.querySelector("#font-size-control");
const textNode = document.querySelector("#text");

inputNode.addEventListener("input", (event) => {
  textNode.style.fontSize = `${event.target.value}px`;
});
