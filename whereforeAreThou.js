function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let propertieList = Object.keys(source);
  let qualify;
  //check if the objects from collection qualify.
  for(let i = 0; i<collection.length;i++){
    qualify=true;//set qualify to true;
    for(let j = 0; j<propertieList.length;j++){
      //If the object doesn't have the property set qualify to false and exit innes loop.
      if(!collection[i].hasOwnProperty(propertieList[j])){
         qualify=false;
         break;
      }
      //else if the propertie's value is different set qualify to false and exit loop.
      else if(collection[i][propertieList[j]]!==source[propertieList[j]]){
        qualify=false;
        break;
      }
    }
    //if the object qualifies push it to arr.
    if(qualify){arr.push(collection[i]);} 
  }
  
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));