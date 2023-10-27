const ps = require("prompt-sync");
const prompt = ps({sigint: true});

    let scoreYou = 0;
    let scoreComputer = 0;

function play() {

    let game = true;

    while (game) { 

        const you = Number(prompt("pick 1 for paper, 2 for rock or 3 for scissors: "));

        const comp = (Math.floor(Math.random()*3) +1);

        console.log(`you ${you}`)

        console.log(`comp ${comp}`)
}
}

function rockPaperScissors(a, b) {

    if (a === scissors && b === paper) {
        return "You win" && scoreYou + 1;            // scissors v paper

    } else if (a === paper && b === scissors) {
        return "Computer wins" && scoreComputer + 1; // paper v scissors

    } else if (a === scissors && b === rock) {
        return "Computer wins" && scoreComputer + 1; // scissors v rock

    } else if (a === rock && b === scissors) {
        return "You win" && scoreYou + 1;            // rock v scissors

    } else if (a === paper && b === rock) {
        return "You win" && scoreYou + 1;            // paper v rock

    } else if (a === rock && b === paper) {
        return "Computer wins" && scoreComputer + 1; // rock v paper

    } else if (a === b) {
        return "draw";
    }
}

play ()
