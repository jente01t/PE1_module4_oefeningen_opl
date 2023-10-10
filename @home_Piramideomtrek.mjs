import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";
const userInput = readline.createInterface({ input, output });

let outline = true;
let height = parseFloat(await userInput.question("Geef de hoogte: "));

if (outline) {
  for (let i = 1; i <= height; i++) {
    let ster = "";
    for (let j = 2; j <= i; j++) {
      ster += " ";
    }
    for (let k = 1; k <= 1; k++) {
      ster += "*";
    }
    console.log(ster);
  }
}

if (outline == false) {
  for (let i = -0; i <= height; i++) {
    let ster = "";
    for (let j = 1; j <= i; j++) {
      ster += "*";
    }
    console.log(ster);
  }
}

process.exit();
