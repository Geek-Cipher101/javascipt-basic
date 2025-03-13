// primitive datatype
// 7 types : number, string, boolean, null, undefined, symbol, bigint


// reference datatype (non - primitive)
// 3 types : object, array, functions


const score = 100
// ?JS is dynamically typed, so we don't need to declare the type of score
// ?score is a number, but we can change it to string
// ?score = 'A' // no error, but it's not a number anymore
// ?score is now a string
console.log(score.length) // output: 1
// ?score is now a string, so we can use string methods
// ?but we can't use number methods anymore
// ?console.log(score.toFixed(2)) // error: score.toFixed is not a function
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //^ userEmail is undefined

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2) // output: false
// ?because id and id2 are two different symbols, even if they have the same value
// ?we can use symbols as unique identifiers for objects

// ?symbols are not enumerable, so they don't show up in for...in loops
// ?we can use Object.getOwnPropertySymbols() to get all the symbols of an object
const obj = {
    [Symbol('a')]: 'value ',
    b: 'value',
    c: 'value',
    }
    console.log(Object.getOwnPropertySymbols(obj)) // output: [Symbol(a)]
    // ?we can use Symbol.for() to get a symbol that can be shared across the entire application
    // ?Symbol.for() returns a symbol that is stored in the global symbol registry
    // ?we can use Symbol.keyFor() to get the key of a symbol in the global
    // ?symbol registry
    // ?we can use Symbol.hasInstance to check if an object is an instance of a class
    // ?we can use Symbol.isConcatSpreadable to check if an array can be concatenated with
    // ?another array
    // ?we can use Symbol.iterator to get the iterator of an object
    // ?we can use Symbol.toPrimitive to get the primitive value of an object
    // ?we can use Symbol.toStringTag to get the string representation of an object
    // ?we can use Symbol.species to get the constructor of an object
    // ?we can use Symbol.match to get the match of a string
    // ?we can use Symbol.replace to get the replace of a string
    // ?we can use Symbol.search to get the search of a string
    // ?we can use Symbol.split to get the split of a string
    // ?we can use Symbol.iterator to get the iterator of an object
    // ?we can use Symbol.toPrimitive to get the primitive value of an object
    // ?we can use Symbol.toStringTag to get the string representation of an object
    // ?we can use Symbol.species to get the constructor of an object

    const heros = ["Shaktimaan", "naagraj", "Bheem"]
    let myObj = {
        name : "Akshat",
        age : 28
    }

    //&function
    const myfunction = function(){
        console.log("Hello, I am a function");
    }

console.log(typeof heros); // output: object
console.log(typeof myfunction); // output: function
console.log(typeof myObj); // output: object


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* Stack memory(primitive) , heap memory(non - premitive)

let myYoutubename = "hiteshcoudharydotcom"
let anothername = myYoutubename
console.log(myYoutubename); // output: hiteshcoudharydotcom
console.log(anothername); // output: hiteshcoudharydotcom

anothername = "Chaiaurcode";
console.log(myYoutubename); // output: hiteshcoudharydotcom
console.log(anothername); // output: Chaiaurcode

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email); // output: hitesh@google.com
console.log(userTwo.email); // output: hitesh@google.com

