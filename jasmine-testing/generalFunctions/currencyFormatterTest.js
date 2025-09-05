import { formatCurrency } from "../../scripts/generalFunctions/currencyFormatter.js";

//A TEST - SUITE IN JASMINE TESTING FRAMEWORK   describe(testSuiteName,function())
describe("Test Suite : Currency Formatter",()=>{
    //TESTCASE NAME IN JASMINE TESTING FRAMEWORK    it(testCaseName,function())
    it("Whole number to a decimal",()=>{
        //CONDITION IN JASMINE TESTING FRAMEWORK    expect(testing function) {returns an object}
        expect(formatCurrency(2025)).toEqual("20.25")
    })

    it("0 to a decimal",()=>{
        expect(formatCurrency(0)).toEqual("0.00")
    })

    it("decimal to the nearest decimal",()=>{
        expect(formatCurrency(2000.5)).toEqual("20.01")
    })
})