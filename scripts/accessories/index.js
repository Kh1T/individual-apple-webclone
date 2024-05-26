

const productButton = document.getElementById('product');
const categoryButton = document.getElementById('category');
const productContainer = document.getElementById('product-container');
const categoryContainer = document.getElementById('category-container');


productButton.addEventListener('click', () => {
    productButton.classList.add('underline');
    categoryButton.classList.remove('underline');
    productContainer.classList.remove('hidden')
    categoryContainer.classList.add('hidden')

});

categoryButton.addEventListener('click', () => {
    categoryButton.classList.add('underline');
    productButton.classList.remove('underline');
    productContainer.classList.add('hidden')
    categoryContainer.classList.remove('hidden')
});

