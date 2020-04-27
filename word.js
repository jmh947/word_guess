let Letter = require("./letter")
let Word = function(wordArr) {
    this.wordArr = wordArr
    this.testWord = []
    
    this.makeWord = function() {
        for (let i = 0; i < wordArr.length; i++) {
            let letter = new Letter(wordArr[i])
                if (letter.value===" ") {
                    letter.hidden = false
                }
        this.testWord.push(letter)
        
        }
        this.displayWord = function() {
            var wordDisplay = [];
            for (let i = 0; i < this.testWord.length; i++) {
                wordDisplay.push(this.testWord[i].displayLet())
               
           }
           return wordDisplay.join(" ");
       }
       this.checkGuess = function(userGuess) {
           for (let i = 0; i < this.testWord.length; i++) {
              this.testWord[i].updateDisplay(userGuess)
               
           }
       }
    }
}

module.exports = Word