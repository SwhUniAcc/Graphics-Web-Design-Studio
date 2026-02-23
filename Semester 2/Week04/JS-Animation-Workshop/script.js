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

  /*
    IMPORTANT PROJECT STRUCTURE NOTE:

    All images used in this project are stored
    inside the "images" folder.

    This means that whenever JavaScript changes
    an image source (src), the path must include
    the folder name.

    Example (correct):
    "images/restaurant1.jpg"

    Example (incorrect):
    "restaurant1.jpg"
  */

  /*
    In the next steps, we will add:
    - click events
    - input events
    - DOM manipulation
    - class toggling
    - accessibility controls
    - light/dark mode switching
  */
});
// Select the button that will be clicked
const toggleInfoBtn = document.getElementById("toggleInfoBtn");

// Select the paragraph we want to show / hide
const extraInfo = document.getElementById("extraInfo");

// Toggle visibility every time the button is clicked
// toggleInfoBtn.addEventListener("click", () => {
//   // Check current display value and switch it
//   extraInfo.style.display =
//     extraInfo.style.display === "none" ? "block" : "none";
// });
// Select the image element from the DOM
const heroImage = document.getElementById("heroImage");

// Select the button that will change the image
const swapImageBtn = document.getElementById("swapImageBtn");

// Variable to keep track of which image is currently displayed
let showingFirstImage = true;

// Listen for a click on the button
// swapImageBtn.addEventListener("click", () => {

//   // Change the image source depending on the current state
//   heroImage.src = showingFirstImage
//     ? "images/restaurant2.jpg"
//     : "images/restaurant1.jpg";

//   // Update the state for the next click
//   showingFirstImage = !showingFirstImage;
// });
// Select the heading element
const headline = document.getElementById("headline");

// Select the input field
const headlineInput = document.getElementById("headlineInput");

// // Update the heading as the user types
// headlineInput.addEventListener("input", () => {
//   headline.textContent = headlineInput.value;
// });

// // Select the text size buttons
// const increaseTextBtn = document.getElementById("increaseTextBtn");
// const decreaseTextBtn = document.getElementById("decreaseTextBtn");

// // Starting font size (100%)
// let fontSize = 100;

// // Increase text size
// increaseTextBtn.addEventListener("click", () => {
//   fontSize += 10;
//   document.body.style.fontSize = fontSize + "%";
// });

// // Decrease text size
// decreaseTextBtn.addEventListener("click", () => {
//   fontSize -= 10;
//   document.body.style.fontSize = fontSize + "%";
// });
// // Select the theme toggle button
// const toggleModeBtn = document.getElementById("toggleModeBtn");

// // Toggle light mode when the button is clicked
// toggleModeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("light");
// });

// // Select the button
// const changeColorBtn = document.getElementById("changeColorBtn");

// Select the card
const card = document.querySelector(".card");

// Toggle card colour on click
// changeColorBtn.addEventListener("click", () => {
//   card.classList.toggle("is-highlighted");
// });

const HeroImage = document.getElementById("heroImage");

const menuImage = document.getElementById("menuImage");

if (menuImage) {
  gsap.from(menuImage, {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });
}

const cocktailImage = document.getElementById("cocktaiImage");

if (cocktailImage) {
  gsap.from(cocktailImage, {
    x: -150,
    opacity: 0,
    duration: 6,
    ease: "power3.out",
    delay: 0.3
  });
}

/*
let position = 0;
let velocity = 0;
const acceleration = 0.2;

if (heroImage) {
  
  const intervalId = setInterval(() => {

    velocity += acceleration;
    position += velocity;
    heroImage.style.transform = `translateX(${position}px)`;

    if (position >= 400) {
      clearInterval(intervalId);
    }
  }, 20);
}
/*

/*
let position = 0;
let speed = 3;

const maxPosition = 200;
const minPosition = 0;

const intervalId = setInterval(() => {

  position += speed;
  
  if (position >= maxPosition || position <= minPosition) {

  }

  heroImage.style.transform = `translateX(${position}px)`;

}, 20);
*/

/*
let position = 0;
const speed = 2;
const maxPosition = 200;

const intervalId = setInterval(() => {

  position += speed;

  heroImage.style.transform = `translateX(${position}px)`;
  if (position >= maxPosition) {
    clearInterval(intervalId);
  }

}, 20);
*/

const description = document.querySelector(".description");

setTimeout(() => {

  if (heroImage) {
    heroImage.classList.add("fade-in");
  }

  if (description) {
    description.classList.add("fade-in");
  }

}, 300);

