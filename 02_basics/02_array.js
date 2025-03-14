const marvel_heros = ["thor", "Ironman","venom"];
const dc_heros = ["superman", "batman", "aquaman"];

marvel_heros.push(...dc_heros); // Add all elements from dc_heros to marvel_heros
marvel_heros.push(dc_heros); // Add dc_heros as a single element to marvel_heros.
console.log(marvel_heros);
console.log(marvel_heros[3][1]); // u
console.log(marvel_heros[3][0]); // s

//using concat
const marvel_heros_concat = [...marvel_heros, ...dc_heros];
console.log(marvel_heros_concat);

const all_Heros = marvel_heros.concat(dc_heros)
console.log(all_Heros); 

//spread operator
const marvel_heros_spread = [...marvel_heros, ...dc_heros];
console.log(marvel_heros_spread);

const another_array = [1 ,2 ,3 [4, 5, 6], 7, [6, 7, [4, 5]]];

//flat
const flat_array = another_array.flat(Infinity); // Infinity is used to flatten all levels of nested arrays
console.log(flat_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "Hitesh"}));  //interesting one
// console.log(Array.from({length: 5}, (value, index) => index)); //
console.log(Array.from({length: 5}, (value, index) => index + 1)); // [1, 2, 3, 4, 5]

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2, score3)); // [100, 200, 300]



