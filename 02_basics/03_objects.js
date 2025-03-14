// objects in js
// objects are collections of key-value pairs
// objects are mutable, meaning they can be changed after they are created
// objects are reference types, meaning they are passed by reference

//singleton
//object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: 'John Doe',
    "full_name" : "John Doe Singh",
    age:30,
    [mySym] : "myKey1", // property name is symbol.
    location: " Jsgdishpur",
    email: "john.doe@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}
console.table(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]); // symbol

let str = "Hello";
let sym = Symbol("Hello");

console.log(typeof str);  // Output: "string"
console.log(typeof sym);  // Output: "symbol"

jsUser.email = "Abc@abc.com"
//Object.freeze(jsUser)
jsUser.email = "abjhbk@microsoft.com"
console.log(jsUser.email); // Output: "Abc@abc.com" // because email is
// frozen and cannot be changed.
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} JS user`); // this is the object
}
jsUser.greetingTwo(); // Output: "Hello John Doe JS user"