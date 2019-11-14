var taxAmount = 0;
var taxRate = 10;

/*
 * This function is mutating a global variable taxAmount & also accessing taxRate & taxAmount. Hence performing a side-effect.
 * Due this every invocation of the function is changing the state of the application.
 */
function calculateTaxAmount(price) {
	taxAmount = taxAmount + price * taxRate / 100;
	return taxAmount;
}

calculateTaxAmount(10);
console.log(taxAmount);
calculateTaxAmount(20);
console.log(taxAmount);