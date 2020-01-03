function diffArray(arr1, arr2) {
  var newArr = [];
  //check and compare each index of arr1.
  for(let i = 0;i < arr1.length;i++){
    for(let j = 0; j < arr2.length;j++){
      //If they match set them to null & exit inner for loop.
      if(arr1[i]===arr2[j]){
        arr1[i]=null;
        arr2[j]=null;
        break;
      }
      //if this is the last element of arr2 push it to newArr.
      if(j===arr2.length-1){
        newArr.push(arr1[i]);
      }  
    }
  }
  //push every element that is not null of arr2 to newArr.
  for(let j = 0; j < arr2.length;j++){
    if(arr2[j]!==null){
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));