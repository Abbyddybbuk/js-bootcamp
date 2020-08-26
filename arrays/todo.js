const todo = ['Do Surya namaskar', 'Study and Prepare', 'Walk with Ayaan and Kanu', 'Play with Ayaan', 'Exercise']

// let msg = `You have ${todo.length} todos`
// console.log(msg)

// console.log('TODO: ' + todo[0])
// console.log('TODO: ' + todo[1])
// console.log('TODO: ' + todo[2])
// console.log('TODO: ' + todo[3])
// console.log('TODO: ' + todo[4])


// todo.splice(2,1)
// console.log(todo)

// todo.push('Sleep on time')
// console.log(todo)

// let firstOne = todo.shift()
// console.log(firstOne)

todo.forEach(function(item, index) {
     index = index + 1
     console.log(index + '. ' + item)
})

console.log('')
console.log('')

for(let count = 0; count < todo.length; count++) {
   let index = count + 1;
   console.log(`${index}. ${todo[count]}`)
}

console.log('')
console.log('')

for(let count = todo.length - 1; count >= 0; count--) {
    let index = count + 1;
    console.log(`${index}. ${todo[count]}`)
}

console.log(todo.indexOf('Walk with Ayaan and Kanu'))

const index = todo.findIndex(function(item, index) {
    console.log(`${index + 1}.  ${item}`)
    return item === 'Play with Ayaan'
})

console.log(`Data found at index ${index}`)