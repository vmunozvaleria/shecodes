//Challenge 1
function button() {
  alert("Hooray");
}
let clickButton = document.querySelector("#special-button");
clickButton.addEventListener("click", button);

//Challenge 2

function pass(event) {
  event.preventDefault();
  let passInput = document.querySelector("#password-input");
  console.log(passInput.value);
  alert(`Your super secret password is ${passInput.value}`);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", pass);

//Challenge 3

function showSignUpFormValues(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#username-input");
  alert(`Your email is ${emailInput.value}`);
  alert(`Your username is ${usernameInput.value}`);
}

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showSignUpFormValues);
