/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
let next;//To store the next number in the sequence.
let sum=0;//To store the sum of all odd numbers within the range.

//Go thru the Fibonacci sequence.
for(let i = 0; i <= num;i++){
  //If i is 1 add 1 to the sum.
  if(i === 1){
      sum+=1; 
  }
  //Else continue the sequence. 
  else{
    next = num1 + num2;
    if(next <= num){
    num1 = num2;
    num2= next;
    }
    //If the next number is bigger than the range exit the loop.
    else{
      break;
    }
    //add all odd numbers.
    if(next%2 === 1){
    sum+=next;
    }
  }
}
  return sum;
}

console.log(sumFibs(75025));