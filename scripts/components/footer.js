export class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <!-- footnote that have a nav and span -->
        <section class="pr-2 mx-10 justify-center hidden md:flex text-base ">
            <div class="grid grid-cols-5  max-w-screen-lg border-t-2 py-5">
                <!-- row one -->
                <div class="mr-5">
                    <div class="text-xs mr-5 pb-2">
                        <span class="pb-4 "> Shop and Learn</span>
                            <ul class="text-gray-500 flex flex-col space-y-2 py-2">
                                <a href="#">Store</a>
                                <a href="#">Mac</a> 
                                <a href="#">iPad</a>
                                <a href="#">iPhone</a>
                                <a href="#">Watch</a>
                                <a href="#">Vision</a>
                                <a href="#">Airpods</a>
                                <a href="#">TV & Home</a>
                                <a href="#">Airtag</a>
                                <a href="#">Accessories</a>
                            </ul>
                        <span class="pb-4 ">Apple Wallet</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a href="#">Wallet</a>
                                <a href="#">Apple Card</a> 
                                <a href="#">Apple Pay</a>
                                <a href="#">Apple Cash</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- row two -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                        <span class="pb-4 ">Account</span>
                            <ul class="text-gray-500 flex flex-col space-y-2 py-2">
                                <a  href="#">Manage Your Apple ID</a>
                                <a  href="#">Apple Store Account</a> 
                                <a  href="#">iCloud.com</a>
                            </ul>
                        <span class="pb-4 ">Entertainment</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a  href="#">Apple One</a>
                                <a  href="#">Apple TV+</a> 
                                <a href="#">Apple Music</a>
                                <a  href="#">Apple Arcade</a>
                                <a  href="#">Apple Fitness+</a>
                                <a  href="#">Apple Podcasts</a>
                                <a  href="#">Apple News+</a> 
                                <a  href="#">Apple Books</a>
                                <a href="#">Apple Store</a>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- row three -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                
                        <span class="pb-4 ">Apple Store</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a  href="#">Find a Store</a>
                                <a  href="#">Genius bar</a> 
                                <a  href="#">Today at Apple</a>
                                <a  href="#">Group Reservation</a>
                                <a  href="#">Apple Camp</a>
                                <a  href="#">Apple Store App</a>
                                <a  href="#">Certified Refurbished</a> 
                                <a  href="#">Apple Trade in</a>
                                <a  href="#">Financing</a>
                                <a  href="#">Carrier Deals at Apple</a> 
                                <a  href="#">Order Status</a>
                                <a  href="#">Shopping Help</a>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- row four -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                        <span class="pb-4 ">For Business</span>
                            <ul class="text-gray-500 flex flex-col space-y-2 py-2">
                                <a  href="#">Apple and Business</a>
                                <a  href="#">Shop for Business</a> 
                                
                            </ul>
                        <span class="pb-4 ">For Education</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a  href="#">Apple and Education</a>
                                <a  href="#">Shop for K-12</a> 
                                <a  href="#">Shop for College</a>
                    
                            </ul>
                        </div>
                        <span class="pb-4 ">For Healthcare</span>
                            <ul class="text-gray-500 flex flex-col space-y-2 py-2">
                                <a  href="#">Apple in Healthcare</a>
                                <a  href="#">Health on Apple Watch</a> 
                                <a  href="#">Health record on iPhone</a> 
                            </ul>
                        <span class="pb-4 ">For Government</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a  href="#">Shop for Government</a> 
                                <a  href="#">Shop for Veterans and Military</a>
                    
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- row five -->
                <div>
                    <div class="text-xs mr-5 pb-2">
                        <span class="pb-4 ">Apple Value</span>
                            <ul class="text-gray-500 flex flex-col space-y-2 py-2">
                                <a  href="#">Accessibility</a>
                                <a href="#">Education</a> 
                                <a  href="#">Environment</a>
                                <a  href="#">Inclusion and Diversity</a>
                                <a  href="#">Privacy</a> 
                                <a  href="#">Racial Equity and Justice</a>
                                <a  href="#">Supply Chain </a>
                                
                            </ul>
                        <span class="pb-4 ">About Apple</span>
                        <div class="text-xs mr-5 py-2">
                            <ul class="text-gray-500 flex flex-col space-y-2 ">
                                <a  href="#">Newsroom</a>
                                <a  href="#">Apple Leadership</a> 
                                <a  href="#">Career Opportunities</a>
                                <a  href="#">Investors</a>
                                <a  href="#">Ethics & Compliance</a>
                                <a  href="#">Events</a>
                                <a  href="#">Contact Apple</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- visible in mobile -->
        <section class="pt-5 px-3 min-[830px]:hidden">
            <div id ="accordion-container-1"></div>
            <div id ="accordion-container-2"></div>
            <div id ="accordion-container-3"></div>
            <div id ="accordion-container-4"></div>
            <div id ="accordion-container-5"></div>
            <div id ="accordion-container-6"></div>
            <div id ="accordion-container-7"></div>
            <div id ="accordion-container-8"></div>
            <div id ="accordion-container-9"></div>
            <div id ="accordion-container-10"></div>
            <div id ="accordion-container-11"></div>
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



function createAccordionItem(title, links) {

    const accordionItem = document.createElement('div');
    accordionItem.className = 'border-b-2 pt-3 accordion-item border-zinc-300';

    const header = document.createElement('div');
    header.className = 'flex justify-between accordion-header';
    header.innerHTML = `
        <span class="pb-2 text-sm">${title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 rotate-svg h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
    `;

    const content = document.createElement('ul');
    content.className = 'text-gray-500 space-y-2 accordion-content hidden flex text-sm flex-col pb-5 pt-2 pl-5';

    links.forEach(linkText => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = linkText;
        content.appendChild(link);
    });

    accordionItem.appendChild(header);
    accordionItem.appendChild(content);

    header.addEventListener('click', () => {
        content.classList.toggle('hidden');
        header.querySelector('svg').classList.toggle('rotate-180');
    });

    return accordionItem;
}

function initializeAccordion(containerId, accordionData) {
    const container = document.getElementById(containerId);

    accordionData.forEach(data => {
        const accordionItem = createAccordionItem(data.title, data.links);
        container.appendChild(accordionItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
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

    initializeAccordion('accordion-container-1', accordionData1);
    initializeAccordion('accordion-container-2', accordionData2);
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

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const svgElement = item.querySelector(".rotate-svg");

  header.addEventListener("click", () => {
    const allSvgElements = document.querySelectorAll(".rotate-svg");
    allSvgElements.forEach((svg) => {
      if (svg !== svgElement) {
        svg.classList.remove("rotate-180");
      }
    });

    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        const otherContent = otherItem.querySelector(".accordion-content");
        otherContent.classList.add("hidden");
      }
    });

    item.classList.toggle("active");
    item.classList.toggle("bg-transparent");
    content.classList.toggle("hidden");

    svgElement.classList.toggle("rotate-180");
  });
});
