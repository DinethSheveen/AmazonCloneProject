import { formatCurrency } from "../../scripts/generalFunctions/currencyFormatter.js";

//BASIC TEST CASES
console.log("Test suite : Currency Formatter");
console.log("whole number to a decimal");

if(formatCurrency(2095) === "20.95"){
    console.log("passed");
}
else{
    console.log("failed");
}


//EDGE TEST CASES
console.log("0 to a decimal");
if(formatCurrency(0) === "0.00"){
    console.log("passed");
}
else{
    console.log("failed");
}

console.log("to the nearest decimal");
if(formatCurrency(2000.5) === "20.01"){
    console.log("passed");
}
else{
    console.log("failed");
}