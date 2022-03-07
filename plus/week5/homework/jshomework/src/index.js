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

// Date
let now = new Date();

let span = document.querySelector("span");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()]; // Values between 0 6

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
let month = months[now.getMonth()]; // Values between 0 11
console.log(now.getDate());

time.innerHTML = `${day} ${hours}:${minutes}`;

//City

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let citySearch = document.querySelector("#input-city");
  cityElement.innerHTML = citySearch.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//Metric system

function metricSystem(event) {
  event.preventDefault();
  let link = document.querySelector("#c");
  temp.innerHTML = "12 ºC";
}

let clickTemp = document.querySelector("#c");
clickTemp.addEventListener("click", metricSystem);

function metricSystemf(event) {
  event.preventDefault();
  let linkf = document.querySelector("#f");
  temp.innerHTML = "68 ºF";
}

let clickTempf = document.querySelector("#f");
clickTempf.addEventListener("click", metricSystemf);

// let city = prompt("Enter a city");
// city = city.toLowerCase();

// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsius = Math.round(temperature);
//   let fahrenheit = Math.round((temperature * 9) / 5 + 32);
//   alert(
//     `It is currently ${celsius}°C (${fahrenheit}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `"Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}"`
//   );
// }

// if (city === weather)
//   alert(`It is currently 17°C (63°F) in tokyo with a humidity of 50%`);
// else {
//   alert(
//     "Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+"
//   );
// }
