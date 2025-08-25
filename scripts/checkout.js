import { cartProducts, removeFromCart} from "../data/cart.js";
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
            <div class="cart-item-container">
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
        let productId = product.dataset.productId;
        removeFromCart(productId)
    })
})

/*
<div class="payment-summary">
                <div class="payment-summary-title">
                    Order Summary
                </div>

                <div class="payment-summary-row">
                  <div>Items (3):</div>
                  <div class="payment-summary-money">$42.75</div>
                </div>

                <div class="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div class="payment-summary-money">$4.99</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div class="payment-summary-money">$47.74</div>
                </div>

                <div class="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div class="payment-summary-money">$4.77</div>
                </div>

                <div class="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div class="payment-summary-money">$52.51</div>
                </div>

                <button class="place-order-button button-primary">
                  Place your order
                </button>
            </div>
*/