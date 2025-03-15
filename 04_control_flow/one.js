// if

const isUserLoggedIn = true;

if (2 === '2') {
    console.log('Condition is true');
}

console.log(5 !== 5); // false
console.log(5 !== "5"); // true
console.log(5 !== true); // true
console.log(null !== undefined); // true
console.log("hello" !== "hello"); // false

const temperature = 41;

if (temperature > 30) {
    console.log('It is too hot');
} else if (temperature >= 20 && temperature <= 30) {
    console.log('It is just right');
} else if (temperature >= 10 && temperature < 20) {
    console.log('It is a bit cold');
} else {
    console.log('It is too cold');
}

// if-else statement with multiple conditions

const score = 200;

if (score > 100) {
    const power = "fly";
    console.log(`User power: ${power}`);
}

console.log("User power is not accessible here");

const balance = 1000;

if (balance < 500) {
    console.log("User has insufficient balance");
} else {
    console.log(`User has sufficient balance: ${balance}`);
}

if (balance > 500) {
    if (balance < 750) {
        console.log('less than 750');
    } else {
        console.log('equal to or more than 750');
    }
} else {
    console.log('less than 500');
}

const userloggedin = true;
const debitcard = true;

if (userloggedin && debitcard) {
    console.log('User is logged in and has a valid debit card');
}

const loggedinfromgoogle = false;
const loggedinfromfacebook = true;

if (loggedinfromgoogle || loggedinfromfacebook) {
    console.log('User is logged in from Google or Facebook');
}

