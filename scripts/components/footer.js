export class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <!-- footnote that have a nav and span -->
        <section class="pr-2 mx-10 justify-center hidden min-[830px]:flex text-base  ">
            <div class="grid grid-cols-5  max-w-screen-lg border-t-2 py-5">
                <!-- row one -->
                <div class="text-xs mr-5 pb-2">
                    <div class="">
                        <div class="accordion-container-1"></div>
                    <div class="text-xs mr-5 py-2">
                      <div class="accordion-container-2"></div>

                        </div>
                    </div>
                </div>
                <!-- row two -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                        <div class="accordion-container-3"></div>

                        <div class="text-xs mr-5 py-2">
                          <div class="accordion-container-4"></div>

                        </div>
                    </div>
                </div>
                <!-- row three -->
                <div class="text-xs mr-5 gap-2">
                    <div>
                
                    <div class="text-xs mr-5">
                    <div class="accordion-container-5"></div>
                        </div>
                    </div>
                </div>
                <!-- row four -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                        <div class="accordion-container-6"></div>
                        
                        <div class="text-xs mr-5 py-2">
                            <div class="accordion-container-7"></div>
                        </div>
                        <div class="accordion-container-8"></div>
                        
                        <div class="text-xs mr-5 py-2">
                            <div class="accordion-container-9"></div>
                        </div>
                    </div>
                </div>
                <!-- row five -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                            <div class="accordion-container-10"></div>
                        <div class="text-xs mr-5 py-2">
                            <div class="accordion-container-11"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- visible in mobile -->
        <section class="pt-5 px-3 min-[830px]:hidden">
            <div class="accordion-container-1"></div>
            <div class="accordion-container-2"></div>
            <div class="accordion-container-3"></div>
            <div class="accordion-container-4"></div>
            <div class="accordion-container-5"></div>
            <div class="accordion-container-6"></div>
            <div class="accordion-container-7"></div>
            <div class="accordion-container-8"></div>
            <div class="accordion-container-9"></div>
            <div class="accordion-container-10"></div>
            <div class="accordion-container-11"></div>

        </section>

        <!-- footer bottom -->
        <section class="w-full flex justify-center px-3">
            <div class="inline-block text-xs text-zinc-400 font-light max-w-screen-lg w-full item-center border-zinc-300 ">
                <div class=" min-[830px]:border-b-2 pt-5 py-2 min-[830px]:py-5">
                    More ways to shop: <u><a href="#" class="text-blue-600">Find an Apple Store</u></a> or <a  href="#" class="text-blue-600">
                        <u>other retailer</u></a> near you. <br class="min-[610px]:hidden">Or call 1-800-MY-APPLE.
                </div>
                <p class="min-[830px]:hidden py-2">United States</p>
                <div class="min-[960px]:py-5 flex items-center justify-between pb-10">
                    <div class="flex max-[960px]:grid max-[960px]:grid-col-2 items-center h-[10px]">
                        <div class="mr-7 my-2">Copyright © 2024 Apple Inc. All rights reserved.</div>
                        <div>
                            <a href="#" class="pr-2 border-r-[1px] border-zinc-500 ">Privacy Policy </a> 
                            <a href="#" class="px-2 border-r-[1px] border-zinc-500 ">Terms of Use</a> 
                            <a href="#" class="px-2 border-r-[1px] border-zinc-500 ">Sales and Refunds </a>
                            <a href="#" class="px-2 border-r-[1px] border-zinc-500 ">Legal </a>
                            <a href="#" class="px-2 border-r-[1px] border-zinc-500 ">Site Map</a>
                        </div>
                    </div>
                    <p class="max-[830px]:hidden max-[968px]:pt-5">United States</p>
                </div>
            </div>
        </section>
    </div>
        `;
    }
}

customElements.define("footer-component", Footer);



document.addEventListener("DOMContentLoaded", function () {
  const accordionData1 = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "Airpods",
        "TV & Home",
        "Airtag",
        "Accessories",
      ],
    },
  ];

  const accordionData2 = [
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    },
  ];

  const accordionData3 = [
    {
      title: "Account",
      links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
    },
  ];

  const accordionData4 = [
    {
      title: "Entertainment",
      links: [
        "Wallet",
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple Podcasts",
        "Apple News+",
        "Apple Books",
        "Apple Store",
      ],
    },
  ];

  const accordionData5 = [
    {
      title: "Apple Store",
      links: [
        "Wallet",
        "Find a Store",
        "Genius bar",
        "Today at Apple",
        "Group Reservation",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade in",
        "Financing",
        "Carrier Deals at Apple",
        "Order Status",
        "Shopping Help",
      ],
    },
  ];

  const accordionData6 = [
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
  ];

  const accordionData7 = [
    {
      title: "For Education",
      links: [
        "Wallet",
        "Apple and Education",
        "Shop for K-12",
        "Shop for College",
      ],
    },
  ];

  const accordionData8 = [
    {
      title: "For Healthcare",
      links: [
        "Apple in Healthcare",
        "Health on Apple Watch",
        "Health record on iPhone",
      ],
    },
  ];

  const accordionData9 = [
    {
      title: "For Government",
      links: ["Shop for Government", "Shop for Veterans and Military"],
    },
  ];

  const accordionData10 = [
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supply Chain",
      ],
    },
  ];

  const accordionData11 = [
    {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  initializeAccordion("accordion-container-1", accordionData1);
  initializeAccordion("accordion-container-2", accordionData2);
  initializeAccordion("accordion-container-3", accordionData3);
  initializeAccordion("accordion-container-4", accordionData4);
  initializeAccordion("accordion-container-5", accordionData5);
  initializeAccordion("accordion-container-6", accordionData6);
  initializeAccordion("accordion-container-7", accordionData7);
  initializeAccordion("accordion-container-8", accordionData8);
  initializeAccordion("accordion-container-9", accordionData9);
  initializeAccordion("accordion-container-10", accordionData10);
  initializeAccordion("accordion-container-11", accordionData11);
});


/**
 * Creates an accordion item with the given title and links.
 * @param {string} title - The title of the accordion item.
 * @param {string[]} links - An array of strings representing the links for the accordion item.
 * @returns {HTMLElement} The created accordion item element.
 */
    function createAccordionItem(title, links) {
      const accordionItem = document.createElement("div");
      accordionItem.className =
        "border-b-2 pt-3 md:pt-0 accordion-item border-zinc-300 md:border-none";

      const header = document.createElement("div");
      header.className = "flex justify-between accordion-header";
      header.innerHTML = `
          <span class="pb-2">${title}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 rotate-svg duration-500 h-8 md:hidden">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
      `;

      const content = document.createElement("ul");
      content.className =
        "text-gray-500 space-y-2 accordion-content hidden flex flex-col pb-5 pt-2 pl-5 md:pl-0 md:pt-0 md:flex md:pb-0";

      links.forEach((linkText) => {
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = linkText;
        content.appendChild(link);
      });

      accordionItem.appendChild(header);
      accordionItem.appendChild(content);

      return accordionItem;
    }


    /**
 * Initializes behavior for accordion items.
 * This function adds click event listeners to accordion headers.
 * @returns {void}
 */
function initializeAccordionBehavior() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const svgElement = item.querySelector(".rotate-svg");

    header.addEventListener("click", () => {
      handleAccordionClick(item, content, svgElement);
    });
  });
}
/**
 * Handles the click event on an accordion item's header.
 * This function checks if the clicked item is active and opens/closes it accordingly.
 * @param {HTMLElement} item - The accordion item element.
 * @param {HTMLElement} content - The content element of the accordion item.
 * @param {HTMLElement} svgElement - The SVG element used for rotation.
 * @returns {void}
 */
function handleAccordionClick(item, content, svgElement) {
  const isActive = item.classList.contains("active");

  closeAllAccordionItems(); // Close all accordion items first

  if (!isActive) {
    openAccordionItem(item, content, svgElement);
  }
}

/**
 * Closes all accordion items by removing active class and hiding content.
 * This function also resets the rotation of SVG elements.
 * @returns {void}
 */
function closeAllAccordionItems() {
  const allAccordionItems = document.querySelectorAll(".accordion-item");
  const allSvgElements = document.querySelectorAll(".rotate-svg");

  allAccordionItems.forEach((item) => {
    item.classList.remove("active");
    const content = item.querySelector(".accordion-content");
    content?.classList.add("hidden");
  });

  allSvgElements.forEach((svg) => {
    svg.classList.remove("rotate-180");
  });
}

/**
 * Opens an accordion item by adding active class, showing content, and rotating the SVG.
 * @param {HTMLElement} item - The accordion item element to open.
 * @param {HTMLElement} content - The content element of the accordion item.
 * @param {HTMLElement} svgElement - The SVG element used for rotation.
 * @returns {void}
 */
function openAccordionItem(item, content, svgElement) {
  item.classList.toggle("active");
  content.classList.remove("hidden");
  svgElement.classList.add("rotate-180");
}

    /**
 * Initializes accordion elements based on the provided data.
 * @param {string} containerClass - The class name of the containers where accordions will be initialized.
 * @param {Object[]} accordionData - An array of objects containing data for each accordion item.
 * @param {string} accordionData[].title - The title of the accordion item.
 * @param {string[]} accordionData[].links - An array of strings representing the links for the accordion item.
 */

    function initializeAccordion(containerClass, accordionData) {
      const containers = document.querySelectorAll(`.${containerClass}`);
      containers.forEach((container) => {
        accordionData.forEach((data) => {
          const accordionItem = createAccordionItem(data.title, data.links);
          container.appendChild(accordionItem);
        });
      });

      initializeAccordionBehavior();
    }



