function isAnagram(str1, str2) {
    const format = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return format(str1) === format(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
