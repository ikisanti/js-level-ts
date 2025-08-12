//? Balanced Brackets (Stack)
//? Prompt:
//? Write a function that checks if a string has balanced brackets.
//? Valid brackets: (), [], {}
//? Example: "{[()]}" → true, "{[(])}" → false

function isBalanced(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if ([')', ']', '}'].includes(char)) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(])}")); // false
