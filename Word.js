// * **Word.js**: 
// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var letter = require('./Letter.js');

class word {
    constructor(value) {
        this.value = value.split('');
        this.letters = [];
        this.guessesMade = '';
        for (var i = 0; i < this.value.length; i++) {
            this.letters.push(new letter.Letter(this.value[i]));
        }
    }
    isComplete() {
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].show) {
                return false;
            }
            return true;
        }
    }
    findLetter(letter) {
        var lowerLetter = letter.toLowerCase();
        if (this.guessesMade.indexOf(lowerLetter) != -1) {
            return console.log('\nDuplicate letter, try again.');
        }
        this.guessesMade += lowerLetter; //Record the guess
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].value.toLowerCase() == lowerLetter) {
                this.letters[i].show = true;
            }
        }
    }
    toString() {
        var output = '';
        for (var i = 0; i < this.letters.length; i++) {
            output += this.letters[i].printInfo();
        }
        return output;
    }
};

module.exports = word;