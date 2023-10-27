"use strict";

const ps = require("prompt-sync");
const prompt = ps({sigint: true});

let inp = prompt("please enter, rock, paper or scissors : ");


    let scoreYou = 0;
    let scoreComputer = 0;


function rockPaperScissors(a, b) {

    if (a === scissors && b === paper) {
        return "You win" && scoreYou + 1;

    } else if (a === paper && b === scissors) {
        return "Computer wins" && scoreComputer + 1;

    } else if (a === scissors && b === rock) {
        return "Computer wins" && scoreComputer + 1;

    } else if (a === rock && b === scissors) {
        return "You win" && scoreYou + 1;

    } else if (a === paper && b === rock) {
        return "You win" && scoreYou + 1;

    } else if (a === rock && b === paper) {
        return "Computer wins" && scoreComputer + 1;

    } else if (a === b) {
        return "draw";
    }
}

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
