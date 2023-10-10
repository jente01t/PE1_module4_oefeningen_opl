import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let startTop = true;
let startLeft = false;
let height = 3;

if (startTop && startLeft) {
    let ster = "";

    for (let i = 1; i <= height; i++) {
        ster = ster + "*";
        console.log(ster);
    }
}

else if (startLeft) {
    for (let i = height; i >= 1; i--) {
        let ster = "";
        for (let j = 1; j <= i; j++) {
            ster = ster + "*";
        }
        console.log(ster);
    }
}

else if (startTop) {
    for (let i = 1; i <= height; i++) {
        let ster = '';
        for (let j = 1; j <= height - i; j++) {
            ster += ' '
        } for (let k = 1; k <= i; k++) {
            ster += "*"
        } console.log(ster);
    }
}






process.exit();
