// Dates in Javascript

let myDate = new Date();
console.log(myDate); // Output: Current Date and Time
console.log(myDate.toString()); // Output: Current Date and Time in String format
console.log(myDate.toDateString()); // Output: Current Date in String format
console.log(myDate.toLocaleString()); // Output: Current Date and Time in String format according to the locale
console.log(typeof myDate); // Output: object
let mycreatedDate = new Date(2023, 0 , 23);
console.log(mycreatedDate.toDateString); // Output: 23/1/2023

//simailary how to get the current date and time in the format of 2023-01-23 12:00
myDate = new Date();
let year = myDate.getFullYear();
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`); // Output: Current Date and Time in the format of 2023-01-23 12:00

let mycreatedDate2 = new Date(2023, 0, 23, 5, 3, 0);
console.log(mycreatedDate2.toLocaleString); // Output: 23/1/2023, 5:3:0 AM

let mycreatedDate3 = new Date("2013-05-22")
console.log(mycreatedDate3.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // Output: Current Date and Time in Milliseconds
console.log(mycreatedDate3.getTime()); // Output: Date in Milliseconds
console.log(Math.floor(Date.now()/ 1000)); // Output: Current Date and Time in Seconds

let newDate = new  Date()
console.log(newDate.getFullYear()); // Output: Current Year
console.log(newDate.getMonth() + 1); // Output: Current Month

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: 'UTC'
    });
    // Output: Current Date and Time in the format of 2023-01-23 12:00:00 UTC 