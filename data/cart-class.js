class Cart{    
    cartProducts = undefined;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey
    }

    loadCartProductsFromStorage(){
        this.cartProducts = JSON.parse(localStorage.getItem(this.localStorageKey))

        if (!this.cartProducts){
            this.cartProducts = [
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
    }

    addToCart(id,productCount){
        // A VARIABLE TO STORE THE DUPLICATE ELEMENTS, IF EXISTS
        let existingProduct;

        //CHECKING WHETHER THE PRODUCT ALREADY EXISTS IN THE CART
        this.cartProducts.forEach((product)=>{
            if(id === product.productId){
                existingProduct = product
            }
        })

        //IF PRODUCT ALREADY EXISTS, INCREASING THE QUANTITY
        if(existingProduct){
            existingProduct.quantity += productCount;
        }
        else{
            this.cartProducts.push({
                productId : id,
                quantity : productCount,
                deliveryOptionId : "1"
            })
        }
        this.saveCart()
    }

    removeFromCart(id){
        let newCart = [];

        this.cartProducts.forEach((product)=>{
            if(product.productId !== id){
                newCart.push(product)
            }
        })

        this.cartProducts = newCart
        renderPaymentSummary()
        saveCart()  
    }

    //SAVING THE CART DATA TO LOCAL STORAGE
    saveCart(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartProducts))
    }

    // A FUNCTION TO CHANGE THE SHIPPING OPTIONS

    updateShippingDate(productId,deliveryId){
        let existingProduct;

        this.cartProducts.forEach((cartProduct)=>{
            if(cartProduct.productId === productId){
                existingProduct = cartProduct
            }
        })

        existingProduct.deliveryOptionId = deliveryId;
        saveCart()
    }

    updateCartTotal(element){
        let cartCount = 0;

        this.cartProducts.forEach((product)=>{
            cartCount += product.quantity
        })

        element.innerHTML = cartCount
    }
}


const carts = new Cart("business-cart")
carts.loadCartProductsFromStorage()
carts.addToCart("54e0eccd-8f36-462b-b68a-8182611d9add",1)

const cartss = new Cart("cart")
cartss.loadCartProductsFromStorage()

console.log(carts);
console.log(cartss);


//cart.addToCart("54e0eccd-8f36-462b-b68a-8182611d9add",1)


