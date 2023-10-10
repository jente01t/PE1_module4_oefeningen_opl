import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });


let userChoise = await userInput.question('Schaar/Steen/Papier: ');

let choices = ['steen', 'papier', 'schaar'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];






if (userChoise == "schaar") {
    if (computerChoice == "steen") {
        console.log('Computer wint');
    } else if (computerChoice == "papier") {
        console.log('User wint');
    } else {
        console.log('gelijk')
    }
}

if (userChoise == "steen") {
    if (computerChoice == "papier") {
        console.log('Computer wint');
    } else if (computerChoice == "schaar") {
        console.log('User wint');
    } else {
        console.log('gelijk')
    }
}

if (userChoise == "papier") {
    if (computerChoice == "schaar") {
        console.log('Computer wint');
    } else if (computerChoice == "steen") {
        console.log('User wint');
    } else {
        console.log('gelijk')
    }
}

process.exit();