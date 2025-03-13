const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345";
accountCity = "New York";
let accountState; //undefined


// accountId = 2  // not allowed

accountEmail = "Akshat@akshat.com"
accountPassword = "124444345"
accountCity = "Mumbai" 
console.log(accountId);

/*
Prefer not to use "'var'" because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);