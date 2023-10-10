import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let zijde1 = parseFloat(await userInput.question('Geef de eerste zijde: '));
let zijde2 = parseFloat(await userInput.question('Geef de tweede zijde: '));

let oppervlakte = zijde1 * zijde2;

console.log('De oppervlakte van de rechthoek is:' + oppervlakte);