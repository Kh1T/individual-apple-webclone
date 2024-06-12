
window.addEventListener('scroll', () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { 
        navbar.style.top = "0"; 
        navbar.classList.add('bg-tranparent')
        navbar.style.opacity = "0.90";
    } else {
    navbar.style.opacity = "1";
    }
    });

//Scroller Js

// Select all elements with the class 'scroller'

const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    }
/**
 * Adds animation to each scroller element by duplicating its content and setting necessary attributes.
 */
    function addAnimation() {
    scrollers.forEach((scroller) => {
      // Set a custom attribute to indicate that the scroller is animated
      scroller.setAttribute("data-animated", true);

      // Select the inner container of the scroller
      const scrollerInner = scroller.querySelector(".scroller_run");
      // Get an array of all children elements within the scroller inner container
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate each item in the scroller content and append it to the scroller inner container

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
    }

const scroller = document.querySelectorAll(".scroller");

scroller.forEach((scroller) => {
  scroller.style.setProperty("--_animation-direction", "forwards");
  scroller.style.setProperty("--_animation-duration", "40s");
});

const scrollerRuns = document.querySelectorAll(".scroller_run");

/**
   * Sets CSS properties for each scroller element.
   */
scrollerRuns.forEach((scrollerRun) => {
  scrollerRun.style.animation = `scroll var(--_animation-duration) var(--_animation-play-state, running) var(--_animation-direction, forwards) linear infinite`;
});

// //Start & Pause Js
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById("toggleBtn");
  const scroller = document.querySelector(".scroller_run");
  const svgicon = document.getElementById("svgIcon");

  /**
   * Toggles the animation state of the scroller when the toggle button is clicked.
   */
  function toggleAnimation() {
    if (scroller.classList.contains("animate")) {
      scroller.classList.remove("animate");
      scroller.style.animationPlayState = "paused";
      svgicon.src = "/assets/icons/play.svg";
      svgicon.classList.add("h-[10px]");
    } else {
      scroller.classList.add("animate");
      scroller.style.animationPlayState = "running";
      svgicon.src = "/assets/icons/pause-filled.svg";
      svgicon.classList.remove("h-[10px]");
    }
  }

  toggleBtn.addEventListener("click", toggleAnimation);
});







