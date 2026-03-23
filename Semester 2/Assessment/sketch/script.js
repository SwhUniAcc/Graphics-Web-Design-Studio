// JavaScript & Animation
// This file contains small interactive features used by the webpage.

// Wait until the HTML document has completely loaded before running the code.
document.addEventListener("DOMContentLoaded", () => {

  // Update footer year automatically
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // gsap.registerPlugin(ScrollTrigger);

  // const iconButtons = document.querySelectorAll(".icon-bnt");

  // const cocktailsImage = document.querySelector(".cocktails-image");

  // gsap.from(iconButtons, {
  //   scrollTrigger: {
  //     trigger: ".scroll-icons",
  //     start: "top 80%",
  //     toggleActions: "play none none none"
  //   },
  //   y: 80,
  //   opacity: 0,
  //   duration: 1,
  //   stagger: 0.2,
  //   ease: "power3.out"
  // });

  // gsap.from(cocktailsImage, {
  //   scrollTrigger: {
  //     trigger: ".cocktails-image",
  //     start: "top 85%",
  //     toggleActions: "play none none none"
  //   },
  //   y: 80,
  //   opacity: 0,
  //   duration: 1.2,
  //   ease: "power3.out"
  // });

gsap.registerPlugin(ScrollTrigger);

// Select ALL sections
const sections = document.querySelectorAll(".text-box");

sections.forEach((section) => {
  const header = section.querySelectorAll(".header-mid");
  const text = section.querySelectorAll(".para-left");
  const image = section.querySelector("img");

  // Create timeline for each section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Animate header(s)
  tl.from(header, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2
  });

  // Animate text (paragraphs + list items)
  tl.from(text, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out"
  }, "-=0.4");

  // Animate image (only if it exists)
  if (image) {
    tl.from(image, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.4");
  }
});

});