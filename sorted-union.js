/*
Intermediate Algorithm Scripting: Sorted UnionPassed
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

For example:

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/
function uniteUnique(...arr) {
  //create a new array to store the union;
  let newArr = [];
  //check each element of each array;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      //If it's not already in newArr then push it.
      if(!newArr.includes(arr[i][j])){
        newArr.push(arr[i][j]);
      }
    }
  }
  return newArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));