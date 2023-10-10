import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question('Geef een hoogte: '));
let breedte = parseFloat(await userInput.question('Geef een breedte: '));
let rij = '';
let kolom = '*'

for (let i = 1; i <= breedte; i++) {
    rij += "*"
} console.log(rij);

for (let j = 1; j <= hoogte - 2; j++) {
    kolom = '*';
    for (let k = 1; k <= breedte - 2; k++) {
        kolom += ' ';
    } console.log(kolom + '*')
}

rij = ''

for (let i = 1; i <= breedte; i++) {
    rij += "*"
} console.log(rij);




process.exit();