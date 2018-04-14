// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt. 

// ===========================================================================================================
var inquirer = require('inquirer');

//set the initial health amounts
var playerHealth = 100;
var zombieHealth = 30;



//attack function
//random number generator
//check if still alive

function playRound() {
    inquirer.prompt([
        {
            type: "list",
            name: "userGuess",
            message: "Try to stay alive! Guess a number between [1-5]",
            choices: ["1", "2", "3", "4", "5"]
        }
    ]).then(function(guess) {
        if ( playerHealth > 0 || zombieHealth > 0 ) {

            var damage = Math.floor(Math.random() * 5 ) + 1;

            var zombieNum = Math.floor(Math.random() * 5) + 1;
            console.log("The Zombie guessed " + zombieNum);

            if ( zombieNum === parseInt(guess.userGuess)) {
                
                zombieHealth -= damage;

                console.log('YOU HIT THE ZOMBIE WITH ' + damage + ' DAMAGE!!');
                console.log("You have " + playerHealth + " health left. \nThe zombie has " + zombieHealth + " left.");

                checkRound();
            }
            else {
                playerHealth -= damage;
                console.log('YOU GOT HIT WITH ' + damage + 'damage');
                console.log("You have " + playerHealth + " health left. \nThe zombie has " + zombieHealth + " left.");

                checkRound();
            }
        }
    });
}

function checkRound() {
    if (playerHealth <= 0) {
        console.log("you are dead");

        process.exit();
    }

    if (zombieHealth <= 0) {
        console.log('zombie is re-dead');

        process.exit();
    }

    playRound();
}
playRound();