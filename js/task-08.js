const formNode = document.querySelector(".login-form");
const formData = {};

formNode.addEventListener("submit", (event) => {
  let isValid = true;
  event.preventDefault();
  formNode.querySelectorAll("input").forEach((element) => {
    if (!element.value) {
      isValid = false;
      return;
    }
    formData[element.getAttribute("type")] = element.value;
  });

  if (isValid) {
    console.log(formData);
    event.target.reset();
  } else {
    alert("All fields must be filled!!!");
  }
});
