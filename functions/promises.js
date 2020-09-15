//Callback Approach
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is callback Success')
        callback('This is callback Error', undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

console.log('Promise concept')
// Promises
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is resolve success')
        //    reject('This is reject error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

// Promise Chaining Example
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number should be provided')
    }, 2000)
})

getDataPromise(20).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})