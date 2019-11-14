// var taxAmount = 0; // not used any more
const TAX_RATE = 10;

/*
 * This function is pure function which accepts a parameter, reads a constant, computes the result & returns it.
 * This example still pure because it accesses a global variable which is constant so exhibits Referencial Transparency.
 */
function calculateTaxAmount(price) {
	return price * TAX_RATE / 100;
}

console.log(calculateTaxAmount(10));
console.log(calculateTaxAmount(20));

/*
 * This function is another pure function which accepts 2 parameters, computes the result & returns it.
 */
function calculateTaxAmount2(price, taxRate) {
	return price * taxRate / 100;
}

console.log(calculateTaxAmount2(10, TAX_RATE));
console.log(calculateTaxAmount2(20, TAX_RATE));