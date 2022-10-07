const form = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = new FormData(event.currentTarget);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    return console.log(formDataObject);
  }
}

form.addEventListener("submit", handleSubmit);
