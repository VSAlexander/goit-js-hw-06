const input = document.querySelector("#validation-input");

function validateInput() {
  input.classList.remove("valid");
  input.classList.remove("invalid");
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add("invalid");
  } else {
    input.classList.add("valid");
  }
}

input.addEventListener("blur", validateInput);
