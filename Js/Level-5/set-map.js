const set = new Set([1, 2, 3, 1]);
console.log([...set]); // [1, 2, 3]

const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // 1
