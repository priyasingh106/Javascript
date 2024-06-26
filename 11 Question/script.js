// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let str = new Date();
let year = str.getFullYear();
console.log(year);
let month = str.getMonth();
console.log(month);
let date = str.getDate();
console.log(date);
let day = str.getDay();
console.log(day);
let hour = str.getHours();
console.log(hour);
let minute = str.getMinutes();
console.log(minute);
let pastTime = new Date("Jan 1, 1970 19:45:25");
let presentTime = new Date("Jun 26, 2024 19:45:25");
let seconds = Math.abs(pastTime.getTime() - presentTime.getTime())/1000;
console.log(seconds);