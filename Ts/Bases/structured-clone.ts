

const ironman = {
    name: 'Tony',
    suite: {
        size: 'M'
    }
}

// const spiderman = structuredClone(ironman);
const spiderman = ironman;
spiderman.name = 'Peter'
spiderman.suite.size = 'S'


// const spiderman = {
//     name: 'Peter'
// }

console.table({ ironman, spiderman })
console.table(ironman === spiderman)