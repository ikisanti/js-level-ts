const words = ["js", "css", "html", "js", "js", "html"];

const result = words.reduce((counter, word) => {
    counter[word] = (counter[word] || 0) + 1;
    return counter;
}, {});

console.log(result);
