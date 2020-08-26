let greetUser  = function() {
    console.log('Welcome User!')
}

greetUser()

let fahrenheit = 32

let tempConverter = function(val) {
    let celsius = (val - 32) * (5/9)
    return celsius
}

let convertedValue = tempConverter(fahrenheit)
console.log(convertedValue)


let fahrenheit1 = 104
let convertedValue1 = tempConverter(fahrenheit1)
console.log(convertedValue1)