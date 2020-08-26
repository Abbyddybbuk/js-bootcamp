let restaurant = {
    name: 'Chotiwala',
    seatCapacity: 100,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.seatCapacity - this.guestCount
        return seatsLeft >= partySize
    }
}

let addParty = function(restaurant, numGuests) {
   restaurant.guestCount = restaurant.guestCount + numGuests
}

let removeParty = function(restaurant, numGuests) {
    restaurant.guestCount = restaurant.guestCount - numGuests
}

addParty(restaurant, 7)
addParty(restaurant, 8)
addParty(restaurant, 9)
addParty(restaurant, 20)
addParty(restaurant, 20)
console.log(restaurant.checkAvailability(37))


removeParty(restaurant, 10)
console.log(restaurant.checkAvailability(37))