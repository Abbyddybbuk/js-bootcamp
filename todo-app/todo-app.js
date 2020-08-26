const todos = [{
    task: 'Do Surya Namaskar',
    completed: false
}, {
    task: 'Do office work',
    completed: false
}, {
    task: 'Play with Ayaan',
    completed: true
}, {
    task: 'Study for better job prospects',
    completed: true
}, {
    task: 'Walk with Kanu and Ayaan',
    completed: false
}]

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     console.log(p.textContent)
//     if (p.textContent.includes('Do')) {
//         p.remove()
//     }
// })

todos.forEach(function(todo) {
    let newParagraph = document.createElement('p')
    newParagraph.textContent = todo.task
    document.querySelector('body').appendChild(newParagraph)
})