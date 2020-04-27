let Letter = function(value) {
    this.value = value
    this.guessed = false
    this.displayLet = function() {
        if (this.value === " ") {
            return " ";
        } 
        else if (!this.guessed) {
            return "_"
        }
        else {
            return this.value
        }
    }

    this.updateDisplay = function(userGuess){
        if (userGuess===this.value) {
            this.guessed = true
        }
    }
}

module.exports = Letter

