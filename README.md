# The Odin Project: Recursion
Assignment 1
1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
2. Now write another function fibsRec which solves the same problem recursively.

Assignment 2
1. Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].


**Course reference pages:**
- [Project: Recursion](https://www.theodinproject.com/lessons/javascript-recursion)

## Thoughts

## Learnings
- The slice method in JavaScript is used to extract a portion of an array and returns it as a new array. It doesn't modify the original array but creates a shallow copy of the selected elements.
  - const originalArray = [1, 2, 3, 4, 5];
  - const slicedArray1 = originalArray.slice(1, 4);
    - console.log(slicedArray1); // Output: [2, 3, 4]
    - startIndex is included, endIndex is not included
  - const slicedArray2 = originalArray.slice(2);
    - console.log(slicedArray2); // Output: [3, 4, 5]
  - const slicedArray3 = originalArray.slice(-2);
    - console.log(slicedArray3); // Output: [4, 5]
- .reduce((accumulator, currentValue) => accumulator + currentValue, 0):
  - The reduce method is used to accumulate (reduce) the array to a single value. It takes a callback function as its first argument and an initial value (0 in this case) as its second argument.

