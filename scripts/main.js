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

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Remove bg-sky-300 from all headers
            accordionHeaders.forEach(otherHeader => {
                otherHeader.classList.remove('bg-sky-200');
            });

            // Add bg-sky-300 to the clicked header
            header.classList.add('bg-sky-200');

            // Set a timeout to remove bg-sky-300 after 3 seconds
            setTimeout(() => {
                header.classList.remove('bg-sky-200');
            }, 60); // 3000 milliseconds = 3 seconds
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

