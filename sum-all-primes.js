/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/
function sumPrimes(num) {
  let isPrime;//Boolean to check if a number is prime.
  let sum;//Variable to store the sum of all primes within the range.
  //set sum equals to 2 if num is greater than 1.
  num < 2? sum = 0:sum = 2;
  //Iterate from 3 to num
  for(let i = 3; i <= num; i++){
    //set prime to true.
    isPrime = true;
    for(let j = 2; j < Math.floor(i/2+1);j++){
      //If its divisible by any number between 2 and the current number.
      if(i%j === 0){
        //It's not a prime number.
        isPrime = false;
        break;
      }
    }
    //If it's a prime number add it to  sum.
    if(isPrime){
      sum+=i;
    }
  }
  return sum;
}
console.log(sumPrimes(10));