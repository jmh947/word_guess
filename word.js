let Letter = require("./letter")
let Word = function(word) {
    this.word = word
    this.wordLength = word.length
    this.guessesLeft = 15
    this.letterObjectArray = []
    this.letterArrayDisplay = []
    this.guessesSoFar = []
    this.makeLetterArray = function() {
        for (let i = 0; i < this.wordLength; i++) {
            let letter = new Letter(this.word.charAt(i))
                if (letter.value===" ") {
                    letter.hidden = false
                }
        this.letterObjectArray.push(letter)
        
        }
    }
   


















}