import { formatCurrency } from "../scripts/generalFunctions/currencyFormatter.js";

//A TEST - SUITE IN JASMINE TESTING FRAMEWORK   describe(testSuiteName,function())
describe("Test Suite : Currency Formatter",()=>{
    //TESTCASE NAME IN JASMINE TESTING FRAMEWORK    it(testCaseName,function())
    it("Whole number to a decimal",()=>{
        //CONDITION IN JASMINE TESTING FRAMEWORK    expect(testing function) {returns an object}
        expect(formatCurrency(2025)).toEqual("20.25")
    })
})