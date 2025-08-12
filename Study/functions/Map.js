const text = "hello world hello hello world js js js";
const words = text.split(" ");
const counter = new Map();

for (const word of words) {
    if (counter.has(word)) {
        counter.set(word, counter.get(word) + 1);
        console.log(counter);
    } else {
        counter.set(word, 1);
    }
}

for (const [word, qty] of counter) {
    console.log(`"${word}" aparece ${qty} veces`);
}
