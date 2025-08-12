//? Is Palindrome (Algorithm)
//? Prompt:
//? Write a function that checks whether a string is a palindrome (same forward and backward).
//? Ignore case and spaces.
//? Example: "racecar" → true, "JavaScript" → false

function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/\s/g, '');
    return clean === clean.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("JavaScript")); // false
