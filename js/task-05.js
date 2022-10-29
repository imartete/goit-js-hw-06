const userName = document.querySelector("#name-output");
const inputNode = document.querySelector("#name-input");

inputNode.addEventListener("input", () => {
  userName.innerHTML = inputNode.value ? inputNode.value : "Anonymous";
});
