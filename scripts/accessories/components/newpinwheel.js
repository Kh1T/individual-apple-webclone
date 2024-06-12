class PinwheelGenerate extends HTMLElement {
  constructor() {
    super();
    this.carouselItems = document.createElement("div");
    this.carouselItems.classList.add("carousel-items");
    this.appendChild(this.carouselItems);
  }

  connectedCallback() {
    const pinWheelData = [
      [
        {
          src: "../assets/accessories/pinwheel1-1.png",
          title: "Apple Pencil Pro",
          price: "129.00",
        },
        {
          src: "../assets/accessories/pinwheel1-2.png",
          title: "Magic Keyboard for iPad Pro 13‑inch (M4) - White",
          price: "349.00",
        },
        {
          src: "../assets/accessories/pinwheel1-3.png",
          title: "Smart Folio for iPad Pro 13-inch (M4) - Denim",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel1-4.png",
          title: "Apple Pencil (USB-C)",
          price: "79.00",
        },
        {
          src: "../assets/accessories/pinwheel1-5.png",
          title: "Magic Keyboard for iPad Air 11-inch (M2) - Black",
          price: "299.00",
        },
        {
          src: "../assets/accessories/pinwheel1-6.png",
          title: "Smart Folio for iPad Air 11-inch (M2) - Sage",
          price: "79.00",
        },
        {
          src: "../assets/accessories/pinwheel1-7.png",
          title: "Apple Pencil (1st generation)",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel1-8.png",
          title: "Magic Keyboard Folio for iPad (10th generation)",
          price: "249.00",
        },
        {
          src: "../assets/accessories/pinwheel1-9.png",
          title: "Smart Folio for iPad (10th generation) - Sky",
          price: "79.00",
        },
        {
          src: "../assets/accessories/pinwheel1-10.png",
          title: "Apple Pencil (2nd generation)",
          price: "129.00",
        },
      ],
      [
        {
          src: "../assets/accessories/pinwheel2-1.png",
          title: "iPhone 15 Silicone Case with MagSafe - Light Blue",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel2-2.png",
          title: "iPhone 15 Pro Clear Case with MagSafe",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel2-3.png",
          title: "20W USB-C Power Adapter",
          price: "19.00",
        },
        {
          src: "../assets/accessories/pinwheel2-4.png",
          title: "MagSafe Charger",
          price: "39.00",
        },
        {
          src: "../assets/accessories/pinwheel2-5.png",
          title: "iPhone 15 Pro FineWoven Case with MagSafe - Mulberry",
          price: "59.00",
        },
        {
          src: "../assets/accessories/pinwheel2-6.png",
          title: "iPhone FineWoven Wallet with MagSafe - Taupe",
          price: "59.00",
        },
        {
          src: "../assets/accessories/pinwheel2-7.png",
          title: "240W USB-C Charge Cable (2 m)",
          price: "29.00",
        },
        {
          src: "../assets/accessories/pinwheel2-8.png",
          title: "USB-C to Lightning Adapter",
          price: "29.00",
        },
        {
          src: "../assets/accessories/pinwheel2-9.png",
          title:
            "OtterBox Figura Series Case with MagSafe for iPhone 15 Pro - Multicolor",
          price: "49.95",
        },
        {
          src: "../assets/accessories/pinwheel2-10.png",
          title:
            "OtterBox Lumen Series Case with MagSafe for iPhone 15 Plus - Green",
          price: "49.95",
        },
      ],
      [
        {
          src: "../assets/accessories/pinwheel3-1.png",
          title: "45mm Pride Edition Braided Solo Loop - Size 6",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel3-2.png",
          title: "45mm Light Blue Sport Band - M/L",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel3-3.png",
          title: "45mm Ocean Blue Sport Loop",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel3-4.png",
          title: "45mm Pink Solo Loop - Size 6",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel3-5.png",
          title: "45mm Pacific Blue Magnetic Link - M/L",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel3-6.png",
          title: "Apple Watch Hermès - 41mm Orange Tricot Single Tour",
          price: "349.00",
        },
        {
          src: "../assets/accessories/pinwheel3-7.png",
          title: "45mm Gold Milanese Loop",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel3-8.png",
          title: "45mm Sequoia/Orange Nike Sport Loop",
          price: "49.00",
        },
        {
          src: "../assets/accessories/pinwheel3-9.png",
          title: "49mm Orange Ocean Band",
          price: "99.00",
        },
        {
          src: "../assets/accessories/pinwheel3-10.png",
          title: "45mm Pure Platinum Nike Sport Band - M/L",
          price: "49.00",
        },
      ],
    ];

    pinWheelData.forEach((pinInfo, index) => {
      const element = document.createElement("div");
      element.classList.add(
        "carousel__item",
        "flex",
        "flex-col",
        "items-center",
        "w-screen",
        "my-5",
        "bg-zinc-100",
      );
      element.innerHTML = `
        <h2 class="text-4xl font-medium pt-16 bg-white pb-10 w-full">${this.getCategoryTitle(index)}</h2>
        <div id="pinwheel${index + 1}-carousel" class="pinwheel-carousel" data-array='${JSON.stringify(pinInfo)}'></div>
        <a href="#" class="text-blue-500 text-xl tracking-wide py-10 mt-10 w-full bg-white">Shop all ${this.getCategoryTitle(index)} ></a>
      `;
      this.carouselItems.appendChild(element);
    });

    this.initializeCarousels();
  }

  getCategoryTitle(index) {
    const categories = [
      "Featured iPad Accessories",
      "Featured iPhone Accessories",
      "Apple Watch Bands",
    ];
    return categories[index] || "Category";
  }

  initializeCarousels() {
    const carousels = this.querySelectorAll(".pinwheel-carousel");
    carousels.forEach((carousel) => {
      const dataArray = JSON.parse(carousel.getAttribute("data-array"));
      if (!dataArray || !Array.isArray(dataArray)) {
        console.error("Invalid data-array attribute.");
        return;
      }

      const totalSlides = dataArray.length;

      carousel.className =
        "carousel relative overflow-hidden flex w-screen flex-col items-center pb-5";

      const carouselItems = document.createElement("div");
      carouselItems.className =
        "carouselItems flex transition-transform duration-500";

      dataArray.forEach((data) => {
        const element = document.createElement("div");
        element.classList.add(
          "carousel__item",
          "flex",
          "flex-col",
          "items-center",
          "w-screen",
          "my-5",
          "bg-zinc-100",
        );
        element.innerHTML = `
          <img class="w-80 my-20" src="${data.src}" alt="${data.title}">
          <a href="#" class="h-20 text-lg font-medium">${data.title}</a>
          <span class="py-10">$${data.price}</span>
        `;
        carouselItems.appendChild(element);
      });

      carousel.appendChild(carouselItems);

      const nav = document.createElement("div");
      nav.className = "carousel__nav w-full p-5 absolute -bottom-6 text-center";
      dataArray.forEach((_, index) => {
        const button = document.createElement("span");
        button.classList.add(
          "carousel__button",
          "w-2.5",
          "h-2.5",
          "inline-block",
          "bg-black",
          "bg-opacity-20",
          "rounded-full",
          "mx-3",
          "cursor-pointer",
        );
        button.dataset.slide = index;
        nav.appendChild(button);
      });
      carousel.appendChild(nav);

      this.initializeCarouselButtons(carousel, carouselItems);
    });
  }

  initializeCarouselButtons(carousel, carouselItems) {
    const buttons = carousel.querySelectorAll(".carousel__button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const slideIndex = parseInt(button.dataset.slide);
        this.updateCarousel(slideIndex, buttons, carouselItems);
      });
    });

    if (buttons.length > 0) {
      buttons[0].classList.add("bg-opacity-50");
      const initialOffset = (Math.floor(buttons.length / 2) - 1) * 10;
      carouselItems.style.transform = `translateX(${initialOffset + 5}%)`;
    }
  }

  updateCarousel(slideIndex, buttons, carouselItems) {
    const offset = -(slideIndex * 100);
    const totalSlides = buttons.length;
    const initialOffset = (Math.floor(totalSlides / 2) - 1) * 10;
    carouselItems.style.transform = `translateX(${offset / 10 + 5 + initialOffset}%)`;

    buttons.forEach((btn) => btn.classList.remove("bg-opacity-50"));
    buttons[slideIndex].classList.add("bg-opacity-50");
  }
}

customElements.define("pinwheel-generate", PinwheelGenerate);
