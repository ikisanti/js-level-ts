//? Arrays

//! 1 Define
let arrFixed = ['banana', 'orange', 'strawberry']

//! Go through Side effects only
arrFixed.forEach((element, index, arr) => console.log(element, index, arr))

//! The first and last element
console.log('fisrt element:' + arrFixed[0], 'last element:' + arrFixed[arrFixed.length - 1])

//! Add new element at the end , and return a number
let arrFixedPush = arrFixed.push('lemon')
console.log(`push return a number ${arrFixedPush} and stor${arrFixed}`)

//! Add new element at the start , and retunr a
let arrFixedUnshift = arrFixed.unshift('kiwi')
console.log(arrFixed, arrFixedUnshift)

//! Delete last element
let arrFixedLastDelete = arrFixed.pop()
console.log(arrFixed, arrFixedLastDelete)

//! Delete a select number of elements
let arrFixedCustomDelete = arrFixed.splice(1, 3)
console.log(arrFixed, arrFixedCustomDelete)