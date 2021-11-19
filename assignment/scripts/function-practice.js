console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('1: Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log('2: ', helloName('Jacob'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total;
  total = firstNumber + secondNumber;
  return total;
}
console.log(`3: Should log 489: ${addNumbers(69, 420)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( a, b ,c ){
  let total = a * b * c;
  return total;
}
console.log(`4: Should log 420: ${multiplyThree( 3, 14, 10)}`);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( '5: isPositive - should say true', isPositive(3) );
console.log( '5: isPositive - should say false', isPositive(0) );
console.log( '5: isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let urMom = [1, 2, 3, 4];
let urDad = [];
function getLast( array ) {
  return array.pop();
}

console.log(`6: Last is: ${getLast(urMom)}`);
console.log(urMom);
console.log(`6: Last is: ${getLast(urDad)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let found = false;
  for(let index of array) {
    found = index === value ? true : false;
  } 
  return found;
}

let urGranny = ['Bob', 'Frank', 'Phillip', 'Wallace', 'Shirley',];
console.log(`7: Found 'Shirley?: ${find('Shirley', urGranny)}`);
console.log(`7: Found 'Shirley?: ${find('Dillon', urGranny)}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let found = letter === string[0] ? true : false;
  return found;
}
console.log( '8: isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( '8: isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let wildArray = [47, 82, 34];
function sumAll(array ) {
  let sum = 0;
  // TODO: loop to add items
  for(let i=0; i < array.length; i++) {
    sum+=array[i];
  }
  return sum;
}
console.log('9: Should log 163:', sumAll(wildArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positives(array) {
  let arrayCopy = [];
  for(let value of array) {
    if(value > 0) {
      arrayCopy.push(value);
    }
  }
  return arrayCopy;
}
let buttVille = [1, -2, 3, -4, 5];
console.log('10: ', positives(buttVille));
console.log('10: ', buttVille);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// create a function that, when given two parameters, take the a string, and logs true if the 2nd is the ending of said string. otherwise it will log false.
//     https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
  return str.endsWith(ending);
}

console.log('--------next----------');
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  let array = words.split(' ');
  let result = [];
  for(word of array) {
    for(letter of word) {
      if(isNaN(letter) === false ) {
        Number.parseInt(letter) - 1 > result.length ? array.push(word) : result.splice( Number.parseInt(letter) - 1, 0, word);
      }
    }
  }
  return result.join(' ');
}

console.log(`Should log: Thi1s is2 3a T4est: ${order('is2 Thi1s T4est 3a')}`);
console.log(`Should log: Fo1r the2 g3ood 4of th5e pe6ople ${order('4of Fo1r pe6ople g3ood th5e the2')}`);
console.log(`Should return empty string followed by type: ${order("")}`, typeof order(""));