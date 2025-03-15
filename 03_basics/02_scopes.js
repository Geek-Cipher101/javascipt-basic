var c = 3000;
let a = 300;
if(1){
    let a = 10
    const b = 20
    var c = 30
    //*console.log("Inner", a); // 10
}
//^console.log(a); // this will fail because a is not defined in this scope
//console.log(b); // this will fail because b is not defined in this scope
//?console.log(c); // 30

function one(){
    const username = "joe"

    function two(){
        const website = "youtube.com"
        console.log(username); // Joe
    }
    //*console.log(website); // error message
    two();
}
one();

// let and const are block scoped. They cannot be accessed outside their block.
// var is function scoped. It can be accessed outside its function. It can also be accessed
// in nested functions.
// const and let are not hoisted. They must be declared before they are used.
// const and let cannot be reassigned. They can be updated.
// const is immutable. It cannot be changed once assigned.
// let is mutable. It can be changed.

// let and const are block-scoped, meaning they are only accessible within their own block.

if(true){
    const username = "Akshat"
    if(username === "Akshat"){
    const website = " youtube"
    console.log(username + website);// Akshat youtube
    }
    //*console.log(website); // error message
}
//*console.log(username); // error message

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& interesting &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
console.log(addOne(5)); // 6
function addOne(num) {
    return num + 1;
}
addOne(5);


//addTwo(5); // this will give error as declaration of function is different
const addTwo = function(num) {
    return num + 2;
}
addTwo(5); 

