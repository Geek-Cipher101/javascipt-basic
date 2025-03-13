const name = "akshat"
const repocount = 45

//console.log(name + repocount + " Value");
console.log(`Hello , my name is ${name} and I have ${repocount} repositories`);

const gameName = new String("Game of Thrones");

console.log(gameName[0]); // prints G
console.log(gameName.__proto__); // prints [String: 'Game of Thrones']
console.log(gameName.length); // prints 15

console.log(gameName.toUpperCase()); // prints GAME OF THRONES

console.log(gameName.charAt(6)); // prints o

console.log(gameName.indexOf('n')); // prints 8

console.log(gameName.substring(0, 6)) // prints Game of

console.log(gameName.slice(-15,-5)) // prints of Thrones

const newStringOne = "   hfiiwf    ";
console.log(newStringOne); // prints   hfiiwf

//? trim() method is used to remove the leading and trailing spaces from the string

console.log(newStringOne.trim()); // prints hfiiwf  n bn 