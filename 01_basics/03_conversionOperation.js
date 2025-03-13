let score = "33abc"

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);// NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // "33"
console.log(typeof(stringNumber)); // string
// '33' => 33
// '33abc' => NaN (Not a Number)
// true => 1
// false => 0
// null => 0
// undefined => NaN
// '' => 0
// 'abc' => NaN
// 'abc123' => NaN
// '123abc' => NaN  
// '123.45' => 123.45
// '123.45.67' => NaN
// 1 => true   ///telling for boolean operations
// 0 => false   ///telling for boolean operations
// "" => false   ///telling for boolean operations
// "abc" => true   ///telling for boolean operations


// ****************************** Operations ****************************** //

let value = 3
let negValue = -value
console.log(negValue);
console.log(2**4); // 16

let str1 = "hello";
let str2 = " Akshat";
console.log(str1 - str2); // NaN
console.log(str1 + str2); // "hello Akshat"
console.log("1" + 2); // "12"
console.log(1 + "2"); // "12"
console.log("1" + 2 + 3); // "123"
console.log(1 + 2 + "3"); // "33"
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

let num1 , num2 , num3
num1 = num2 = num3 = 5 + 4
console.log(num1, num2, num3); // 48 48 48

let gamecounter = 100;
gamecounter++;
console.log(++gamecounter); // 102
