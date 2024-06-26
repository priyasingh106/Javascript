// 09. Boolean value is either true or false.
//     - Write three JavaScript statement example which provide truthy value.
//     - Write three JavaScript statement example which provide falsy value.

// truthy statements
let age = 19;
if(age > 18){
    console.log('You are 18 above');
}else{
    console.log('You are under 18');
}
 
let studentGrade = 90;
if(studentGrade > 40){
    console.log("you are pass");
}else{
    console.log("you are fail");
}

let waterConsumption = 3;
if(waterConsumption >= 3){
    console.log('goal accomplished, you are hydrated enough');
}else if(waterConsumption == 2 ){
    console.log('you are almost there');
}else if(waterConsumption == 1){
    console.log("you need to drink more water");
}else{
    console.log('you are dehydrated');
}

// falsy statements

let age2 = 10;
if(age2 > 18){
    console.log('You are 18 above');
}else{
    console.log('You are under 18');
}
 
let studentGrade2 = 33;
if(studentGrade2 > 40){
    console.log("you are pass");
}else{
    console.log("you are fail");
}

let waterConsumption2 = 0;
if(waterConsumption2 >= 3){
    console.log('goal accomplished, you are hydrated enough');
}else if(waterConsumption == 2 ){
    console.log('you are almost there');
}else if(waterConsumption == 1){
    console.log("you need to drink more water");
}else{
    console.log('you are dehydrated');
}
