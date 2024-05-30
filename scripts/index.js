// banner javascript
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
    console.log(windowWidth)
}


updateImageSource();

window.addEventListener('resize', updateImageSource);




