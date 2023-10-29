const color = require('ansi-colors')
const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

let scoreUser = 0;
let scoreComputer = 0;

function playGame() {

    let game = true;

    while (game) {

        const user = Number(prompt("pick 1 for paper, 2 for rock or 3 for scissors or press 0 to exit: ")); // prompt that the user sees

        const computer = (Math.floor(Math.random() * 3) + 1);   // how the computer picks a random number between 1 and 3

        console.log(`you ${user}`)  // displays what number the user picked

        console.log(`comp ${computer}`) // displays what number the computer picked

        console.log(rockPaperScissors(user, computer))

        console.log(`You're score ${scoreUser}, Computer's score: ${scoreComputer}`)    // score system that tells user what their score is vs computer
        
        if (user === 0 || user > 3) {   // if user input is "0" then the game is exited
            game = false;
        }
    }
}

function rockPaperScissors(a, b) {

    if (a === 3 && b === 1) {           // scissors v paper
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 1 && b === 3) {    // paper v scissors
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === 3 && b === 2) {    // scissors v rock
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === 2 && b === 3) {    // rock v scissors
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 1 && b === 2) {    // paper v rock
        scoreUser += 1;
        return color.green("You win!");

    } else if (a === 2 && b === 1) {    // rock v paper
        scoreComputer += 1;
        return color.red("Computer wins!");

    } else if (a === b) {               // draw
        return color.blue("draw!");

    } else if (a === 0) {               // exit feature
        return color.red("Goodbye")

    } else {                            // error function
        return ("Please enter a valid number")
    }
}


playGame()
