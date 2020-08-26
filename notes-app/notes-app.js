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

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'Omg! You just clicked it'
    console.log('Button Clicked')
})