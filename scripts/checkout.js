import { cartProducts, removeFromCart, saveCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./generalFunctions/currencyFormatter.js";

const cartElements = document.querySelector(".order-summary")

cartProducts.forEach((cartProduct)=>{
let productId = cartProduct.productId;
let existingElement;
products.forEach((product)=>{
    if(product.productId === productId){
        existingElement = product
    }
})

    cartElements.innerHTML +=`
        <div class="cart-item-container cart-item-container-${existingElement.productId}">
            <div class="delivery-date">
            Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
            <img class="product-image"
                src="${existingElement.productImage}">

                <div class="cart-item-details">
                    <div class="product-name">
                        ${existingElement.productName}
                    </div>
                    
                    <div class="product-price">
                        ${(formatCurrency(existingElement.priceInCents)*cartProduct.quantity).toFixed(2)}
                    </div>
                        
                    <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${cartProduct.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                            Update
                        </span>
                        <span class="delete-quantity-link link-primary" data-product-id = "${existingElement.productId}">
                            Delete
                        </span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="${existingElement.productId}">
                        <div>
                            <div class="delivery-option-date">
                                Tuesday, June 21
                            </div>
                            <div class="delivery-option-price">
                            FREE Shipping
                            </div>
                        </div>
                    </div>
                    
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="${existingElement.productId}">
                        <div>
                            <div class="delivery-option-date">
                                Wednesday, June 15
                            </div>
                            <div class="delivery-option-price">
                            $4.99 - Shipping
                            </div>
                        </div>
                    </div>
                    
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input"
                            name="${existingElement.productId}">
                        <div>
                            <div class="delivery-option-date">
                                Monday, June 13
                            </div>
                            <div class="delivery-option-price">
                            $9.99 - Shipping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `    
})

document.querySelectorAll(".delete-quantity-link").forEach((product)=>{
    product.addEventListener("click",()=>{
        //REMOVING THE PRODUCT FROM THE CART
        let productId = product.dataset.productId;
        let userConfirmation = confirm("Do you want to delete this product from the cart?");
        if(userConfirmation){
            removeFromCart(productId)
        }

        //REMOVING THE PRODUCT CONTAINER ONCE THE DELETE LINK IS CLICKED 
        const containerProduct = document.querySelector(`.cart-item-container-${productId}`)
        containerProduct.remove()    
        saveCart()    
    })
})

let totalProducts=0;
//FUNCTION TO UPDATE THE CART TOTAL HEADER
function updateTotalItems(){
    cartProducts.forEach((product)=>{
        totalProducts += product.quantity
    })
    document.querySelector(".js-cart-total").innerHTML = `${totalProducts} items`;
}
updateTotalItems()