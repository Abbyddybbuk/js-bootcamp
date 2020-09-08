// const square = function(num) {
//     return num * num
// }

const square = (num) => num * num

console.log(square(7))

const people = [{
    name: 'Abhijeet',
    age: 35
}, {
    name: 'Sameer',
    age: 40
}, {
    name: 'Himanshu',
    age: 47
}]

// const under40 = people.filter(function(person) {
//    return person.age < 40
// })

const under40 = people.filter((person) => person.age < 40)

console.log(under40)

const age40 = people.find((person) => person.age === 40)
console.log(age40)