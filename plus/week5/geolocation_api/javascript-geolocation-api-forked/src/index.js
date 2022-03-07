function myPosition(position) {
  console.log("Latitud");
  let lat = position.coords.latitude;
  console.log(lat);
  console.log("Longitud");
  let lon = position.coords.longitude;
  console.log(lon);
  function displayWeather(response) {
    let weatherH1 = document.querySelector("#weather");
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;

    weatherH1.innerHTML = `It is ${temperature} degrees, ${description}, in ${response.data.name}`;
  }

  let key = "f460d367f2f35c17c3c62d368d6bd207";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=-${lon}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}
navigator.geolocation.getCurrentPosition(myPosition);
