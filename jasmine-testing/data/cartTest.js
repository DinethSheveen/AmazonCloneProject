import {cartProducts,addToCart,loadCartProductsFromStorage} from "../../data/cart.js"

//TEST SUITE
describe("TEST SUITE : CART RELATED TESTS",()=>{
    //TESTCASE - 01
    it("Adding a new product to the cart",()=>{
        //MOCKS - TO TEST A FLAKY TEST
        spyOn(localStorage,"getItem").and.callFake(()=>{
            return JSON.stringify([])
        })
        loadCartProductsFromStorage()
        
        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6",1)
        expect(cartProducts.length).toEqual(1)
        expect(cartProducts[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6")
        expect(cartProducts[0].quantity).toEqual(1)
    })
})