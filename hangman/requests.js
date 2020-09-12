const getPuzzle = (callback) => {
    // Make HTTP Request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data)
        } else if (e.target.readyState === 4) {
            callback('An Error occured dude!', undefined)
        }
    })
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}

const getCountry = (countryCode, callback) => {
    const request1 = new XMLHttpRequest()

    
    request1.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {            
            let countries = JSON.parse(e.target.responseText)
            const myCountry = countries.find((country) => country.alpha2Code === countryCode)
            callback(undefined, myCountry)
        } else if (e.target.readyState === 4) {
            callback(`Country could not be identified`, undefined)
        }
    })
    request1.open('GET', 'http://restcountries.eu/rest/v2/all')
    request1.send()    
}

// const getPuzzle = function(callback) {
//     // Make HTTP Request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data)
//         } else if (e.target.readyState === 4) {
//             callback('An Error occured dude!', undefined)
//         }
//     })
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
//     request.send()
// }