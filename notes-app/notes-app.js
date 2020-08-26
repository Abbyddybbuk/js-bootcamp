
// Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query All and Remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    console.log(p.textContent)
    p.textContent = '**Balle*****Balle*******Balle*********'
    // p.remove()
})
