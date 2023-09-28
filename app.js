const readlineSync = require('readline-sync');
// const express=require('express');

// const symbols = ['/','*','-','+'];

// const userName = readlineSync.question('May I have your user name?');
// console.log('Hi' + userName + '!')

// let userQuestion = readlineSync.question('What task would you like to perform?', {
//   if (userQuestion.includes(symbols)) {

//   }
// })


const symbols = ['/', '*', '-', '+'];

const userName = readlineSync.question('May I have your name please?');
console.log(`Hi ${userName} welcome!`);

let operationFromUser = readlineSync.question(`what task would you like to perform?`);
console.log(operationFromUser);

// if (operationFromUser.includes(symbols)) {
//     if (!symbols.includes(operationFromUser)) {
//     return operationFromUser;
// } else {
    // console.log(`Sorry ${userName} This is not a valid operation`);
    // return operationFromUser = readlineSync.question(`${userName} please enter a valid operation: `);
// }
while (!symbols.includes(operationFromUser)) {
    console.log(`Sorry ${userName}, that is not a valid operation.`);
    operationFromUser = readlineSync.question(`Please choose a valid operation: `);
}



const numberFromUser = (prompt) => {
    let number = readlineSync.question(prompt);

    if (!isNaN(number)) {
        return parseFloat(number);
    }

    console.log(`Sorry ${userName} this is not a valid number.`);
    // return numberFromUser(prompt);
}

const firstNum = numberFromUser(`${userName} please enter the first number.`);
const secondNum = numberFromUser(`${userName} please enter your second number.`);

let result; 

switch (operationFromUser) {
    case '/':
        if (secondNum === 0) {
            console.log(`Error: Division by zero invalid.`);
            // return operationFromUser = readlineSync.question(`Please choose another number for your second number.`);
            return numberFromUser;
        }
        result = firstNum / secondNum;
        break;

    case '*':
        result = firstNum * secondNum;
        break;

    case '-': 
        result = firstNum - secondNum;
        break;

    case '+':
        result = firstNum + secondNum;
        break;

    default: 
        console.log(`${userName} something went wrong with the operation`);
        return
}

console.log(`The result is: ${result}`);





