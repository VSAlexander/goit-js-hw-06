const refs = {
  createBoxBtn: document.querySelector('[data-create="create"]'),
  destroyBoxBtn: document.querySelector('[data-destroy="destroy"]'),
  input: document.querySelector("input"),
  container: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function createBoxes(amount) {
//   amount = Number(refs.input.value);
//   let acc = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     if (i === 0) {
//       box.style.width = `${acc}px`;
//       box.style.height = `${acc}px`;
//     } else {
//       acc += 10;
//       box.style.width = `${acc}px`;
//       box.style.height = `${acc}px`;
//     }
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.marginBottom = "10px";
//     refs.container.append(box);
//   }
// }

function createBoxes(amount) {
  amount = Number(refs.input.value);
  const boxesList = [];
  let acc = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    if (i === 0) {
      box.style.width = `${acc}px`;
      box.style.height = `${acc}px`;
    } else {
      acc += 10;
      box.style.width = `${acc}px`;
      box.style.height = `${acc}px`;
    }
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";

    boxesList.push(box);
  }

  refs.container.append(...boxesList);
}

refs.createBoxBtn.addEventListener("click", createBoxes);
refs.destroyBoxBtn.addEventListener("click", () => {
  refs.container.innerHTML = "";
  refs.input.value = "";
});
