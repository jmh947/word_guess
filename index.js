const inquirer = require("inquirer")
const word = require("./word")

var wordList = ["test"];
var choosenWord = " ";
var wordSelection = 0;
var gameWord = " ";
var counter = 0;

function gameStart() {
    wordSelection = Math.floor(Math.random() * wordList.length);
    choosenWord = wordList[wordSelection];
    gameWord = new word(choosenWord);
    gameWord.makeLetterArray();

    if (wordSelection > -1) {
        wordList.splice(wordSelection, 1);
    }
    console.log("You have 15 guesses. Good Luck!");
promptUser();
}


