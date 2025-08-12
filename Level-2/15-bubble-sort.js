//? Bubble Sort (Algorithm)
//? Prompt:
//? Implement a function that sorts an array using the bubble sort algorithm.
//? Don't use the built-in sort() method.
//? Example:
//? Input: [5, 3, 8, 2]
//? Output: [2, 3, 5, 8]

function bubbleSort(arr) {
    const array = [...arr];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([5, 3, 8, 2]));
