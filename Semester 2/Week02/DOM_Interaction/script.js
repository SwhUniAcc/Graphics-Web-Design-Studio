/*
  This script runs once the HTML document has fully loaded.
  At this stage, we are NOT adding interaction yet.
  This file only proves that JavaScript is correctly linked.
*/

document.addEventListener("DOMContentLoaded", () => {

  /*
    Select the span where the year should appear.
    This uses the DOM to find an element by its ID.
  */
  const yearEl = document.getElementById("year");

  /*
    If the element exists, insert the current year.
    This confirms that JavaScript is running correctly.
  */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

//Selects the corret button thats being clicked
const toggleInfoBtn = document.getElementById("toggleInfoBtn");

// Selects the correct paragraph that wants to be shown / hidden when the button is clicked
const extraInfo = document.getElementById("extraInfo");

// Toggles the paragraphs visbility whenever the button is pressed
toggleInfoBtn.addEventListener("click", () => {

  // Swaps the values every time the button is pressed
  extraInfo.style.display =
    extraInfo.style.display === "none" ? "block" : "none";
});

//Selects the corret image
const heroImage = document.getElementById("heroImage");

// Selects the correct button that swaps images when pressed
const swapImageBtn = document.getElementById("swapImageBtn");

//Keeps track of what image is being currently shown
let showingFirstImage = true;

// Toggles what image shown whenever the button is pressed
swapImageBtn.addEventListener("click", () => {

  // Swaps the values of what image every time the button is pressed
  heroImage.src = showingFirstImage
    ? "images/restaurant2.jpg"
    : "images/restaurant1.jpg"

  showingFirstImage = !showingFirstImage;

});
  
  //Selects the heading
const headline = document.getElementById("headline");

// Selects the heading's input field
const headlineInput = document.getElementById("headlineInput");

// Updates the heading when the user types
headlineInput.addEventListener("input", () => {
  headline.textContent = headlineInput.value;

});

//Selects the text size buttons
const increaseTextBtn = document.getElementById("increaseTextBtn");
const decreaseTextBtn = document.getElementById("decreaseTextBtn");

// Defines the starting font size, being 100%
let fontSize = 100;

// Increases text size
increaseTextBtn.addEventListener("click", () => {
  fontSize += 10;
  document.body.style.fontSize = fontSize + "%";
});

// Decreases text size
decreaseTextBtn.addEventListener("click", () => {
  fontSize -= 10;
  document.body.style.fontSize = fontSize + "%";
});

  //Selects the light / dark theme's buttons
const toggleModeBtn = document.getElementById("toggleModeBtn");

// Toggles between light and dark mode when button is pressed
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light")
});

const changeColorBtn = document.getElementById("changeColorBtn");

const card = document.querySelector(".card");

changeColorBtn.addEventListener("click", () => {
  card.classList.toggle("is-highlighted");
  });
});
