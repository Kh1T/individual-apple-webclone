document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const svgElement = item.querySelector('.rotate-svg'); // Assuming each accordion item has a single SVG element

        header.addEventListener('click', () => {
            // Reset rotation for all SVG elements
            const allSvgElements = document.querySelectorAll('.rotate-svg');
            allSvgElements.forEach(svg => {
                if (svg !== svgElement) {
                    svg.classList.remove('rotate-180');
                }
            });

            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherContent.classList.add('hidden');
                }
            });

            // Toggle the active class on the clicked accordion item
            item.classList.toggle('active');
            item.classList.toggle('bg-transparent');
            // Toggle the display of the content
            content.classList.toggle('hidden');

            // Toggle the rotation on the SVG element of the clicked item
            svgElement.classList.toggle('rotate-180');
        });
    });
});

// On click blue highlight JS
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            accordionHeaders.forEach(otherHeader => {
                otherHeader.classList.remove('bg-sky-200');
            });

            header.classList.add('bg-sky-200');

            setTimeout(() => {
                header.classList.remove('bg-sky-200');
            }, 60); 
        });
    });
});

// Sticky nav bar js
window.addEventListener('scroll', () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the value as needed
        navbar.style.top = "0"; // Show the navbar
        navbar.classList.add('bg-tranparent')
        navbar.style.opacity = "0.80";
    } else {
    navbar.style.opacity = "1";
    }
    });

//Second Carousel JS
const scrollers = document.querySelectorAll(".scroller");
    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
    }

    function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_run");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
        });
    });
    }

// //Start & Pause Js
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const scroller = document.querySelector('.scroller_run');
    const svgicon = document.getElementById('svgIcon')

    // Function to toggle the 'animate' class and adjust animation properties
    function toggleAnimation() {
        if (scroller.classList.contains('animate')) {
            // Pause the animation
            scroller.classList.remove('animate');
            scroller.style.animationPlayState = 'paused';
            svgicon.src = '/assets/icons/play.svg'
            svgicon.classList.add('h-[10px]');
        } else {
            // Resume the animation
            scroller.classList.add('animate');
            scroller.style.animationPlayState = 'running';
            svgicon.src = '/assets/icons/pause-filled.svg'
            svgicon.classList.remove('h-[10px]');
        }
    }

    // Event listener for the toggle button click
    toggleBtn.addEventListener('click', toggleAnimation);
});


// Drop down navbar JS
document.addEventListener('DOMContentLoaded', function () {

    const dropdownText = document.getElementById('dropdownText');
    const dropdownMenu = document.getElementById('dropdownMenu');

    const dropdownContent = dropdownMenu.querySelector('.dropdown-content');

    dropdownMenu.addEventListener('mouseenter', function () {

        dropdownMenu.classList.add('max-h-[500px]');
        // dropdownMenu.style.height = dropdownContent.scrollHeight + 'px';
    });

    dropdownText.addEventListener('mouseleave', function () {
        // Collapsing dropdown
        dropdownMenu.style.height = '0px';
    });
});




