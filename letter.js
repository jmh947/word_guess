let Letter = function(value) {
    this.value = value
    this.hidden = true
    this.updateDisplay = function(userGuess){
        if (userGuess===this.value) {
            this.hidden = false
        }
    }
}

module.exports = Letter