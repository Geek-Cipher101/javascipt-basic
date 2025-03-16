// Truthy values
const userEmail = "abc@example.com";

if (userEmail) {
  console.log("Email is truthy");
} else {
  console.log("Email is falsy");
}

if (userEmail.length === 0) {
  console.log("Email is empty");
}

// Falsy values
const falsyValues = [
  false, // boolean false
  0, // number zero
  -0, // negative zero
  0n, // BigInt zero
  "", // empty string
  null, // null value
  undefined, // undefined value
  NaN // Not a Number
];

// Truthy values
const truthyValues = [
  true, // boolean true
  1, // positive number
  -1, // negative number
  3.14, // floating-point number
  "a", // single character string
  "hello", // multiple character string
  " ", // string containing spaces
  [], // empty array
  [1, 2, 3], // array with elements
  {}, // empty object
  { a: 1, b: 2 }, // object with properties
  function () { }, // empty function
  function () { console.log("Hello"); }, // function with code
  Symbol("mySymbol") // symbol
];

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//&&&&&&&&&&&&&&&&& Nullish Coalescing Operator (??): null, undefined

const name = null;
const fullName = name ?? 'Unknown';
console.log(fullName); // Output: "Unknown"

function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet('Alice'); // Output: "Hello, Alice!"
greet(null); // Output: "Hello, World!"
greet(undefined); // Output: "Hello, World!"

let val1;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);

//ternary operator

//condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log  ("greater than 80 ");

// && operator
//&& operator is short-circuiting, meaning it will only evaluate the second operand if the first
//operand is truthy.
const name1 = "John";
const age = 30;
const isAdmin = true;
const isAdult = age > 18 && isAdmin;
//&& operator is short-circuiting, meaning it will only evaluate the second operand if the first
//operand is truthy.
console.log(isAdult); // Output: true

// || operator
//|| operator is also short-circuiting, meaning it will only evaluate the second operand if th
//first operand is falsy.
const name2 = "John";
const age2 = 30;

const isUserLoggedIn = false;
const isAdmin1 = true;
const isUserAdmin = isUserLoggedIn || isAdmin1;
//|| operator is also short-circuiting, meaning it will only evaluate the second operand if th
//first operand is falsy.
console.log(isUserAdmin); // Output: true

// == operator
// == operator checks for equality, but it does not check if the types of the operands are th
//same.

const num1 = 10;
const num2 = "10";

console.log(num1 == num2); // Output: true
// == operator checks for equality, but it does not check if the types of the operands are th
//same.
// === operator
// === operator checks for both equality and type.
const num3 = 10;

console.log(num1 === num3); // Output: true

// === operator checks for both equality and type.
// !== operator
// !== operator checks for inequality, but it does not check if the types of the operands are th
//same.

const num4 = 10;

console.log(num1 !== num4); // Output: true

// !== operator checks for inequality, but it does not check if the types of the operands are th
//same.
