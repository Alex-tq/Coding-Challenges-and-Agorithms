//converts a string to spinal-case
function spinalCase(str) {
  /*Match words starting with 0 or more upper case
   letters followed by lower case letters.*/
  let myRegex = /[A-Z]*[a-z]+/g;
  //Join the words '-' and change them to lower case.
  return str.match(myRegex).join('-').toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));