// let fahrenheit = 32

// let celsius = (fahrenheit - 32) * (5 / 9)

// console.log(celsius)

// let kelvin = (fahrenheit + 459.67) * (5 / 9)

// console.log(kelvin)

let fahrenheit = 99

let tempCalculator = function(fahrenheit) {
    
    let celsius = (fahrenheit - 32) * (5 / 9)
    let kelvin = (fahrenheit + 459.67) * (5 / 9)
    return {
       fahrenheit: fahrenheit,
       celsius: celsius,
       kelvin: kelvin
    }
}

let calcTemp = tempCalculator(fahrenheit)
console.log(calcTemp)