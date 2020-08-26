let isGuestOneVegan = true
let isGuestTwoVegan = true
if ((isGuestOneVegan) && (isGuestTwoVegan)) {
    console.log('Offer only vegan')
} else if ((isGuestOneVegan) || (isGuestTwoVegan)) {
    console.log('Atleast some dishes should be vegan')
} else {
    console.log('Offer me  meat!')
}
