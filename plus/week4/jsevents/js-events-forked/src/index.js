// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

function temperature(event) {
  event.preventDefault();
  let button = document.querySelector("#temp");
  alert("It is 18 dregrees");
  button.innerHTML = "It is 18 dregrees";
}

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

let clickButton = document.querySelector("#temp");
clickButton.addEventListener("click", temperature);
