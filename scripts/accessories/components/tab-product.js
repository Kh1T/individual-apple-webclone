/**
 * Creates an HTML string for a product item link.
 * @param {string} label - The label for the product item.
 * @returns {string} The HTML string for the product item link.
 */
function createProductItem(label) {
  const imgSrc = `../assets/accessories/icon-${label.toLowerCase().replace(/ /g, "-")}.png`;
  return `
        <a href="#" class="flex items-center text-lg font-medium">
            <img src="${imgSrc}" alt="${label} icon" class="size-16">
            <span class="pl-10">${label}</span>
        </a>
    `;
}

/**
 * Creates an HTML string for a list of product items.
 * @param {string[]} productInfo - An array of product item labels.
 * @returns {string} The HTML string for the list of product items.
 */
function createProduct(productInfo) {
  const productItemsHtml = productInfo
    .map((label) => createProductItem(label))
    .join("");
  return `
        <div class="w-screen px-10 py-5">
            ${productItemsHtml}
        </div>
    `;
}

const productInfo = [
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Apple Vision Pro",
  "TV & Home",
];
const categoryInfo = [
  "New Arrivals",
  "Cases & Protection",
  "Charging Essentials",
  "MagSafe",
  "Headphones & Speakers",
  "Apple Watch Bands",
  "Apple Vision Pro",
  "Home Office",
  "Mice & Keyboards",
  "AirTag and Accessories",
  "Health & Fitness",
  "Gaming",
  "Photography",
  "Creative Tools",
  "Smart Home Accessories",
  "Software",
  "Storage",
];
document.addEventListener("DOMContentLoaded", () => {
  const itemHeight = 64 + 10;
  const visibleItemCount = 5;

  function handleShowAll(container) {
    const currentHeight = container.clientHeight;
    const totalHeight = container.firstChild.children.length * itemHeight + 20;
    container.style.height =
      currentHeight === totalHeight
        ? `${itemHeight * visibleItemCount}px`
        : `${totalHeight}px`;
    showAllBtn.textContent =
      currentHeight === totalHeight ? "Show All  " : "Show All ";
  }

  const product = createProduct(productInfo, categoryInfo);

  const productContainer = document.getElementById("product-container");
  productContainer.appendChild(product.productList);

  const categoryContainer = document.getElementById("category-container");
  categoryContainer.appendChild(product.categoryList);

  productContainer.style.height = `${itemHeight * visibleItemCount}px`;
  categoryContainer.style.height = `${itemHeight * visibleItemCount}px`;

  const showAllBtn = document.getElementById("see-all-btn");
  showAllBtn.addEventListener("click", () => {
    handleShowAll(productContainer);
    handleShowAll(categoryContainer);
  });

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.id) {
      productContainer.id = `${clickedElement.id}-container`;
      categoryContainer.id = `${clickedElement.id}-container`;
      showAllBtn.click();
    }
  });
});

function createProductItem(item) {
  const a = document.createElement("a");
  a.href = "#";
  a.className = "flex items-center text-lg font-medium my-2";

  const img = document.createElement("img");
  img.className = "size-16";
  img.src = `../assets/accessories/icon-${item.replace(/ /g, "-").replace(/&/g, "")}.png`;
  img.alt = `${item} icon`;

  const span = document.createElement("span");
  span.className = "pl-2.5";
  span.textContent = item;

  a.appendChild(img);
  a.appendChild(span);

  return a;
}

function createProduct(productInfo, categoryInfo) {
  const productListContainer = document.createElement("div");
  productListContainer.className = "w-screen px-10 pt-4";
  const categoryListContainer = document.createElement("div");
  categoryListContainer.className = "w-screen px-10 pt-4";
  productInfo.forEach((product, index) => {
    const productItem = createProductItem(product);
    productListContainer.appendChild(productItem);
  });

  categoryInfo.forEach((category, index) => {
    const categoryItem = createProductItem(category);
    categoryListContainer.appendChild(categoryItem);
  });

  return {
    productList: productListContainer,
    categoryList: categoryListContainer,
  };
}
