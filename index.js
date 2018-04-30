var game = require('./game.js');
var wordCons = require('./Word.js');
var letterCons = require('./Letter.js');
var inquirer = require('inquirer');
var randomWord = game.randomWord;
var letterGuessed;

var myWord = new wordCons(game.randomWord);
var maxGuesses = 6;

function takeAGuess() {
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses) {
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
        myWord.findLetter(letter); //Check
        if (myWord.isComplete()) {
            console.log('Yes! It was ' + myWord.toString() + '!');
            return; //Winner
        }
        // console.log('-------------------\n'); //If we are here the game did not end. Next guess.
        console.log('\nYou have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
        console.log('');
        takeAGuess(); //Recursive call
    }
    );
}

takeAGuess(); //Start Game

module.exports = letter;