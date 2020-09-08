const myAge = 17
const message = myAge > 18 ? 'You can vote!' : 'You cannot vote.'
console.log(message)

const showPage = () => 'You can enter this page'
const showErrorPage = () => 'You cannot enter this page'

const msg = myAge >= 21 ? showPage() : showErrorPage()
console.log(msg)

const team = ['A', 'B', 'C', 'E']

const msgGame = team.length <= 4 ? `Team Size ${team.length}; You can play`: `Team Size ${team.length}; You cannot play`
console.log(msgGame) 