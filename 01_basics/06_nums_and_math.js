const score = 400
const balance = new Number(100)
console.log(score); // 400
console.log(balance); //[Number: 100]

console.log(balance.toString().length); // 3
console.log(balance.toFixed(4)); // 100.0000

const otherNumber = 23.8999
console.log(otherNumber.toPrecision(2)) // 23.9

const otherNumber2 = 122.999
console.log(otherNumber2.toPrecision(2)) // 123

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000

//!const hundreds2 = 1000000
//!console.log(hundreds2.toLocaleString(en-IN)); // 1,00,00,000

//* ******************************* MATHS **************************************

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.max(4, 5, 6)); // 6
console.log(Math.min(4, 5, 6)); // 4
console.log((Math.random() * 10) + 1); // 1.1234567890123456

const min = 10;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 34
//explaination of above line
// Math.random() * (max - min + 1) generates a random number between 0 
// and max - min + 1. 
//Math.floor() rounds down to the nearest whole number.
// Adding min to the result shifts the range to start at min.
