export class NavBar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = ` 
        <!-- Nav-bar -->
        <section class="max-[830px]:w-screen flex  justify-center
    bg-zinc-100 fixed  w-full top-0 z-10 transition-all duration-300" id="navbar">
    <nav class= "flex max-w-[1080px] max-[830px]:justify-between max-[830px]:w-screen flex-row bg-transparent h-[48px] item-center 
    min-[830px]:justify-between text-xs " id='navbar'>
        <a href="/pages/main.html">
            <svg  height="48" viewBox="0 0 16 46" width="49" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg>
            
        </a>
        <ul class="flex w-full  gap-6 justify-between max-[830px]:hidden min-[830px]:px-5 items-center">
            <div class="flex flex-col ">
                <a href="#" class="relative" id="dropdownText">Store</a>
                <div class="flex justify-center bg-zinc-50 absolute top-12 left-0
                            max-[830px]:w-screen dropdown 
                            transition-all duration-300 opacity-0 h-0 overflow-hidden w-full" id="dropdownMenu">
                    <div class="dropdown-content flex flex-row py-14 w-screen justify-center pr-14">
                        <div class="pr-24">
                            <span class="flex h-5 w-[120px] text-xs text-slate-400">Shop</span>
                            <div class="grid text-3xl font-medium space-y-1 pb-20">
                                <a href="#">Shop the Latest</a>
                                <a href="#">Mac</a>
                                <a href="#">iPad</a>
                                <a href="#">iPhone</a>
                                <a href="#">Apple Watch</a>
                                <a href="#">Apple Vision Pro</a>
                                <a href="">Accessories</a>
                            </div>
                        </div>
                        <div class="pr-14">
                            <span class="flex w-[120px] h-5 text-xs text-slate-400">Quick Links</span>
                            <div class="grid text-sm font-medium space-y-1">
                                <a href="#">Find a Store</a>
                                <a href="#">Order Status</a>
                                <a href="#">Apple Trade In</a>
                                <a href="#">Financing</a>
                            </div>
                        </div>
                        <div class="pr-14">
                            <span class="flex h-5 w-[120px] text-xs text-slate-400">Shop Special Stores</span>
                            <div class="grid text-sm font-medium space-y-1">
                                <a href="#">Certified Refurbished</a>
                                <a href="#">Education</a>
                                <a href="#">Business</a>
                                <a href="#">Veteran and Military</a>
                                <a href="#">Government</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex flex-col">
                <a href="#">Mac</a>
                <div class="flex justify-center bg-zinc-50 absolute top-12 left-0
                                max-[830px]:w-screen dropdown 
                                transition-all duration-300 opacity-0 max-h-0 overflow-hidden w-full" id="dropdownMenu">
                        <div class="dropdown-content flex flex-row py-14 w-screen justify-center pr-14">
                            <div class="pr-24">
                                <span class="flex h-5 w-[120px] text-xs text-slate-400">Shop</span>
                                <div class="grid text-3xl font-medium space-y-1 pb-20">
                                    <a href="#">Shop the Latest</a>
                                    <a href="#">Mac</a>
                                    <a href="#">iPad</a>
                                    <a href="#">iPhone</a>
                                    <a href="#">Apple Watch</a>
                                    <a href="#">Apple Vision Pro</a>
                                    <a href="#">Accessories</a>
                                </div>
                            </div>
                            <div class="pr-14">
                                <span class="flex w-[120px] h-5 text-xs text-slate-400">Quick Links</span>
                                <div class="grid text-sm font-medium space-y-1">
                                    <a href="#">Find a Store</a>
                                    <a href="#">Order Status</a>
                                    <a href="#">Apple Trade In</a>
                                    <a href="#">Financing</a>
                                </div>
                            </div>
                            <div class="pr-14">
                                <span class="flex h-5 w-[120px] text-xs text-slate-400">Shop Special Stores</span>
                                <div class="grid text-sm font-medium space-y-1">
                                    <a href="#">Certified Refurbished</a>
                                    <a href="#">Education</a>
                                    <a href="#">Business</a>
                                    <a href="#">Veteran and Military</a>
                                    <a href="#">Government</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>


            <a href="#">iPad</a>
            <a href="#">iPhone</a>
            <a href="#">Vision</a>
            <a href="#">Airpod</a>
            <a href="#">TV & Home</a>
            <a href="#">Entertainment</a>
            <a href="/pages/acessories-page.html">Acessories</a>
            <a href="./support-page.html">Support</a>

        </ul>
        <ul class="grid grid-flow-col space-x-6 px-4 ">
            <a href="#">
                <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z"></path></svg>
            </a>
            <a href="#" class="max-[830px]:hidden">
                <svg height="48" viewBox="0 0 17 48" width="17" xmlns="http://www.w3.org/2000/svg"><path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z"></path></svg>
            </a>
            <a href="#" class="justify-center self-center max-[830px]:pr-3 md:hidden">
                <svg width="18" height="18" viewBox="0 0 18 18"><polyline id="globalnav-menutrigger-bread-bottom" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 12, 16 12" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"><animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"></animate><animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"></animate></polyline><polyline id="globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5" class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline></svg>
            </a>
            
        </ul>
    </nav>
        `
    }
}

customElements.define("navbar-component", NavBar);

    const dropdownText = document.getElementById("dropdownText");
    const dropdownMenu = document.getElementById("dropdownMenu");
    let timer;

    dropdownText.addEventListener("mouseenter", () => {
        clearTimeout(timer);
        dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
        dropdownMenu.style.opacity = "1";
    });

    dropdownText.addEventListener("mouseleave", () => {
        timer = setTimeout(() => {
        dropdownMenu.style.height = "0";
        dropdownMenu.style.opacity = "0";
        }, 500);
    });

    dropdownMenu.addEventListener("mouseenter", () => {
        clearTimeout(timer);
        dropdownMenu.style.height = dropdownMenu.scrollHeight + "px";
        dropdownMenu.style.opacity = "1";
    });

    dropdownMenu.addEventListener("mouseleave", () => {
        dropdownMenu.style.height = "0";
        dropdownMenu.style.opacity = "0";
    });


