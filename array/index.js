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

// 3.1 Find duplicate elements in an array:

let arrDupUnique = [1, 1, 2, 3, 4, 5, 5, 5];
function findDup(arrDupUnique) {
    let res = [];
    for (let i = 0; i < arrDupUnique.length; i++) {
        let duplicate = false;
        for (let j = i + 1; j < arrDupUnique.length; j++) {
            if (arrDupUnique[i] === arrDupUnique[j]) {
                duplicate = true;
                break;
            }
        }
        if (duplicate) {
            res.push(arrDupUnique[i]);
        }
    }
    return res;
}
console.log(findDup(arrDupUnique));

// == OR ==

function findDup(arrDupUnique) {
    let res = [];
    for (let i = 0; i < arrDupUnique.length; i++) {
        let duplicate = false;
        // Check if current element appears again
        for (let j = i + 1; j < arrDupUnique.length; j++) {
            if (arrDupUnique[i] === arrDupUnique[j]) {
                duplicate = true;
                break;
            }
        }
        if (duplicate) {
            // Check if we already added this value
            let alreadyAdded = false;
            for (let k = 0; k < res.length; k++) {
                if (res[k] === arr[i]) {
                    alreadyAdded = true;
                    break;
                }
            }
            if (!alreadyAdded) {
                res.push(arrDupUnique[i]);
            }
        }
    }
    return res;
}
console.log(findDup(arrDupUnique)); // [1, 5]

// 4. Reverse an array: Without Using Built-in Methods

let arrRev = [1, 2, 3, 4, 5];
function reverseArray(arrRev) {
    let result = [];
    for (let i = arrRev.length - 1; i >= 0; i--) {
        result.push(arrRev[i]);
    }
    return result;
}
console.log(reverseArray(arrRev));

// 5. Find missing number in an array.

const arrMissNum = [1, 2, 3, 5];
function findMissingNumber(arrMissNum, n) {
    const total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < arrMissNum.length; i++) {
        sum += arrMissNum[i];
    }
    return total - sum;
}
console.log(findMissingNumber(arrMissNum, 5));

// 6. Move all zeros to the end of an array:

let arrMoveZero = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6];
function moveZerosToEnd(arrMoveZero) {
    let pos = 0;
    for (let i = 0; i < arrMoveZero.length; i++) {
        if (arrMoveZero[i] !== 0) {
            arrMoveZero[pos] = arrMoveZero[i];
            pos++;
        }
    }
    while (pos < arrMoveZero.length) {
        arrMoveZero[pos] = 0;
        pos++;
    }
    return arrMoveZero;
}
console.log(moveZerosToEnd(arrMoveZero));

// 7. Flatten a nested array
let arrFlat = [1, [2, 3], [4], [5, 6, [7, [8]]], 9];
let res = [];
function flattenArray(arrFlat) {
    for (let i = 0; i < arrFlat.length; i++) {
        if (Array.isArray(arrFlat[i])) {
            flattenArray(arrFlat[i]);
        } else {
            res.push(arrFlat[i]);
        }
    }
    return res;
}
console.log(flattenArray(arrFlat));

// 8. Find two numbers that add up to a target (Two Sum)
let arrSun = [2, 7, 11, 15];
let target = 9;
function twoSum(arrSun, target) {
    for (let i = 0; i < arrSun.length; i++) {
        for (let j = i + 1; j < arrSun.length; j++) {
            if (arrSun[i] + arrSun[j] === target) {
                return [arrSun[i], arrSun[j]];
                return [i, j];
            }
        }
    }

    return [];
}
console.log(twoSum(arrSun, target));

// 9. Find three numbers that add up to a target (Three Sum)
let arrSum3 = [2, 7, 11, 15];
let target1 = 20;
function threeSum(arrSum3, target1) {
    for (let i = 0; i < arrSum3.length; i++) {
        for (let j = i + 1; j < arrSum3.length; j++) {
            for (let k = j + 1; k < arrSum3.length; k++) {
                if (arrSum3[i] + arrSum3[j] + arrSum3[k] === target1) {
                    return [arrSum3[i], arrSum3[j], arrSum3[k]];
                }
            }
        }
    }
    return [];
}
console.log(threeSum(arrSum3, target1));