const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

function greetUser() {
  refs.output.textContent = refs.input.value;
  if (refs.input.value === "") {
    refs.output.textContent = "Anonymous";
  }
}

refs.input.addEventListener("input", greetUser);
