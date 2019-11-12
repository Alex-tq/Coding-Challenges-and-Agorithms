/*
Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.

addTogether(2)(3) should return 5.

addTogether("http://bit.ly/IqT6zt") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.
*/
function addTogether(...arr) {
  let x;//To store value if only one argument is passed.

  //If any of the arguments is not a number return undefined.
  for(let i = 0; i<arr.length;i++) {  
    if(typeof(arr[i])!=='number') return undefined;
  }
  //If there are 2 numeric arguments, return their sum.
  if(arr.length===2){
    return  arr[0]+arr[1];
  }
  else
  {
    x=arr[0];//set x equals to the argument.
    //And return a function that adds x to its parameter if it's a number. 
    return function(y){
     if(typeof(y)!=='number') return undefined;
      return y+x;
    }
  }
}
console.log(addTogether(2)(3));