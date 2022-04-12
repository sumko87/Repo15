// Only change code below this line
'use strict';
const product = (...args) => {
    return args.reduce((a, b) => a * b, 1);
    // Only change code above this line
}
console.log(product(1, 2)); // Change this line
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product());
module.exports = product;