#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-6:"
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations:) you guessed the Right Number.");
}
else {
    console.log("OOPS :( You Guessed the Wrong Number");
}
