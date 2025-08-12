//!1.
// const data = [
//     { id: 1, name: 'Diegui' }, //ref1
//     { id: 2, name: 'Santi' },   //ref2
//     { id: 1, name: 'Diegui' },  //ref3
// ]

// const uniqueElements = Array.from(new Set(data))
// console.log(uniqueElements)


// const data = [1, 2, 3, 3]

// const uniqueElements = Array.from(new Set(data))
// console.log(uniqueElements)



//!2. Waiting

// const delay = (time, value) => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//             // console.log(value)
//         }, time)
//     })
// }

// async function diegui() {
//     const dieguiDelay = await delay(2000, 'Me esperas por coffee')
//     console.log(dieguiDelay)
// }

// diegui()


//!3. 


//const arr = [1, 2, 3]
// const checkPerSecond = (arr) => {
// arr.forEach(async element => {
// const dieguiDelay = await delay(2000, element)
// console.log(dieguiDelay)
// });
// }

// const checkPerSecond = async (arr) => {
//     for (ar of arr) {
//         const dieguiDelay = await delay(2000, ar)
//         console.log(dieguiDelay)
//     }
// }

// checkPerSecond(arr)

//!4 Promise.race async await

// const delay1 = (time, value) => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     })
// }
// const delay2 = (time, value) => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     })
// }
// const delay3 = (time, value) => {

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value)
//         }, time)
//     })
// }

// (async () => {
//     const winner = await Promise.race([
//         delay1(2000, 'papi'),
//         delay2(3000, 'jhon'),
//         delay3(1000, 'kruta'),
//     ]);

//     console.log('Ganador de la carrera:', winner);
// })();

//!5 Promise.race then

// const delay1 = (time, value) => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(value);
//     }, time);
// });

// const delay2 = (time, value) => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(value);
//     }, time);
// });

// const delay3 = (time, value) => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(value);
//     }, time);
// });

// const execution = (winner) => {
//     console.log('Winner:', winner);
// };

// Promise.race([
//     delay1(2000, 'papi'),
//     delay2(3000, 'jhon'),
//     delay3(1000, 'kruta'),
// ]).then(execution);
