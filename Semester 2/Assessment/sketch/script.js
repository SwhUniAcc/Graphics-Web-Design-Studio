// JavaScript & Animation
// This file contains small interactive features used by the webpage.

// Wait until the HTML document has completely loaded before running the code.
document.addEventListener("DOMContentLoaded", () => {

  // Update footer year automatically
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  gsap.registerPlugin(ScrollTrigger);

  const iconButtons = document.querySelectorAll(".icon-bnt");

  const cocktailsImage = document.querySelector(".cocktails-image");

  gsap.from(iconButtons, {
    scrollTrigger: {
      trigger: ".scroll-icons",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  gsap.from(cocktailsImage, {
    scrollTrigger: {
      trigger: ".cocktails-image",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

});

//   //Animated buttons for the dishes
//   const dishButton = document.querySelectorAll(".dish-btn");

//   gsap.from(dishButtons, {
//     y: 60,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out"
//   });

//     button.addEventListener("mouseenter", () => {
//     gsap.to(button, {
//       scale: 1.08,
//       duration: 0.25,
//       ease: "power2.out"
//     });
//   });

//   button.addEventListener("mouseleave", () => {
//     gsap.to(button, {
//       scale: 1,
//       duration: 0.25,
//       ease: "power2.out"
//     });
//   });
// });