const list = [{
    title: 'SAP',
    body: 'IBSO'
}, {
    title: 'ORACLE',
    body: 'XXXX'
}, {
    title: 'WORKDAY',
    body: 'YYYY'
}, {
    title: 'SALESFORCE',
    body: 'ZZZZ'
}]

// list.forEach(function(item, index){
//     console.log(`${index + 1}. ${item.title} - ${item.body}`)    
// })

// console.log(' ')
// console.log(' ')

// const index = list.findIndex(function(item, index) {
//    console.log(`${index + 1}. ${item.title} - ${item.body}`)
//    return item.title === 'WORKDAY'
// })

// console.log(`Index Found ${index}`)

// console.log(' ')
// console.log(' ')

// const findNote = function(notes, notesTitle){
//     const idx = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === notesTitle.toLowerCase()
//     })

//     return notes[idx]
// }

// const note = findNote(list, 'SaP')
// console.log(note)
console.log(' ')
console.log(' ')
const deleteNote = function(notes, notesTitle) {
    const idx1 = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === notesTitle.toLowerCase()
    })

    if (idx1 > -1) {
        notes.splice(idx1, 1)
    }
}

deleteNote(list, 'Oracle')
console.log(list)