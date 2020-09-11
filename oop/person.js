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

   set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
   }

   get fullName() {
       return `${this.firstName} ${this.lastName}`
   }
}


class Employee extends Person {
     constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
     }

     getBio() {
         return `${this.fullName} is a ${this.position}`
     }

     getYearsLeft() {
         return 65 - this.age
     }
}
// const me = new Employee('Abhijeet', 'Kulshreshtha', 35, 'Associate Development Architect', ['Driving', 'Coding'])
// me.setName('Ankur Kulshreshtha')
// console.log(me.getBio())
// console.log(me.getYearsLeft())

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
      return this.grade >= 70 ? `${this.firstName} has passed the exam` : `${this.firstName} has failed the exam`      
    }

    updateGrade(marks) {
        this.grade = this.grade + marks
        return this.grade
    }
}

// const student = new Student('Abhijeet', 'Kulshreshtha', 35, 89, ['Driving', 'Coding'])
// student.fullName = 'Abby Kuls'
// console.log(student.getBio())
// student.updateGrade(-20)
// console.log(student.getBio())

const emp = new Employee('Abhijeet', 'Kulshreshtha', 35, 'Architect', ['Driving', 'Coding'])
// emp.fullName = 'Abby Kuls'
console.log(emp.getBio())



