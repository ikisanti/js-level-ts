//? Sort Objects by Key
//? Prompt:
//? Given an array of objects with name and score, sort descending by score.

const players = [
    { name: "Ana", score: 95 },
    { name: "Luis", score: 78 },
    { name: "Sofía", score: 88 }
];

players.sort((a, b) => b.score - a.score);
console.log(players);
