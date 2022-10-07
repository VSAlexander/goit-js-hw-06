const refs = {
  decreaseBtn: document.querySelector('[data-action="decrement"]'),
  increaseBtn: document.querySelector('[data-action="increment"]'),
  counter: document.querySelector("#value"),
};

let counterValue = 0;

function increaseValue() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}

function decreaseValue() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

refs.increaseBtn.addEventListener("click", increaseValue);
refs.decreaseBtn.addEventListener("click", decreaseValue);
