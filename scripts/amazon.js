import { addToCart, updateCartTotal } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./generalFunctions/currencyFormatter.js";

const productElement = document.querySelector(".products-grid");
const cartElement = document.querySelector(".cart-quantity");

//GENERATING THE HTML
function renderProducts(){
    products.forEach((product) => {
    productElement.innerHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.productImage}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.productName}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="${product.getImage()}">
                    <div class="product-rating-count link-primary">
                        ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    &pound;${product.getPrice()}
                </div>

                <div class="product-quantity-container">
                    <select class="product-count-${product.productId}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                ${product.getSizeChartLink()}
                ${product.getWarrantyLink()}

                <button class="add-to-cart-button button-primary"
                data-product-id = "${product.productId}">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

const productSearch = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
let searchProducts;

renderProducts()


productSearch.addEventListener("keyup",(event)=>{
    let query = event.target.value.trim().toLowerCase()
    searchProducts = [];
    products.forEach((product) => {
        if (product.rating.keywords.includes(query)){
            searchProducts.push(product);
        } 
        else{
            return;
        }
    });

    productElement.innerHTML = ""  

    searchProducts.forEach((product) => {
        productElement.innerHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.productImage}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.productName}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="${product.getImage()}">
                    <div class="product-rating-count link-primary">
                        ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    &pound;${product.getPrice()}
                </div>

                <div class="product-quantity-container">
                    <select class="product-count-${product.productId}">
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                ${product.getSizeChartLink()}
                ${product.getWarrantyLink()}

                <button class="add-to-cart-button button-primary"
                data-product-id = "${product.productId}">
                    Add to Cart
                </button>
            </div>
        `;
    });

    if(searchProducts.length===0){
        renderProducts()
    }
    
})

//LOCATING THE ADD TO CART BUTTON
const addBtn = document.querySelectorAll(".add-to-cart-button");

//ADDING PRODUCTS TO THE CART ON BUTTON CLICK
addBtn.forEach((product) => {
  product.addEventListener("click", () => {
    const productId = product.dataset.productId;
    const productCountElement = document.querySelector(
      `.product-count-${productId}`
    );

    let productCount = Number(productCountElement.value);

    addToCart(productId, productCount);
    updateCartTotal(cartElement);
  });
});

updateCartTotal(cartElement);
