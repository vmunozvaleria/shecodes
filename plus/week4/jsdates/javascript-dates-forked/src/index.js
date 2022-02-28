let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
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
  "Dic"
];
let month = months[now.getMonth()]; // Values between 0 11

h2.innerHTML = `Today is ${day} ${date}/${month}/${year} at ${hours}:${minutes}`;

// Challenges

// Challenge 1
date = new Date();
console.log(date);

// Challenge 2
console.log(now.getMilliseconds());

// Challenge 3
console.log(now.getDate());

// Challenge 4
console.log(now.getFullYear());

// Challenge 5
console.log(now.getMonth());

// Challenge 6
date = now.getDate();
console.log(`Today is ${day}, ${month} ${date}, ${year}`);

// Challenge 7
console.log(`${day}, ${month} ${date}, ${year}`);
