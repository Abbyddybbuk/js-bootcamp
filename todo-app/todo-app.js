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

const renderedNotes = function(todos, searchValue) {
    const filteredNotes = todos.filter(function(todo) {
        return todo.task.toLowerCase().includes(searchValue.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (todo) {
        let notesFl = document.createElement('p')
        notesFl.textContent = todo.task
        document.querySelector('#notes').appendChild(notesFl)
    })
}

let searchText = ''
renderedNotes(todos, searchText)

document.querySelector('#new-todo').addEventListener('input', function(e) {
    renderedNotes(todos, e.target.value)
})
