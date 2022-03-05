function displayWeather(response) {
  let weatherDiv = document.querySelector("#weather");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;

  weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
}

let lat = "Santiago";
let lon = "Santiago";
let key = "f460d367f2f35c17c3c62d368d6bd207";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}&units=metric`;

// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=f460d367f2f35c17c3c62d368d6bd207

function showPosition(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// let button = document.querySelector("button");
// button.addEventListener("click", getCurrentPosition);

axios.get(url).then(displayWeather);
