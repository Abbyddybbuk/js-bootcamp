// const getPuzzle = (callback) => {
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
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to get puzzle')
        }
    })
}


const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            console.log('Error123')
            throw new Error('Invalid Country Code Supplied')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}


// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const request1 = new XMLHttpRequest()


//     request1.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             let countries = JSON.parse(e.target.responseText)
//             const myCountry = countries.find((country) => country.alpha2Code === countryCode)
//             resolve(myCountry)
//         } else if (e.target.readyState === 4) {
//             reject('An Error has occured')
//         }
//     })
//     request1.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request1.send()
// })



// const getCountry = (countryCode, callback) => {
//     const request1 = new XMLHttpRequest()


//     request1.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {            
//             let countries = JSON.parse(e.target.responseText)
//             const myCountry = countries.find((country) => country.alpha2Code === countryCode)
//             callback(undefined, myCountry)
//         } else if (e.target.readyState === 4) {
//             callback(`Country could not be identified`, undefined)
//         }
//     })
//     request1.open('GET', 'http://restcountries.eu/rest/v2/all')
//     request1.send()    
// }

