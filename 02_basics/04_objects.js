const tinderUser = new Object()
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email: "some@an.com",
    fullname:{
        userFullname:{
            firstname: "John",
            lastname: "Doe"
        }
    }
}
console.log(regularUser.fullname.userFullname.lastname); // Doe

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3) // {1: "a", 2: "b", 3: "a", 4: "b"}

const obj4 ={...obj1,...obj2} //easier
console.log(obj4); // {1: "a", 2: "b", 3: "a", 4: "b"}

const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Bob"},
];

console.log(users[1].name) // Jane
console.log(tinderUser); // {id: "123abc", name: "sam", isLoggedIn: false}

console.log(object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]
console.log(Object.hasOwn(tinderUser, 'id')) // true
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true

const course = {
    coursename: "javascript",
    price: '100',
    courseInstructor: "akshat"
}
const {courseInstructor : ins} = course
console.log(ins) // akshat 

// {                      //^json formatted
//     "name": "John",
//     cousename = "Js",
//     price = "100"
// }


