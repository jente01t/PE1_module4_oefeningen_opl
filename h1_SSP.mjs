import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });


let userChoise = await userInput.question('Schaar/Steen/Papier: ');

function getRandomChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  const computerChoiceOptions = ['steen', 'papier', 'schaar'];
  const computerChoice = getRandomChoice(computerChoiceOptions);





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
    }
}

if (userChoise == "papier") {
    if (computerChoice == "schaar") {
        console.log('Computer wint');
    } else if (computerChoice == "steen") {
        console.log('User wint');
    }
}

process.exit();