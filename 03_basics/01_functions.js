function addTwoNumbers(a, b) {
    console.log(a + b); 
    return a + b;
}
console.log("Result: ",addTwoNumbers(1, 2)); // Output: 3


function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("John"));
console.log(loginUserMessage());

//rest and spread operator
function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(2, 4, 5)); // [ 2, 4, 5 ] 

const user = {
    username: "akshat",
    price : 10000000000
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // username is akshat and price is 10000000000
handleObject({
    username: "Sam",
    price: 100
});  // username is Sam and price is 100

const myNewArray = [200, 400, 100, 600]
function returnsecondValue(getArray){
    return getArray[1];
}
console.log(returnsecondValue(myNewArray)); // 400

// now direct
console.log(returnsecondValue([100, 2999, 4333, 8888])); // 2999