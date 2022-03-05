function displayWeather(response) {
  let weatherDiv = document.querySelector("#weather");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;

  weatherDiv.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
}

let city = "Santiago";
let key = "f460d367f2f35c17c3c62d368d6bd207";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

axios.get(url).then(displayWeather);
