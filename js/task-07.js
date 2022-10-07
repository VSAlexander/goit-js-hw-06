const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function changeFontSize() {
  text.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", changeFontSize);
