import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let number = await userInput.question('Geef een nummer: ');


for(let i = 1; i <= number; i++) {
    let rij = ""
    for(let j = 1; j <= i; j++) {
        rij += i
    }console.log(rij);
}

process.exit();