var randomCharacter = require('./game.js');
var wordCons = require('./Word.js');
var letterCons = require('./Letter.js');
var inquirer = require('inquirer');
var letterGuessed = 0;

var maxGuesses = 15;

// var newLetter = new letterCons('A');
var findWord = new wordCons('');
// console.log(newLetter);
// console.log(randomCharacter);

function takeAGuess() {
    // console.log(randomCharacter);
    if (letterGuessed >= maxGuesses) {
        console.log('Game over. You have no more guesses left.');
        console.log("The random character was: " + randomCharacter);
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
        findWord.findLetter(letter); //Check
        letterGuessed++;
        if (findWord.isComplete()) {
            console.log('Yes! It was ' + randomCharacter + '!');
            return; //Winner
        }
        console.log('\nYou have ' + (maxGuesses - letterGuessed) + ' guesses left.')
        console.log('');
        takeAGuess(); //Recursive call
    }
    );
}

takeAGuess(); //Start Game
