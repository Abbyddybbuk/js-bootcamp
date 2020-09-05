const getSavedTodos = function() {
    let todoJSON = localStorage.getItem('todo')
    if (todoJSON === null) {
        return []
    } else {
        return JSON.parse(todoJSON)
    }    
}

const saveTodo = function(todos) {
    localStorage.setItem('todo', JSON.stringify(todos))
}

const renderedNotes = function(todos, searchValue) {
    const filteredNotes = todos.filter(function(todo) {
        return todo.task.toLowerCase().includes(searchValue.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredNotes.forEach(function (todo) {
        createPElement(todo)
    })
}

let removeTodo = function(id) {
   const todoIndex = todos.findIndex(function(todo) {
       return todo.id === id
   })

   if (todoIndex > -1) {
       todos.splice(todoIndex, 1)
   }
}

const createPElement = function(todo) {
    
    let noteDiv= document.createElement('div')
    let textSpan = document.createElement('span')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')    
    
    // Append Checbox to div
    noteDiv.appendChild(checkbox)

    //Assign value to textSpan and append it to Div
    textSpan.textContent = todo.task
    noteDiv.appendChild(textSpan)

    // Add Remove Button to Div
    let removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id)
        saveTodo(todos)
        let searchText = ''
        renderedNotes(todos, searchText)
    })

    noteDiv.appendChild(removeButton)

    document.querySelector('#todos').appendChild(noteDiv)
}

const generateSummaryDOM = function() {
    let todoJSON = localStorage.getItem('todo')
    let todoObject = JSON.parse(todoJSON)

    const uncompletedTodo = todoObject.filter(function(todo) {        
        return todo.completed === false
    })
    
    let count = 0
    uncompletedTodo.forEach(function(unTodo) {        
        count++
    })

    document.querySelector('#todos').innerHTML = ''
    uncompletedTodo.forEach(function(todo) {
        createPElement(todo)
    })
}
