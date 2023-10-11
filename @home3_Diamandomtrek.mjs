import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question('Geef de hoogte van de diamand: '));
let midden = (hoogte + 1) / 2



for (let i = 1; i <= midden; i++) {
    let rij = '';
    for (let j = 1; j <= midden - i; j++) {
        rij += ' ';
    } rij += '*'
    for (let k = 2; k < 2*i-1; k++) {
        rij += ' ';
    } 
    if (i > 1) {
        rij += '*'
    }
    console.log(rij)
}



for (let i = midden - 1; i >= 1; i--) {
    let rij = '';
    for (let j = 1; j <= midden - i; j++) {
        rij += ' '
    } rij += '*';
    for (let k = 2; k < 2*i-1; k++) {
        rij += ' ';
    }
    if (i > 1) {
        rij += '*';
    }
    console.log(rij)
}




process.exit();