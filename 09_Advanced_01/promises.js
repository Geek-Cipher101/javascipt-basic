const promiseOne = new Promise(function(resolve, reject) {
    // do an ASYNC task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function (resolve, reject){
    setTimeout(function(){
        resolve({username : "Ask" , email : "Hero@Hero"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName : "Akshat" , password : "12344"})
        }
        else reject('ERROR : Something went wrong');
    }, 1000);
})

promiseFour. then((user) =>{
    console.log(user);
    return user.userName;
}).then((myUserName) => {
    console.log(myUserName);
}).catch(function(myerror){
    console.log(myerror);  
}).finally(() => console.log("The promise is either resolved or rejected")) 

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false; // Set to false to test resolve path
        if (!error) {
            resolve({ userName: "Javascripter", password: "12344" });
        } else {
            reject("ERROR: Javascripter went wrong");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
           //console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR : ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)
)