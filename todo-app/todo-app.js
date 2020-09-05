const todos = getSavedTodos()

let searchText = ''
renderedNotes(todos, searchText)

const addNewTask = function(newTask, status) {
    let newTodo = {
        task: newTask,
        completed: status
    }

    todos.push(newTodo)
    // localStorage.setItem('todo', JSON.stringify(todos))
    saveTodo(todos)
}

const completedTodos = function(todos, status) {
    const filteredNotes = todos.filter(function(todo) {
        return todo.completed === true
    })
    
    document.querySelector('#todos').innerHTML = ''

    filteredNotes.forEach(function (todo) {
        let notesUpd = document.createElement('p')
        if (todo.task.length > 0) {
            notesUpd.textContent = todo.task
        } else {
            notesUpd.textContent = 'Unnamed Task'
        }
        
        document.querySelector('#todos').appendChild(notesUpd)
    })   
}

// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     renderedNotes(todos, e.target.value)
// })

const fetchDbTodos = function(key) {
    let todoDbJSON = localStorage.getItem(key)    
    let todoObject = JSON.parse(todoDbJSON)
    
    document.querySelector('#todos').innerHTML = ''
    todoObject.forEach(function (todo) {
        let notesFl = document.createElement('p')
        notesFl.textContent = todo.task
        document.querySelector('#todos').appendChild(notesFl)        
    })

}

document.querySelector('#todo-form').addEventListener('submit', function(e) {    
    e.preventDefault()
    addNewTask(e.target.elements.newTodo.value, false)
    console.log(e.target.elements.newTodo.value)
    e.target.elements.newTodo.value = ''

    fetchDbTodos('todo')
    generateSummaryDOM()
})
    
document.querySelector('#completed-task').addEventListener('change', function(e) {
    if (e.target.checked) {
       completedTodos(todos, true)
    } else {
        let initialValue = ''
        renderedNotes(todos, initialValue)
    }
})
