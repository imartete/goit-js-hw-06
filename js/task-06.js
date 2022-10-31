const inputNode = document.querySelector("#validation-input");

inputNode.addEventListener("blur", () => {
  inputNode.className =
    inputNode.value.length == inputNode.getAttribute("data-length")
      ? "valid"
      : "invalid";
});
