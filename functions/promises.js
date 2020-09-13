//Callback Approach
const getDataCallback = (callback) => {
    setTimeout(()=> {
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
const myPromise = new Promise( (resolve, reject)=> {
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