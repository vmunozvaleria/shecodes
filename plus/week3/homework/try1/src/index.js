let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a city");
city.toLowerCase();

if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
  alert(
    "It is currently "
      .concat(celsiusTemperature, "\xB0C (")
      .concat(fahrenheitTemperature, "\xB0F) in ")
      .concat(city, " with a humidity of ")
      .concat(humidity, "%")
  );
} else {
  alert(
    "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+".concat(
      city
    )
  );
}

// if (city === weather)
//   alert(`It is currently 17°C (63°F) in tokyo with a humidity of 50%`);
// else {
//   alert(
//     "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+"
//   );
// }
