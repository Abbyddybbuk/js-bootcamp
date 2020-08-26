let password = 'Abhijeet@12345password'


let isValidPassword = function(password) {
    if ((password.length < 8 ) || (password.includes('password'))) {
        return 'Invalid Password'
    } else {
        return 'Valid Password'
    }
}

let validatePassword = isValidPassword(password)
console.log(validatePassword) 