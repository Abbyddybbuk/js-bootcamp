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

const addNewTask = function(newTask, status) {
    let newTodo = {
        task: newTask,
        completed: status
    }

    todos.push(newTodo)
}

// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     renderedNotes(todos, e.target.value)
// })

document.querySelector('#todo-form').addEventListener('submit', function(e) {    
    e.preventDefault()
    addNewTask(e.target.elements.newTodo.value, false)
    console.log(e.target.elements.newTodo.value)
    e.target.elements.newTodo.value = ''

    let initialValue = ''
    renderedNotes(todos, initialValue)
    
})
