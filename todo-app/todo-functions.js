const getSavedTodos = function() {
    let todoJSON = localStorage.getItem('todo')
    return JSON.parse(todoJSON)
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

    const textToBeShown = `You have ${count} companies to look for`
    let noteFl = document.createElement('p')
    noteFl.textContent = textToBeShown
    document.querySelector('#todos').appendChild(noteFl)
}
