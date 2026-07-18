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
// console.log(findMinAndMax(arr));

// B. Using Built-in Methods (Math.max() & Math.min())
function findMinAndMaxUsingMath(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}
// console.log(findMinAndMaxUsingMath(arr));

// ------------------------------------------------------------------------------

// 2. Find the first, second and third largest numbers in an array
// A. Without Using Built-in Methods
let array = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
function findThreeLargestDistinct(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest && num !== largest && num !== secondLargest) {
      thirdLargest = num;
    }
  }
  return { largest, secondLargest, thirdLargest };
}
// console.log(findThreeLargestDistinct(array));

// B. Using Built-in Methods (Math.max() & Math.min())
function findSecondAndThirdLargest(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => b - a);
    return {
        largest: sorted[0],
        secondLargest: sorted[1],
        thirdLargest: sorted[2],
    };
}

// console.log(findSecondAndThirdLargest(arr));

// ------------------------------------------------------------------------------

// 3. Remove duplicates from an array
// A. Without Using Built-in Methods
let arrDup = [1, 2, 3, 4, 5, 5, 4, 1];
function removeDuplicates(arrDup) {
    let res = [];
    for (let i = 0; i < arrDup.length; i++) {
        let duplicate = false;
        for (let j = 0; j < res.length; j++) {
            if (arrDup[i] === res[j]) {
                duplicate = true;
                break;
            }
        }
        if (!duplicate) {
            res.push(arrDup[i]);
        }
    }
    return res;
}
console.log(removeDuplicates(arrDup));

// B. Using Built-in Methods (Set)
function removeDuplicatesUsingSet(arrDup) {
    return [...new Set(arrDup)];    
}
console.log(removeDuplicatesUsingSet(arrDup));
