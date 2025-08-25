export let cartProducts = JSON.parse(localStorage.getItem("cart"))

if (!cartProducts){
    cartProducts = [
        {
            productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity : 2
        },
        {
            productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity : 1
        }
    ]
}

export function addToCart(id){
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
    saveCart()  
}

//SAVING THE CART DATA TO LOCAL STORAGE
export function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cartProducts))
}