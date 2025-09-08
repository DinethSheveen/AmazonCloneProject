import { cartProducts, removeFromCart, saveCart, updateCartTotal, updateShippingDate} from "../../data/cart.js";    //NAMED EXPORT
import { products } from "../../data/products.js";
import { formatCurrency } from "../generalFunctions/currencyFormatter.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";  //DEFAULT EXPORT
import {deliveryOptions} from "../../data/delivery.js"
import { renderPaymentSummary } from "./paymentSummary.js";

const cartElements = document.querySelector(".order-summary")
const header = document.querySelector(".js-cart-total")

export function renderOrderSummary(){
    cartElements.innerHTML = ""
    cartProducts.forEach((cartProduct)=>{    
        let productId = cartProduct.productId;
        let existingElement;
        products.forEach((product)=>{
            if(product.productId === productId){
                existingElement = product
            }
        })

        //SELECTS THE DELIVERY OPTION AND CHANGES THE HEADER AS PER CHOICE
        let shippingDate = "";
        deliveryOptions.forEach((deliveryOption)=>{
            if(cartProduct.deliveryOptionId === deliveryOption.deliveryId){
                shippingDate = dayjs().add(deliveryOption.deliveryDays,"days").format("dddd, MMMM DD")
            }
        })

        cartElements.innerHTML +=`
            <div class="cart-item-container cart-item-container-${existingElement.productId}">
                <div class="delivery-date">
                Delivery date: ${shippingDate}
                </div>

                <div class="cart-item-details-grid">
                <img class="product-image"
                    src="${existingElement.productImage}">

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${existingElement.productName}
                        </div>
                        
                        <div class="product-price">
                            &pound${(formatCurrency(existingElement.priceInCents)*cartProduct.quantity).toFixed(2)}
                        </div>
                            
                        <div class="product-quantity">
                            <span>
                                Quantity: <span class="quantity-label">${cartProduct.quantity}</span>
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

                        ${renderDateHTML(existingElement,cartProduct)}
                        
                    </div>
                </div>
            </div>
        `    
    })

    document.querySelectorAll(".delete-quantity-link").forEach((product)=>{
        product.addEventListener("click",()=>{
            //REMOVING THE PRODUCT FROM THE CART
            let productId = product.dataset.productId;

            //REMOVING THE PRODUCT CONTAINER ONCE THE DELETE LINK IS CLICKED 
            const containerProduct = document.querySelector(`.cart-item-container-${productId}`)
            containerProduct.remove()
            removeFromCart(productId)  
            updateCartTotal(header)  
            saveCart()    
        })
    })

    //FUNCTION TO GENERATE THE HTML FOR THE DELIVERY OPTIONS
    function renderDateHTML(existingElement,product){
        let html = ""

        deliveryOptions.forEach((deliveryOption)=>{
            const today = dayjs()
            let deliveryDate = today.add(deliveryOption.deliveryDays,"days") 
            let dateString = deliveryDate.format("dddd, MMMM DD");
            let priceString = deliveryOption.deliveryPriceInCents


            //CHECKING WHAT RADIO BUTTON SHOULD BE CHECKED
            let shippingOption = product.deliveryOptionId === deliveryOption.deliveryId ? "checked" : ""

            html += `
            <div class="delivery-option" data-product-id = "${existingElement.productId}" data-delivery-id = "${deliveryOption.deliveryId}">
                <input type="radio" ${shippingOption} class="delivery-option-input" name="${existingElement.productId}">
                <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString === 0 ? "FREE" : formatCurrency( priceString)} - Shipping
                    </div>
                </div>
            </div>
            `
        })
        return html
    }

    document.querySelectorAll(".delivery-option").forEach((option)=>{
        option.addEventListener("click",()=>{
            const {productId,deliveryId} = option.dataset
            updateShippingDate(productId,deliveryId)
            renderOrderSummary()
            renderPaymentSummary()
        })
    })
}

updateCartTotal(header)