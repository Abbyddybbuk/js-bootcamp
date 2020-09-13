const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.get())

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(20)
console.log(add10(-9))
console.log(add10(230))

// Tipper
console.log('Tipper')
const createTipper = (tip) => {
    return (amount) => {
        return amount * tip
    }
}

const calcTip = createTipper(.15)
console.log(calcTip(100))
console.log(calcTip(200))