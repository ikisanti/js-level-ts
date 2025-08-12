function countVowels(text) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of text.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));     // 2
console.log(countVowels("Globant"));   // 2
