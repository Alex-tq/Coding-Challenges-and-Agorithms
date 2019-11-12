/*
Intermediate Algorithm Scripting: Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/
function binaryAgent(str) {
  //Split the string in an array of binary numbers.
  str = str.split(' ');
  //To hold the new translated string.
  let translatedString = [];
  //Push every translated character into the new array.
  for(let i = 0; i < str.length; i++){
    translatedString.push(String.fromCodePoint(parseInt(str[i], 2)));
  }
  //return the joined translated array.
  return translatedString.join('');
}
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));