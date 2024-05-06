// banner javascript
const responsiveImage = document.getElementById('responsiveImage');

function updateImageSource() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        responsiveImage.src = '/assets/support/hero-banner-homepage.image.small_2x.jpg';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
        responsiveImage.src = '/assets/support/hero-banner-homepage.image.large_2x.jpg';
    } else {
        responsiveImage.src = '/assets/support/hero-banner-homepage.image.large_2x.jpg';
    }
    console.log(windowWidth)
}

// Initial call to update image source based on window width
updateImageSource();

// Event listener for window resize to update image source
window.addEventListener('resize', updateImageSource);

