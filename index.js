let Name = "anGeLa" //prompt("What is your name? ");
let firstLetter = (Name.slice(0,1));
let otherNamePart = (Name.slice(1, Name.length)) 

console.log("Hello " + firstLetter.toUpperCase() + otherNamePart.toLowerCase());

let dogAge = 12 //prompt("What is your dag age? ");
let humanAge = (dogAge - 2) * 4 + 21;
console.log("The age of the human is " + humanAge);

function getMilk(money) {   
    let bottle = money / 1.5;
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
    console.log("moveRight");
    console.log("The amount of bottle", money, "can by is", Math.floor(bottle))
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
}

getMilk(10);

function lifeInWeeks(age) {
    
    /************Don't change the code above************/
    
    //Write your code here.
    
    let dayLeft = (90 - age) * 365;
    weekLeft = (90 - age) * 52 //Math.floor(dayLeft / 7);
    monthLeft = (90 - age) * 12 //Math.floor(weekLeft / 30);
    console.log("You have", dayLeft, "days", weekLeft, "weeks", "and", monthLeft, "months left.");
}
lifeInWeeks(51);
function bmi(weight, height) {
    let formula = weight / (height * height);
    //return Math.floor(formula) 
    console.log(Math.floor(formula));
}
//let myBmi = bmi(65, 1.8);
//console.log(myBmi);
bmi(65, 1.8);

function loveCal(a, b) {
    let lovePo = Math.floor(Math.random(a, b) * 100) + 1;
    return lovePo
}
let love = loveCal(2, 4);
console.log(love);