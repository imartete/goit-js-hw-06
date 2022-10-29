const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsArray = [];

for (const ingredient of ingredients) {
  const ingredientItem = document.createElement("li");
  const ingredientName = document.createTextNode(ingredient);
  ingredientItem.appendChild(ingredientName);
  ingredientItem.classList.add("item");
  ingredientsArray.push(ingredientItem);
}

document.querySelector("#ingredients").append(...ingredientsArray);
