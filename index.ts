#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will generate a random number
// 2) User input for guessing game
// 3) compare user input with computer generated number and show the result

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: "
    }
])
if(answers.userguessedNumber === randomNumber){
    console.log("Congratulations! You have guessed write number ");
}
else{
    console.log("Sorry! You have guessed wrong number ");
}
