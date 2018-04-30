var game = require('./game.js');
var wordCons = require('./Word.js');
var letterCons = require('./Letter.js');
var inquirer = require('inquirer');
var randomWord = game.randomWord;
var letterGuessed;

var myWord = new wordCons(game.randomWord);
var maxGuesses = 6;
