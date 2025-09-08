import {cartProducts,addToCart,loadCartProductsFromStorage} from "../../data/cart.js"

//TEST SUITE
describe("TEST SUITE : CART RELATED TESTS",()=>{
    //TESTCASE
    it("Adding a new product to the cart",()=>{
        //MOCKS - TO TEST A FLAKY TEST
        spyOn(localStorage,"getItem").and.callFake(()=>{
            return JSON.stringify([])
        })
        loadCartProductsFromStorage()
        console.log(localStorage);
        
        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6",1)
        expect(cartProducts.length).toEqual(1)
    })
})