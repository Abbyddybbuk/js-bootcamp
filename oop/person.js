//Prototypal Inheritance

class Person {
   constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes      
   }

   getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
       bio = bio + ` ${this.firstName} likes ${like}.`
    })

    return bio       
   }

   setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
   }
}
// const myPerson = new PersonClass('Abhijeet', 'Kulshreshtha', 35, ['Driving', 'Coding'])
// console.log(myPerson.getBio())

// const Person = function(firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function() {
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//        bio = bio + ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

const me = new Person('Abhijeet', 'Kulshreshtha', 35, ['Driving', 'Coding'])
console.log(me.getBio())

const person2 = new Person('Kanupriya', 'Saxena', 33)
console.log(person2.getBio())