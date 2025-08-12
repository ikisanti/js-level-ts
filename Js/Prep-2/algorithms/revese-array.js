//! Reverse an array with reduce
// let a = [1, 2, 3, 4, 5];
// let revArr = a.reduce((acc, current) =>
//     [current, ...acc], []);

// console.log(revArr);


//! JavaScript Program to reverse an array using Two Pointers

// function to reverse an array
function reverseArray(arr) {

    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);

console.log(arr.join(" "));