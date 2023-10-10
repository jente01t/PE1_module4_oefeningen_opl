import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let user = 0;
let computer = 0;

while (true) {
    let userChoice = await userInput.question('Schaar/Steen/Papier: ');
    
    let choices = ['steen', 'papier', 'schaar'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice == "schaar") {
        if (computerChoice == "steen") {
            console.log('Computer wint');
            computer++
        } else if (computerChoice == "papier") {
            console.log('User wint');
            user++;
        } else {
            console.log('gelijk');
        }
    }

    if (userChoice == "steen") {
        if (computerChoice == "papier") {
            console.log('Computer wint');
            computer++;
        } else if (computerChoice == "schaar") {
            console.log('User wint');
            user++;
        } else {
            console.log('gelijk');
        }
    }

    if (userChoice == "papier") {
        if (computerChoice == "schaar") {
            console.log('Computer wint');
            computer++;
        } else if (computerChoice == "steen") {
            console.log('User wint');
            user++;
        } else {
            console.log('gelijk');
        }
    }

    if (user == 3 || computer == 3) {
        break;
    }
}

process.exit();