const color = require('ansi-colors')
const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

let scoreUser = 0;
let scoreComputer = 0;

function playGame() {

    let game = true;

    while (game) {

        const user = Number(prompt("pick 1 for paper, 2 for rock or 3 for scissors: "));

        const computer = (Math.floor(Math.random() * 3) + 1);

        console.log(`you ${user}`)

        console.log(`comp ${computer}`)

        console.log(rockPaperScissors(user, computer))

        console.log(`You're score ${scoreUser}, Computer's score: ${scoreComputer}`)
    }
}

function rockPaperScissors(a, b) {

    if (a === 3 && b === 1) {
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 1 && b === 3) {
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === 3 && b === 2) {
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === 2 && b === 3) {
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 1 && b === 2) {
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 2 && b === 1) {
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === b) {
        return color.blue("draw!");
    } else {
        return color.red("Error")
    }
}


playGame()
