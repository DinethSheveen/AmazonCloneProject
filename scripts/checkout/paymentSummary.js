import { cartProducts } from "../../data/cart.js"
import { products } from "../../data/products.js";
import { formatCurrency } from "../generalFunctions/currencyFormatter.js";
import { deliveryOptions } from "../../data/delivery.js";

const paymentContainer = document.querySelector(".payment-summary")

export function renderPaymentSummary(){

    let totalItems = 0;
    let totalCost = 0;
    let shippingCost = 0;
    let totalBeforeTax = 0
    let tax = 0;
    let totalWithTax = 0;

    cartProducts.forEach((cartProduct)=>{
        products.forEach((product)=>{
            if(product.productId === cartProduct.productId){
                totalItems += cartProduct.quantity
                let costPerEachItem = product.priceInCents * cartProduct.quantity
                totalCost += costPerEachItem;
            }
        })

        deliveryOptions.forEach((deliveryOption)=>{
            if(cartProduct.deliveryOptionId === deliveryOption.deliveryId){
                shippingCost += deliveryOption.deliveryPriceInCents
            }
        })
    })

    totalBeforeTax = totalCost + shippingCost
    tax = totalBeforeTax * 0.10;
    totalWithTax = totalBeforeTax + tax; 

    paymentContainer.innerHTML = 
    `
        <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${totalItems}):</div>
        <div class="payment-summary-money">&pound${formatCurrency(totalCost)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">&pound${formatCurrency(shippingCost)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">&pound${formatCurrency(totalBeforeTax)}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">&pound${formatCurrency(tax)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">&pound${formatCurrency(totalWithTax)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `
}

