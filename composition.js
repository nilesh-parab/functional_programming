// curry function because each accepts 1 arguments
const sum = a => b => a + b;

// inc is a partial function because sum(1) returns function & not a value
// also exhibits closures as we are initialising sum function with 1 set in the lexical scope
const increment = sum(1);

const product = a => b => a * b;

const multiplyBy2 = product(2);

const subtract = a => b => a - b;

const decrement = subtract(1);

// this function composes mulitiple functions using reduceRight function
const compose = (...fns) => x => fns.reduceRight((accumlator, currValue) => currValue(accumlator), x)

// partially applied compose function
const opsComposed = compose(increment, multiplyBy2, decrement);

console.log(opsComposed(2));

console.log(decrement(2));

// another example of composition
const incAndMul = n => multiplyBy2(increment(n));

console.log(incAndMul(10));

// Trace is useful for debugging composed / curried functions
const trace = label => value => {
	console.log(`${ label }: ${ value }`);
	// returning original value because trace has to pass value to other functions in the pipeline
	return value;
}

// Note here we are using partiall functions here as value will be passed during reduce
const traceComposed = compose(
		trace('after increment'), 
		increment, 
		trace('after multiplyBy2'), 
		multiplyBy2, 
		trace('after decrement'), 
		decrement);

traceComposed(20);

// compose is generally evaluating right to left whereas pipe evaluates left to right