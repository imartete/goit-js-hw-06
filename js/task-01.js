const allItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${allItems.length}`);

for (const item of allItems) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelector("ul").children.length}`);
}
