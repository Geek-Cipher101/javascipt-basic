// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if( i == 5){
//         console.log(" 5 is best number ");
//     }
//     console.log(element);
// }

//use of ctrl + d is to select all duplicates in the text of the code editor

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop value : ${j} and outer loop value : ${i}`);
        //console.log(i + '*' + j + "=" + (i * j));
    }
}
let myArray = ["flash", "superman", "batman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//break  and continue

for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log(`detected 5 and break the loop`);
        break;
    }
    console.log((`Value of i is ${index}`));
}
for (let index = 0; index <= 10; index++) {
    if(index == 5){
        console.log(`detected 5 and continue the loop`);
        continue;
    }
    console.log((`Value of i is ${index}`));
}
// 

// alt + shift + down arrow to duplicate the line of code

i = 0;
while (i < 10) {
    if (i == 5) {
        break;
    }
    console.log(i);
    i++;
}
i = 0;
while (i < 10) {
    if (i == 5) {
        continue;
    }
    console.log(i);
    i++;
}
