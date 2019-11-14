A pure function is a function which has no side effects. It has two main characteristics:
- If you give the same parameters, you get the same result no matter what. This helps in memoization.
- It will never change its environment

A function has a side effect if something is changed during its execution. For example:
- Modifying a variable
- Modifying a data structure in place
- Setting a field on an object
- Throwing an exception or halting with an error
- Printing to the console or reading user input
- Reading from or writing to a file
- Drawing on the screen
- Reading a mutable variable
- Function depends on a local parameter / value that is randomly generated
