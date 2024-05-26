// const pinInfo = [
//     { color:'', src: '../assets/accessories/pinwheel1-1.png', title: 'Connect with your mobile.', price: '129.00' },
//     { color:'', src: '../assets/accessories/pinwheel1-1.png', title: 'Connect with your mobile.', price: '129.00' },
//     { color:'', src: '../assets/accessories/pinwheel1-1.png', title: 'Connect with your mobile.', price: '129.00' },

// ]

// innerHtml = `
// <div class="w-screen flex flex-col items-center my-5 bg-zinc-100">
// <img src="../assets/accessories/pinwheel1-1.png">

// <span class="pt-5 my-3">${color}</span>
// <a href="#" class="h-20 text-lg font-medium">${title}</a>
// <span class="py-10">${price}</span>

// </div>
// `

class PinwheelCarousel extends HTMLElement {
    constructor() {
        super();
        this.carouselItems = null; // Initialize carouselItems as null
    }

    connectedCallback() {
        const dataArray = JSON.parse(this.getAttribute('data-array'));

        this.className = 'carousel relative overflow-hidden flex w-full flex-col items-center pb-5';

        this.carouselItems = document.createElement('div'); // Assign created element to this.carouselItems
        this.carouselItems.className = 'carouselItems flex transition-transform duration-500';

        dataArray.forEach(data => {
            const element = document.createElement('div');
            element.classList.add('carousel__item', 'flex', 'flex-col', 'w-screen', 'my-5', 'bg-zinc-100');
            element.innerHTML = `
                <img class="w-80 my-20" src="${data.src}" alt="${data.title}">
                <a href="#" class="h-20 text-lg font-medium">${data.title}</a>
                <span class="py-10">$${data.price}</span>
            `;
            this.carouselItems.appendChild(element);
        });

        this.appendChild(this.carouselItems);

        const nav = document.createElement('div');
        nav.className = 'carousel__nav w-full p-5 absolute -bottom-6 text-center';
        dataArray.forEach((_, index) => {
            const button = document.createElement('span');
            button.classList.add('carousel__button', 'w-2.5', 'h-2.5', 'inline-block', 'bg-black', 'bg-opacity-20', 'rounded-full', 'mx-3', 'cursor-pointer');
            button.dataset.slide = index;
            nav.appendChild(button);
        });
        this.appendChild(nav);

        const buttons = this.querySelectorAll('.carousel__button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const slideIndex = parseInt(button.dataset.slide);
                const offset = -(slideIndex * 100); // Assuming each slide is 100% wide
                this.carouselItems.style.transform = `translateX(${offset/10}%)`;

                buttons.forEach(btn => btn.classList.remove('bg-opacity-50'));
                button.classList.add('bg-opacity-50');
            });
        });

        const initialOffset = 0; // Start from the first slide
        this.carouselItems.style.transform = `translateX(${initialOffset}%)`;

        // Set initial button state
        if (buttons.length > 0) {
            buttons[0].classList.add('bg-opacity-50');
        }
    }
}

customElements.define('pinwheel-carousel', PinwheelCarousel);

const pinInfo1 = [
    { src: '../assets/accessories/pinwheel1-1.png', title: 'Apple Pencil Pro', price: '129.00' },
    { src: '../assets/accessories/pinwheel1-2.png', title: 'Magic Keyboard for iPad Pro 13‑inch (M4) - White', price: '349.00' },
    { src: '../assets/accessories/pinwheel1-3.png', title: 'Smart Folio for iPad Pro 13-inch (M4) - Denim', price: '99.00' },
    { src: '../assets/accessories/pinwheel1-4.png', title: 'Apple Pencil (USB-C)', price: '79.00' },
    { src: '../assets/accessories/pinwheel1-5.png', title: 'Magic Keyboard for iPad Air 11-inch (M2) - Black', price: '299.00' },
    { src: '../assets/accessories/pinwheel1-6.png', title: 'Smart Folio for iPad Air 11-inch (M2) - Sage', price: '79.00' },
    { src: '../assets/accessories/pinwheel1-7.png', title: 'Apple Pencil (1st generation)', price: '99.00' },
    { src: '../assets/accessories/pinwheel1-8.png', title: 'Magic Keyboard Folio for iPad (10th generation)', price: '249.00' },
    { src: '../assets/accessories/pinwheel1-9.png', title: 'Smart Folio for iPad (10th generation) - Sky', price: '79.00' },
    { src: '../assets/accessories/pinwheel1-10.png', title: 'Apple Pencil (2nd generation)', price: '129.00' }
];

const createAndAppendElement = (data, containerId) => {
    const element = document.createElement('pinwheel-carousel');
    element.setAttribute('data-array', JSON.stringify(data)); // Set the data array as an attribute
    document.getElementById(containerId).appendChild(element);
};

createAndAppendElement(pinInfo1, 'pinwheel-carousel');
