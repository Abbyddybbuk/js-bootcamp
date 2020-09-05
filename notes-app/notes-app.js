// Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query All and Remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     console.log(p.textContent)
//     p.textContent = '**Balle*****Balle*******Balle*********'
//     // p.remove()
// })

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'Good Job! You have a added a new paragraph from JavaScript'
// document.querySelector('body').appendChild(newParagraph)
const notes = [{
    title: 'My Next Trip',
    body: 'I want to travel to Norway'
}, {
    title: 'Habbits to work on',
    body: 'Do Suryanamaskar daily'
}, {
    title: 'Carry on with you learning',
    body: 'On Track'
}, {
    title: 'Good times are ahead!',
    body: 'For Sure'
}]

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'Omg! You just clicked create-note'
    console.log('Create-note Button Clicked')
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

const user = {
    name: 'Abhijeet',
    age: 35
}

// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem('user', userJSON)

const userJSON = localStorage.getItem('user')
console.log(JSON.parse(userJSON))

localStorage.removeItem('user')

// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })
