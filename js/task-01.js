// const items = document.querySelectorAll(".item");

// console.log(`Number of categories: ${items.length}`);

// function getInfo(item) {
//   const heading = item.querySelector("h2");
//   const subcategories = item.querySelectorAll("li");

//   console.log(`Category: ${heading.textContent}`);
//   console.log(`Elements: ${subcategories.length}`);
// }

// items.forEach((item) => getInfo(item));

const categories = [...document.querySelector("#categories").children];

console.log(`Number of categories: ${categories.length}`);

function getInfo(item) {
  const heading = item.firstElementChild;
  const subcategories = item.lastElementChild.children;

  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${subcategories.length}`);
}

categories.forEach((item) => getInfo(item));
