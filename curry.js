// curry function takes one argument only at each function
// Below created add function which takes a as arg and return another function which takes b as arg and add a + b;
// Currying is the process of converting multiple arguments to functions which takes only one arg each.
const add = a => b => a + b;

console.log(add(2)(3));
console.log(add(5));

// increment pass 1 to add function and 'a' initialize to 1 in its lexical scope and returns another function
// The parentheses in the example below represent function invocations: add is invoked with 2, which returns a partially applied function with a fixed to 2.
const increment = add(2);
// Instead of assigning the return value to a variable or otherwise using it, we immediately invoke the returned function by passing 3 to it in parentheses, which completes the application and returns 5.
console.log(increment(5));

/****
Partial applications can take as many or as few arguments a time as desired. Curried functions on the other hand always return a unary function: a function which takes one argument.
All curried functions return partial applications, but not all partial applications are the result of curried functions.
The unary requirement for curried functions is an important feature.
 *******/

 // below is a curried function since it accepts only 1 arg
 const sum = a => b => c => d => a + b + c + d;

 // below is a partial function because we pass only 1 arg so it returns a function which takes 3 arg but is not a curried function
 const addSome = sum(1);

 const addSome2 = addSome(2);
 const addSome3 = addSome2(3);
 const addSome4 = addSome3(4);

 const sum = (a, b) => d => a + b + d; 

