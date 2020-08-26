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

const filterList = function(list, completedStatus) {
    return list.filter(function(item) {
       return isCompleted = item.completed == completedStatus
    })
} 

console.log(filterList(todos, true))