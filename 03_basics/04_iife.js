// iife - immediately invoked function expressions are
// used to create a new scope for the variables used inside the function
// and to avoid polluting the global scope with the variables used inside the function.

(function () {
    let name = 'John Doe';
    let age = 30;

    function greet() {
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
    greet();
})();
// The above code will output: Hello, my name is John Doe and I am 30 years
// old. and will not pollute the global scope with the variables name and age.

(function chai(){ //^ named iife 
    console.log("DB CONNECTED");
})();

(function aurcode(){ //^ named iife 
    console.log(`DB CONNECTED TWO`);
})();

((name) =>{ //^ unnamed iife with arrow function
    console.log(`DB CONNECTED THREE ${name}`);
})("Raju");