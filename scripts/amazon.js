import { cartProducts } from "../data/cart.js"
import { products } from "../data/products.js"
import { formatCurrency } from "./generalFunctions/currencyFormatter.js"

const productElement = document.querySelector(".products-grid")
const cartElement = document.querySelector(".cart-quantity")

//GENERATING THE HTML
products.forEach((product)=>{
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
                src="images/ratings/rating-${product.rating.stars*10}.png">
                <div class="product-rating-count link-primary">
                    87
                </div>
            </div>

            <div class="product-price">
                &pound;${formatCurrency(product.priceInCents)}
            </div>

            <div class="product-quantity-container">
                <select>
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

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary"
            data-product-id = "${product.productId}">
                Add to Cart
            </button>
        </div>
    `
})

function addToCart(id){
    // A VARIABLE TO STORE THE DUPLICATE ELEMENTS, IF EXISTS
    let existingProduct;

    //CHECKING WHETHER THE PRODUCT ALREADY EXISTS IN THE CART
    cartProducts.forEach((product)=>{
        if(id === product.productId){
            existingProduct = product
        }
    })

    //IF PRODUCT ALREADY EXISTS, INCREASING THE QUANTITY
    if(existingProduct){
        existingProduct.quantity +=1;
    }
    else{
        cartProducts.push({
            productId : id,
            quantity : 1
        })
    }
}

//LOCATING THE ADD TO CART BUTTON
const addBtn = document.querySelectorAll(".add-to-cart-button");

//ADDING PRODUCTS TO THE CART ON BUTTON CLICK
addBtn.forEach((product)=>{
    product.addEventListener("click",()=>{
        const productId = product.dataset.productId;

        console.log(cartProducts);
        
        addToCart(productId)
        updateCartQuantity()         
    })    
})

function updateCartQuantity(){
    let cartCount = 0;

    cartProducts.forEach((product)=>{
        cartCount += product.quantity
    })

    cartElement.innerHTML = cartCount
}




