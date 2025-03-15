const user = {
    username: "akshat",
    price : 10000000000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }   
}

user.welcomeMessage(); // akshat, welcome to website
user.username = "Sam";
user.welcomeMessage(); // Sam, welcome to website

// function chai(){
//     let username = "sam"
//     console.log(this.username); // output : undefined
// }
//chai();


// const chai = function(){
//     let username = "sam"
//     console.log(this.username); // output : undefined
// }
//chai();

const chai = () => {
    let username = "sam"
    console.log(this.username); // output : undefined
}
chai();

const addTwo = (a , b) => {
    return a + b;
}

console.log(addTwo(5, 7)); // 12

const addtwo = (num1, num2) => num1 + num2; 
console.log(addtwo(5, 7)); // 12