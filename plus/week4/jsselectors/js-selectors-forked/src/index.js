// Challenge 1
// Log li with id special
let fav = document.querySelector("#special");
console.log(fav);

// Challenge 2
// Log all li with class of country
fav = document.querySelectorAll("li");
console.log(fav);

// Challenge 3
// Add class special to the li with id special
fav = document.querySelectorAll("li#special");
console.log(fav);
// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
fav.innerHTML = "Chile 🇨🇱";
