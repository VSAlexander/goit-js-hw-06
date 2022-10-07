const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

function createIngredient(name) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = name;
  ingredientsList.append(li);
  console.log(li);
}

ingredients.forEach((name) => createIngredient(name));
