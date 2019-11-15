Referential Transaperency means we can replace a function call with its return value.
In other words, if a function consistently returns same value for an input then we can replace function call with value.
If a function is pure & does not mutate data then its referential transparent

Example:
cont square = (n) => n * n;
square(2); // returns 4
then we can replace function call square(2) with 4