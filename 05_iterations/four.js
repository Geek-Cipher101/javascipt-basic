const myobj = {
    "game1" : "NFS",
    "game2" : "GTA",
    "game3" : "FIFA"
}

for (const key in myobj) {
    console.log(key);
}

for (const key in myobj) {
    console.log(myobj[key]);
}

for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);
}

const programming= [ "C", "C++", "Java", "Python" ];

for (const key in programming) {
    console.log(programming[key]); 
}


const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')
map.set('name', 'Raju')

for (const key in map) {
    console.table(key);
}