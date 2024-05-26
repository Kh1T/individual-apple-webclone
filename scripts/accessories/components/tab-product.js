function createProductItem(label) {
    const a = document.createElement('a');
    a.href = "#";
    a.className = "flex items-center text-lg font-medium";

    const img = document.createElement('img');
    img.className = "size-16";
    img.src = `../assets/accessories/icon-${label.toLowerCase().replace(/ /g, '-')}.png`;
    img.alt = `${label} icon`;

    const span = document.createElement('span');
    span.className = "pl-10";
    span.textContent = label;

    a.appendChild(img);
    a.appendChild(span);

    return a;
    }

    function createProduct(productInfo) {
        const div = document.createElement('div');
        div.className = "w-screen px-10 py-5";

        productInfo.forEach(label => {
        const productItem = createProductItem(label);
        div.appendChild(productItem);
        });

        return div;
    }

// Define the product items
// Define the product and category information
const productInfo = ["Mac", "iPad", "iPhone", "Watch", "Apple Vision Pro", "TV & Home"];
// const categoryInfo = ["New Arrivals", "Cases & Protection", "Charging Essentials", "MagSafe", "Headphones & Speakers", "Apple Watch Bands" ]
const categoryInfo = ["New Arrivals", "Cases & Protection", "Charging Essentials", "MagSafe", 
"Headphones & Speakers", "Apple Watch Bands" ,"Apple Vision Pro","Home Office" , "Mice & Keyboards" 
, "AirTag and Accessories" , "Health & Fitness", "Gaming","Photography","Creative Tools",
"Smart Home Accessories" , "Software" ,"Storage" ]
// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const itemHeight = 64; // Adjust this based on your actual item height
    const visibleItemCount = 5;

    // Function to handle "Show All" button click
    function handleShowAll(container) {
        const currentHeight = container.clientHeight;
        const totalHeight = container.firstChild.children.length * itemHeight + 64; // Add 20px for padding
        if (totalHeight > 800) {
            totalHeight === 1270;
        }
        container.style.height = currentHeight === totalHeight ? `${itemHeight * visibleItemCount}px` : `${totalHeight}px`; // Toggle height
        showAllBtn.textContent = currentHeight === totalHeight ? 'Show All ' : 'Show All '; // Change button text
    }

    // Create the product
    const product = createProduct(productInfo, categoryInfo);

    // Add the product to the product container
    const productContainer = document.getElementById('product-container');
    productContainer.appendChild(product.productList);

    // Add the categories to the category container
    const categoryContainer = document.getElementById('category-container');
    categoryContainer.appendChild(product.categoryList);

    // Set initial heights for containers
    productContainer.style.height = `${itemHeight * visibleItemCount}px`;
    categoryContainer.style.height = `${itemHeight * visibleItemCount}px`;

    // Add event listener for the "Show All" button
    const showAllBtn = document.getElementById('see-all-btn');
    showAllBtn.addEventListener('click', () => {
        handleShowAll(productContainer);
        handleShowAll(categoryContainer);
    });

    // Event listener to dynamically change container's id based on clicked element
    document.addEventListener('click', (event) => {

        const clickedElement = event.target; // Get the clicked element

        // Check if the clicked element's id is not null and not an empty string
        if (clickedElement.id) {
            productContainer.id = `${clickedElement.id}-container`; // Set the productContainer's id dynamically
            categoryContainer.id = `${clickedElement.id}-container`; // Set the categoryContainer's id dynamically
            showAllBtn.click(); 
        }
    });
});


    function createProductItem(item) {
        const a = document.createElement('a');
        a.href = "#";
        a.className = "flex items-center text-lg font-medium my-2";
    
        const img = document.createElement('img');
        img.className = "size-16"; // Tailwind classes for width and height of 20px
        img.src = `../assets/accessories/icon-${item.replace(/ /g, '-').replace(/&/g, '')}.png`;
        img.alt = `${item} icon`;
    
        const span = document.createElement('span');
        span.className = "pl-2.5"; // Tailwind class for padding-left: 10px
        span.textContent = item;
    
        a.appendChild(img);
        a.appendChild(span);
    
        return a;
    }

function createProduct(productInfo, categoryInfo) {
        const productListContainer = document.createElement('div');
        productListContainer.className = "w-screen px-10 pt-4"; // Tailwind classes for width, padding-left, padding-right, and padding-top
    
        const categoryListContainer = document.createElement('div');
        categoryListContainer.className = "w-screen px-10 pt-4"; // Tailwind classes for width, padding-left, padding-right, and padding-top
    
        productInfo.forEach((product, index) => {
            const productItem = createProductItem(product);
            productListContainer.appendChild(productItem);
        });
    
        categoryInfo.forEach((category, index) => {
            const categoryItem = createProductItem(category);
            categoryListContainer.appendChild(categoryItem);
        });
    
        return { productList: productListContainer, categoryList: categoryListContainer };
    }
