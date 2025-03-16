const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newnums = myNumbers.map( (num) => num + 10)
console.log(newnums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const newnums2 = myNumbers.map( (num) => {num + 10}) // we need to use return here
console.log(newnums2); /*[
                           undefined, undefined,
                           undefined, undefined,
                           undefined, undefined,
                           undefined, undefined,
                           undefined, undefined
                         ]*/

///chaining

const newnums3 = myNumbers
                    .map((num) => num * 10)
                    .map((eachnum) => eachnum + 1)
                    .filter((thenaftereachnum) => thenaftereachnum >= 40)
                    
console.log(newnums3);  //^[
                        //^    41, 51,  61, 71,
                        //^    81, 91, 101
                        //^  ]