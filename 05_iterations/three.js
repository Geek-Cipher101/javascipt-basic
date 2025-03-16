// for of


const arr = [1, 2 , 3, 4, 5];
for (const num of arr) {
    //console.log(num); // 1, 2, 3, 4, 5
}

const greetings = "Hello Worls!";

for (const greet of greetings) {
    //console.log( `Each char is ${greet}`);   
}

// maps

const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')
map.set('name', 'Raju')
console.log(map.get('name')) 
console.log(map);

for (const key of map) {
    console.log(key); 
}
for (const [key, value] of map) {
    console.log(key, " :--" , value); 
}
const myobj = {
    "game1" : "NFS",
    "game2" : "GTA",
    "game3" : "FIFA"
}