import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";

export let cartProducts = JSON.parse(localStorage.getItem("cart"))

if (!cartProducts){
    cartProducts = [
        {
            productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity : 2,
            deliveryOptionId :"1"
        },
        {
            productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity : 1,
            deliveryOptionId : "2"
        }
    ]
}

export function addToCart(id,productCount){
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
        existingProduct.quantity += productCount;
    }
    else{
        cartProducts.push({
            productId : id,
            quantity : productCount,
            deliveryOptionId : "1"
        })
    }
    saveCart()
}

export function removeFromCart(id){
    let newCart = [];

    cartProducts.forEach((product)=>{
        if(product.productId !== id){
            newCart.push(product)
        }
    })

    cartProducts = newCart
    renderPaymentSummary()
    saveCart()  
}

//SAVING THE CART DATA TO LOCAL STORAGE
export function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cartProducts))
}

 // A FUNCTION TO CHANGE THE SHIPPING OPTIONS

export function updateShippingDate(productId,deliveryId){
    let existingProduct;

    cartProducts.forEach((cartProduct)=>{
        if(cartProduct.productId === productId){
            existingProduct = cartProduct
        }
    })

    existingProduct.deliveryOptionId = deliveryId;
    saveCart()
}

export function updateCartTotal(element){
    let cartCount = 0;

    cartProducts.forEach((product)=>{
        cartCount += product.quantity
    })

    element.innerHTML = cartCount
}