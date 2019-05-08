console.log(3 < 2 < 1); // true
// left to right associativity.
// 3 < 2 becomes false, and false is coerced into 0, and therefore 0 < 1 is true.

console.log(1 < 2 < 3); // true
// left to right associativity.
// 1 < 2 becomes true, and true is coerced into 1, and therefore 1 < 3 is true.
