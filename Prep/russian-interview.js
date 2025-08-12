//? 1.
// const delay = (time, value) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     })
// }

// async function deleyExecution() {
//     console.log('empiezo')
//     const waiting = await delay(4000, 'espera amor')
//     console.log(waiting)
// }

// deleyExecution()

//? 2.
const values = [1, 2, 3]

//! Foreach doents work with promises
// values.forEach(async value => {
//     const result = await delay(1000, value)
//     console.log(result)
// });

//! Rigth answer
// for (let value of values) {
//     const result = await delay(1000, value)
//     console.log(result)
// }

//? 3.
// const items = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 1, name: 'Alice' },
//     { id: 3, name: 'Charlie' },
//     { id: 2, name: 'Bob' }
// ]

// const uniqueElements = Array.from(new Set(items));
// console.log(uniqueElements)

//! Rigth answer
// const uniqueById = [
//     ...new Map(items.map(item => [item.id, item])).values()
// ];
// console.log(uniqueById);


//? 4. 
async function b() {
    return 1
}

async function a() {
    return b()
}

const res = await a()
console.log(res)