import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question('Geef een hoogte: '));
let breedt = parseFloat(await userInput.question('Geef een breedte: '));

