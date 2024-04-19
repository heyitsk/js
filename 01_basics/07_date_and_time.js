// const myDate = new Date(); // creates an object date 
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString()); // Format 2024-04-17T21:06:17.000Z
// console.log(myDate.toJSON()); // Format 2024-04-17T21:06:17.000Z
// console.log(myDate.toLocaleString());// Format 4/17/2024, 5:06:17 PM
// console.log(myDate.toLocaleDateString());// Format 4/17/2024
// console.log(myDate.toDateString()); // Format wed apr 17 2024

// const newDate = new Date(2024, 0, 12); // months starts from 0 in js 
// console.log(newDate.toDateString());
// const anotherDate = new Date(2024, 0, 12, 5, 6, 17);
// console.log(anotherDate.toLocaleString());
// console.log();
let myDate1 = new Date("2024-04-18");
// console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now(); // used when designing polls and quizez as it prints in miliseconds 
console.log(myTimeStamp); //this prints the miliseconds from 1 jan 1970 to current time 
console.log(myDate1.getTime()); // this helps to convert date into milisec and compare easily for hotel booking projects etc 
console.log(Math.floor(Date.now()/1000)); // convert time into seconds 
 

let date2 = new Date();
console.log(date2);
console.log(date2.getDate());// can use multiple methods like this 
console.log(date2.getMonth()); // month starts from 0 here so to avoid confusing we use below 
console.log(date2.getMonth()+1);


// ***** this method is used very much bcz we can customize multiple properties of dates 
let date3 = new Date(2023,04,18,10,34,14);
console.log(date3.toLocaleString());
console.log(date3.toLocaleString('default',{
    // weekday: "short"
    // dateStyle: "short"
    // minute:   "numeric"
    timeStyle: "short"
}));