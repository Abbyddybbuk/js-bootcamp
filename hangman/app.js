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

// Make an Http Request
const countryCode = 'IN'
const request1 = new XMLHttpRequest()
request1.open('GET', 'http://restcountries.eu/rest/v2/all')
request1.send()

request1.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        let countries = JSON.parse(e.target.responseText)
        const myCountry = countries.find((country) => country.alpha2Code === countryCode )        
        console.log(myCountry.name)
    } else if (e.target.readyState === 4) {
        console.log('An Error occured dude!')
    }
})

