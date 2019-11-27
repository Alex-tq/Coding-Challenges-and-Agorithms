/*
Intermediate Algorithm Scripting: Steamroller

Flatten a nested array. You must account for varying levels of nesting.

For example:

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].


*/
function steamrollArray(arr) {
  //Iterate throug arr indexes to check if they're arrays.
  for(let i = 0; i < arr.length; i++){
    //If the current index is an array flatten the array by 1 level.
    if(Array.isArray(arr[i])){
      arr =  arr.flat(1);
      i--;//to check the same index again.
    }
  }
  
  return arr;
}
console.log(steamrollArray([1, [2], [3, [[4,[[[2,[2,[[[5,[[[[[[[[[[[[[[[[[[[[5,[44,['done']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]));