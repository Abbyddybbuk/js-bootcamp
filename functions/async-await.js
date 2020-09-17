const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
       typeof num === 'number' ? resolve(num * 2) : reject('Number should be provided')
    }, 2000)
})

const processData = async () => {
    let data = await getDataPromise(100)
    data = await getDataPromise(data)
    return data
}

processData().then((data)=> {
    console.log('DATA', data)
}).catch((error)=> {
    console.log('Error: ', error)
})