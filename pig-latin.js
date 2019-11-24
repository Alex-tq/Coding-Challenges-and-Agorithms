function translatePigLatin(str) {
  let cluster= 1;
  if(isVowel(str[0])){
    return str.concat('way');
  }else{
    for(let i = 1; i < str.length;i++){
      if(isVowel(str[i])){
        break;
      }else{
      cluster++;
      }
    }
    str = str.slice(cluster)+str.slice(0, cluster)+'ay';
  }
  return str;
}
function isVowel(firstLetter){
    switch(firstLetter){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
        break;
      default:
        return false;
    }
  }

console.log(translatePigLatin("rhythm"));