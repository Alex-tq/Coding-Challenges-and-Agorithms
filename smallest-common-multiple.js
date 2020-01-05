/*
Intermediate Algorithm Scripting: Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.
*/
function smallestCommons(arr) {
  /*
  isCommon: will track whether the multile is common or not.
  count: the biggest number will be multiplied by this to obtain the next multiple.
  multiple: will be checked to see if it's divisible between the range.
  biggest: stores the biggest value from the array.
  smallest: stores the smallest value from the array.
   */
  let isCommon = false, count= 1, multiple, biggest, smallest;
  //set the varible biggest and smallest to their respective values.
  if(arr[0]>arr[1]){
    biggest = arr[0];
    smallest = arr[1];
  }else{
    biggest = arr[1];
    smallest = arr[0];
  }
  //Keep executing until the common multiple is found.
  while(!isCommon){
    multiple = biggest*count;
    count++;
    //reset isCommon to true.
    isCommon = true;
    //divide multiple by every number in the range.
    for(let i = smallest; i < biggest; i++){
      //If it's not divisible set is common to false.
      if(multiple%i!==0){
        isCommon = false;
        break;
      }
    }
  }
  return multiple;
}
smallestCommons([1,5]);