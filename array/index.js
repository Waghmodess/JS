// 1. Find the Largest and Smallest Number in an Array. 
// A. Without Using Built-in Methods 
const arr = [1, 2, 3, 4, 5, 5, 1];

function findMinAndMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return { max, min };
}
console.log(findMinAndMax(arr));

// B. Using Built-in Methods (Math.max() & Math.min())
function findMinAndMaxUsingMath(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}
console.log(findMinAndMaxUsingMath(arr));

// ------------------------------------------------------------------------------