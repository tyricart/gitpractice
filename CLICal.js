// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js

// console.log("Welcome to Node CLI Calculator App");
// console.log("");
// console.log("Please read the acceptance criteria to get started.");

// Intro

// Ask for user name

// Ask what a operation they want to complete

// Ask user for first number

// Ask user for second number

// complete operation / display output

// ask user if they want to run again or exit

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
function addition(firstNum, secondNum){
  const result = firstNum + secondNum
  return result
} 
function subtraction(firstNum, secondNum){
  const result = firstNum - secondNum
  return result
}

function multiplication(firstNum, secondNum){
  const result = firstNum * secondNum
  return result
}

function division(firstNum, secondNum){
  return firstNum / secondNum
}

const prompt = require('prompt-sync')();
const name = prompt("What is your name? ") // assignment is = 
  console.log(`Hi ${name}!`);

while (runAgain){
  
}
let i = 0; 
while i === "Yes"
const mathOperator = prompt(`+, -, *, / `)

const num1 = prompt("What is your first number? ")
const num2 = prompt("What is your second number? ")

if (mathOperator === "+"){
const value = addition(Number(num1), Number(num2))
console.log(value)
}
if (mathOperator === "-"){
  const value = subtraction(Number(num1), Number(num2))
  console.log(value)
}
if (mathOperator === "*"){
  const value = multiplication(Number(num1), Number(num2))
  console.log(value)
}
if (mathOperator === "/"){
  const value = division(Number(num1), Number(num2))
  console.log(value)
}

const runAgain = prompt("Would you like to run again? (Yes/No) ")
if (runAgain === "Yes"){
  console.log();
} else {
  console.log("Thanks and have a great day!")
}
