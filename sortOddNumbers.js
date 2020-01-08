function sortArray(array) {

  //if the array has less than 2 items return it.
  if (array.length < 2){ return array }
  
  let oddsArray = [];// To store the odd numbers.
  let newArray = [...array]; //To store a copy of the original array.
  let oddIndexArray = []; // To keep track of which index had odd numbers.
  
  // Pushes all the odd numbers into oddsArray. 
  // And all the indexes with odd numbers into the oddIndexArray.
  for(let i = 0;i < newArray.length; i++){
    if(newArray[i]%2!==0){
      oddsArray.push(newArray[i])
      oddIndexArray.push(i)
    }
  }
  
  // Sorts the odd numbers in ascending order.
  oddsArray.sort((a, b) => { return a - b })
 
  // Places the sorted ood numbers in their corresponding places.
  for(let i = 0;i < oddsArray.length; i++){
    newArray[oddIndexArray[i]] = oddsArray[i]
  }
}