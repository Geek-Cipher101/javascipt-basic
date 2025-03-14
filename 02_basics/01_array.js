//array

const myArr = [2, 4, 5];

const myArr2 = [...myArr, 6, 7];

const myArr3 = new Array(1 , 2, 3);

console.log(myArr2[4]); // 7

// array methods

myArr.push(6)
console.log(myArr); // [2, 4, 5, 6]
myArr.pop();
console.log(myArr); // [2, 4, 5]

myArr.unshift(1);
console.log(myArr); // [1, 2, 4, 5]

//shift
myArr.shift();
console.log(myArr); // [2, 4, 5]

//slice
console.log(myArr.slice(1, 3)); // [4, 5]

//splice
myArr.splice(1, 0, 'a');    
console.log(myArr); // [2, 'a', 4, 5]

//splice with 2 arguments
myArr.splice(1, 1, 'b');
console.log(myArr); // [2, 'b', 4, 5]

console.log(myArr.includes(9)); // false
console.log(myArr.includes(4)); // true
//includes method returns true if the value is found in the array, false otherwise. 
//includes method is case sensitive.

console.log(myArr.indexOf(4)); // 2

console.log(myArr.lastIndexOf(4)); // 2
//indexOf method returns the index of the first occurrence of the specified value, or -1 if it
//is not found.

const newArr = myArr.join()
console.log(newArr); // 2,4,5
//join method returns a string with all elements of the array separated by commas.
//join method is case sensitive.

console.log(typeof newArr); // string

//differnce between splice and slice and what are changes in original array?

//splice changes the original array and returns the deleted elements
//slice returns a new array and does not change the original array

