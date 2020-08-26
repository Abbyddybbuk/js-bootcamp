let add = function(a, b, c) {
    return a + b + c
}

let calcValue = add(10, 17, 19)
console.log(calcValue)


let getScoreText = function(name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' -- Score: ' + score
}

let calcScore = getScoreText('Abhijeet', 90)
console.log(calcScore)

let tipCalcFn = function(total, tipPercent = .25) {
    let tipActual = tipPercent * 100
    
    let calculatedTip = total * tipPercent
    console.log(`A ${tipActual}% tip on bill of ${total} would be ${calculatedTip}`)
}

let calcTip = tipCalcFn(98)



