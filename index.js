const inquirer = require("inquirer");
const word = require("./word");

var wordList = [
  "clorox",
  "quarantine",
  "coronavirus",
  "toilet paper",
  "koby bryant",
  "zoom meeting",
  "unemployment",
  "social distancing",
  "home school",
  "takeout",
  "cancelled",
  "closed",
  "personal protective equiptment",
  "ventilators",
  "stay home stay safe",
  "postponed",
  "bored",
  "global pandemic",
  "memes",
  "virtual happy hour",
  "working from home",
  "australian bushfire"

];

var choosenWord = " ";
var wordSelection = 0;
var gameWord = " ";
var counter = 0;
var userGuess = " ";

function gameStart() {
  wordSelection = Math.floor(Math.random() * wordList.length);
  choosenWord = wordList[wordSelection];
  gameWord = new word(choosenWord);
  gameWord.makeLetterArray();

  if (wordSelection > -1) {
    wordList.splice(wordSelection, 1);
  }
  
  console.log("You have 15 guesses. The theme is Events of 2020. Good Luck!");
  
  promptUser(inquirer);

  function userGuess() {
       
  };




  //check counter variable
  if (choosenWord().indexOf != wordSelection) {
    guessesLeft--;
    console.log("Incorrect! " + guessesLeft + "guesses left");
  } else {
    guessesLeft--;
    console.log("Good Pick!" + guessesLeft + "guesses left");
  }
  //as long as it is less than 15--prompt user to pick a letter
  
  if (userGuess === choosenWord) {
      console.log("Correct good job!")
  }
  //if they are out of guesses tell them you are out of guesses and give them the answer
  if (userGuess === 0) {
    return choosenWord;
    console.log("You are out of guesses, Better luck next time");
  }
};
