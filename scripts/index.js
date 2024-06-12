// banner javascript
/**
 * Gets the image element with the ID 'responsiveImage'.
 * @type {HTMLElement}
 */
const responsiveImage = document.getElementById('responsiveImage');

function updateImageSource() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        responsiveImage.src = "../assets/support/hero-banner-sm.jpg";
    } else if (windowWidth >= 768 && windowWidth < 1024) {
        responsiveImage.src = "../assets/support/hero-banner-lg.jpg";
    } else {
        responsiveImage.src = "../assets/support/hero-banner-lg.jpg";
    }
}


updateImageSource();


/**
 * Adds an event listener to the window object to call updateImageSource
 * whenever the window is resized.
 */
window.addEventListener('resize', updateImageSource);


