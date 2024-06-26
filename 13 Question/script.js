// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userInput = 10;
let ageCriteria = 18;
if(userInput >= 18){
    console.log("You are old enough to drive");
}else{
    let userCurrentAge;
    for(let i = 1; i <= userInput; i++){
        userCurrentAge++;
        console.log(userCurrentAge);
        // let yearsLeft = `${ageCriteria-userCurrentAge}`
        // console.log(`wait for ${yearsLeft} to turn 18`);
        
        
    }
}
