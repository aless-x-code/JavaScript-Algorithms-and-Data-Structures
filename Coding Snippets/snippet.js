// given a sorted array, return the count (single number) of unique values in the array
// (there can be negative numbers in the array, but always sorted)

// countUniqueValues([1,2,3, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4, 7,7,12,12,13]) = 7

// solve it with 2 left pointers way
/*
 


   i
  [1, 2, 2, 2, 3, 3, 4, 5, 6]
      j
  
if i != j -> +i & +j
if i = j -> +j

place values in front of array, then return i + 1

*/

function countUniqueValues(array) {
  // if array.length is 0, return 0
  // if array.length is 1, return 1
  // while j < array.length
  // i = array[0]
  // j = array[1]
  // if i != j, i + 1
}

// // console.log(
//   countUniqueValues([
//     1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7,
//     7, 12, 12, 13,
//   ])
// );

let str = "hello";
let test = str.split(" ", " ");
// console.log(test)

//______________________________________


