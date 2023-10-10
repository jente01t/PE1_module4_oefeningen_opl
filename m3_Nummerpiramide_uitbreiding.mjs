import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let startTop = true;
let startLeft = false;
let number = 3;

if (startTop && startLeft) {
    for(let i = 1; i <= number; i++) {
        let rij = ""
        for(let j = 1; j <= i; j++) {
            rij += i
        }console.log(rij);
    }
}

else if (startLeft) {
    for (let i = number; i >= 1; i--) {
        let rij = "";
        for (let j = 1; j <= i; j++) {
            rij = rij + i;
        }
        console.log(rij);
    }
}

else if (startTop) {
    for (let i = 1; i <= number; i++) {
        let rij = '';
        for (let j = 1; j <= number - i; j++) {
            rij += ' '
        } for (let k = 1; k <= i; k++) {
            rij += i
        } console.log(rij);
    }
}






process.exit();
