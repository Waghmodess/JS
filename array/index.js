// 1. Find the Largest and Smallest Number in an Array

// A. Without Using Built-in Methods

const arrMinMax = [1, 2, 3, 4, 5, 5, 1];

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

console.log(findMinAndMax(arrMinMax));

// B. Using Built-in Methods

function findMinAndMaxUsingMath(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

console.log(findMinAndMaxUsingMath(arrMinMax));

// 2. Find the First, Second and Third Largest Numbers

// A. Without Using Built-in Methods

const arrLargest = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

function findThreeLargestDistinct(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  let thirdLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (
      num > thirdLargest &&
      num !== largest &&
      num !== secondLargest
    ) {
      thirdLargest = num;
    }
  }
  return {
    largest,
    secondLargest,
    thirdLargest
  };
}

console.log(findThreeLargestDistinct(arrLargest));

// B. Using Built-in Methods

function findThreeLargestUsingMethods(arr) {
  const sorted = [...new Set(arr)].sort((a, b) => b - a);
  return {
    largest: sorted[0],
    secondLargest: sorted[1],
    thirdLargest: sorted[2]
  };
}

console.log(findThreeLargestUsingMethods(arrLargest));

// 3. Remove Duplicates from an Array

// A. Without Using Built-in Methods

const arrRemoveDuplicates = [1, 2, 3, 4, 5, 5, 4, 1];

function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates(arrRemoveDuplicates));

// B. Using Built-in Methods

function removeDuplicatesUsingSet(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesUsingSet(arrRemoveDuplicates));

// 4. Find Duplicate Elements in an Array

const arrDuplicates = [1, 1, 2, 3, 4, 5, 5, 5];

function findDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) {
      let alreadyAdded = false;
      for (let k = 0; k < result.length; k++) {
        if (result[k] === arr[i]) {
          alreadyAdded = true;
          break;
        }
      }
      if (!alreadyAdded) {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

console.log(findDuplicates(arrDuplicates));

// 5. Reverse an Array

const arrReverse = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray(arrReverse));

// 6. Find Missing Number in an Array

const arrMissing = [1, 2, 3, 5];

function findMissingNumber(arr, n) {
  const total = (n * (n + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return total - sum;
}

console.log(findMissingNumber(arrMissing, 5));

// 7. Move All Zeros to the End of an Array

const arrZeros = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6];

function moveZerosToEnd(arr) {
  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }
  while (position < arr.length) {
    arr[position] = 0;
    position++;
  }
  return arr;
}

console.log(moveZerosToEnd(arrZeros));

// 8. Flatten a Nested Array

const arrNested = [1, [2, 3], [4], [5, 6, [7, [8]]], 9];

let flattenedResult = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      flattenedResult.push(arr[i]);
    }
  }
  return flattenedResult;
}

console.log(flattenArray(arrNested));

// 9. Find Two Numbers That Add Up to a Target (Two Sum)

const arrTwoSum = [2, 7, 11, 15];
const targetTwoSum = 9;

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

console.log(twoSum(arrTwoSum, targetTwoSum));

// 10. Find Three Numbers That Add Up to a Target (Three Sum)

const arrThreeSum = [2, 7, 11, 15];
const targetThreeSum = 20;

function threeSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return [];
}

console.log(threeSum(arrThreeSum, targetThreeSum));