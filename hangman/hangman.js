const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c']
}


Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }


    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }
}

const game1 = new Hangman('cat', 2)
// game1.makeGuess('c')
// game1.makeGuess('t')
// game1.makeGuess('z')


window.addEventListener('keypress', function(e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)    
})

// const game2 = new Hangman('Hakunacatata', 6)
// game1.makeGuess('k')
// console.log(game2.getPuzzle())