//1. Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var temp = 0;
  for(var i = min; i<= max; i++){
    temp += i;
    6+4
  }
  return temp;
  }
  
  sumAll([1, 4]);

//   2. Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.
function diffArray(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//   3 Intermediate Algorithm Scripting: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.

function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments);
   for(var i = 0; i < arr.length; i++){
     for(var j = 0; j < args.length; j++){
       if(arr[i] === args[j]){
         delete arr[i];
       }
     }
   }
  
   return arr.filter(Boolean);

  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//   4. Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    var srcKeys = Object.keys(source);

    return collection.filter(function(obj){
      for(var i = 0; i < srcKeys.length; i++){
        if(
          // checking that the second argument does not match any keys on collection.
          !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]
        ){
          return false;
        }
      }
      return true;
    });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//   5.Intermediate Algorithm Scripting: Spinal Tap Case
//   Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

    return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-")

  }
  
  spinalCase('This_Is Spinal Tap');



//   6.Intermediate Algorithm Scripting: Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;

    let myConsonants = str.match(consonantRegex);

return myConsonants !== null ? str.replace(consonantRegex, "").concat(myConsonants).concat('ay') : str.concat('way')

  }
  
  translatePigLatin("consonant");


//   7.Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  var index = str.indexOf(before);
  if(str[index] === str[index].toUpperCase() ) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
str = str.replace(before, after);

  return str;

  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");




//   8.Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
    var paired = [];

    var search = function(char){
      switch(char){
        case "A":
          paired.push(['A', 'T']);
          break;
        
        case "T":
          paired.push(['T', 'A']);
          break;
          case "C":
            paired.push(["C", "G"]);
            break;
          case "G":
            paired.push(["G", "C"]);
            break;
      }
    };

for(var i = 0; i < str.length; i++){
  search(str[i])
}
  return paired;
  }
  
  pairElement("GCG");

//   9.Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    for(var i = 0; i< str.length; i++){
      var code = str.charCodeAt(i);
      if(code !== str.charCodeAt(0) + i){
        return String.fromCharCode(code - 1);
      }
    }
  return undefined

  }
  
  fearNotLetter("abce");


//   10.Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  var finalArray = [];
  // Making the function work with any number of arguments, not just three
  for(var i = 0; i < arguments.length; i++){
    var arrayArguments = arguments[i];
// loops through the array at hand 
    for(var j = 0; j < arrayArguments.length; j++){
      var indexValue = arrayArguments[j];
      if(finalArray.indexOf(indexValue) < 0){
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//   11.Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
   var temp = str.split("");
   for(var i =0; i < temp.length; i++){
     switch(temp[i]){
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = '&amp;'; 
        break;
        case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
     }
   }
   temp = temp.join('');
   return temp;
  }
  convertHTML("Dolce & Gabbana");


//   12. Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  var prevNum = 0;
  var currNum= 1;
  var result = 0;



  }
  
  sumFibs(4);



//   13.Intermediate Algorithm Scripting: Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    return num;
  }
  
  sumPrimes(10);

//   14. Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    return arr;
  }
  
  
  smallestCommons([1,5]);

//   15. Intermediate Algorithm Scripting: Drop it
//   Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
  
//   Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });



//   16.Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    return arr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);



//   17.Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.
function binaryAgent(str) {
    return str;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//   18.Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    return pre;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  

//   19.Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
    return false;
  }
  
  addTogether(2,3);





//   20.Intermediate Algorithm Scripting: Make a Person
//   Fill in the object constructor with the following methods below:
  
//   getFirstName()
//   getLastName()
//   getFullName()
//   setFirstName(first)
//   setLastName(last)
//   setFullName(firstAndLast)
//   Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return "";
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();


//   21 Intermediate Algorithm Scripting: Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

//   22JavaScript Algorithms and Data Structures Projects: Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    return true;
  }
  
  
  
  palindrome("eye");