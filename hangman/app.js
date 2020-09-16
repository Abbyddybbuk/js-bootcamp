const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
   const guess = String.fromCharCode(e.charCode)
   game1.makeGuess(guess)
   puzzleEl.textContent = game1.puzzle
   guessesEl.textContent = game1.statusMessage
})

// getPuzzle( function(error, puzzle) {
//     if (error) {
//         console.log(`Error ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// getPuzzle((error, puzzle) => {
//     if (error) {
//         console.log(`Error ${error}`)
//     } else {
//         console.log(puzzle)
//     }
// })

// getPuzzle('2').then((data) => {
//    console.log(data.puzzle)
// }, (error) => {
//    console.log(`Error! ${error}`)
// })


// Make HTTP Request
const countryCode = 'IN'

getCountry(countryCode).then((myCountry) => {
    console.log(`Country Name: ${myCountry.name}`)
}).catch((error) => {
    console.log(`Error! ${error}`)
})

// getCountry(countryCode, (error, myCountry) => {
//     if (error) {
//         console.log(`Error ${error}`)
//     } else {
//         console.log(`Country Name: ${myCountry.name}`)
//     }
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response)=> {
//    if (response.status === 200 ) {
//      return response.json()
//    } else {
//        throw new Error('Unable to fetch data')
//    }
// }).then((data)=> {
//    console.log(data.puzzle)
// }).catch((error) => {
//    console.log(error)
// })


