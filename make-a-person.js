/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.

For example:

Object.keys(bob).length should return 6.

bob instanceof Person should return true.

bob.firstName should return undefined.

bob.lastName should return undefined.

bob.getFirstName() should return "Bob".

bob.getLastName() should return "Ross".

bob.getFullName() should return "Bob Ross".

bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").

bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").

bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").

bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").

bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").

*/
var Person = function(firstAndLast) {
  // index 0 of fullName stores the first name and index 1 the last name.
  let fullName=firstAndLast.split(' ');
  //Returns the full name.
  this.getFullName = function() {
    return fullName[0]+' '+fullName[1];
  };
  //returns the first name.
  this.getFirstName = function() {
    return fullName[0];
  };
  //returns the last name.
  this.getLastName = function() {
    return fullName[1];
  };
  //sets fullName to an array of the splited passed parameter.
  this.setFullName = function(full) {
    fullName = full.split(' ');
  };
  //sets index 0 of fullName to the passed parameter which is the first name.
  this.setFirstName = function(firstName) {
    fullName[0] = firstName;
  };
  //sets index 1 of fullName to the passed parameter which the last name.
  this.setLastName = function(lastName) {
    fullName[1] = lastName;
  };
};
var bob = new Person('Bob Ross');
console.log(bob.getFullName());
//let elNombre = bob.getFullName();
document.getElementById("h1").innerHTML = bob.getFullName();
//alert('lol');