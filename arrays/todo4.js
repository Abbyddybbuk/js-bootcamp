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

const sorttodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed > a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sorttodos(todos)
console.log(todos)