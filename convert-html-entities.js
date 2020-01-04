
/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
 //split str into an array of characters
  str = str.split(''); 
  //Check for html special characters in the array;
  for(let i = 0; i < str.length; i++){
    //switch to corresponding html entity.
    switch(str[i]){
      case '&':
        str[i] = '&amp;';
        break;
      case '<':
        str[i] = '&lt;';
        break;
      case '>':
        str[i] = '&gt;';
        break;
      case '"':
        str[i] = '&quot;';
        break;
      case "'":
        str[i] = '&apos;';
        break;
    }
  }
  
  return str.join('');
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));