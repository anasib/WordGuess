var game = require('./game.js');
var wordCons = require('./Word.js');
var letterCons = require('./Letter.js');
var inquirer = require('inquirer');
var letterGuessed = 0;

var maxGuesses = 6;

var newLetter = new letterCons('A');
var findWord = new wordCons('');
// console.log(newLetter);
// console.log(game);

function takeAGuess() {
    console.log(game);
    if (letterGuessed >= maxGuesses) {
        console.log('Game over. You have no more guesses left.');
        return;
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function (str) {
            var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
            return regEx.test(str);
        }
    }]).then(function (letterInput) { //Game control
        var letter = letterInput.letter;
        findLetter(letter); //Check
        letterGuessed++;
        if (game.isComplete()) {
            console.log('Yes! It was ' + game + '!');
            return; //Winner
        }
        console.log('\nYou have ' + (maxGuesses - letterGuessed) + ' guesses left.')
        console.log('');
        takeAGuess(); //Recursive call
    }
    );
}

takeAGuess(); //Start Game
