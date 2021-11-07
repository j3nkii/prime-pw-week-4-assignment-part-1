console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jacob'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let total;
  total = firstNumber + secondNumber;
  return total;
}
console.log(addNumbers(69, 420));

// 4. Function to multiply three numbers & return the result
function multiplyThree( a, b ,c ){
  let total;
  total = a * b * c;
  return total;
}
console.log(multiplyThree( 3, 14, 10));

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
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let urMom = [1, 2, 3, 4]
let urDad = []
function getLast( array ) {
  return array.pop();
}
console.log(`Last is: ${getLast(urMom)}`);
console.log(`Last is: ${getLast(urDad)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let found = false;
  for(index of array) {
    index === value ? found = true : false;
    } 
  if(found === true) {
    return true;
  } else {
    return false;
  }
}
let urGranny = ['Bob', 'Frank', 'Phillip', 'Wallace'];
console.log(`Found Frank?: ${find('Frank', urGranny)}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let found;
  letter === string[0] ? found = true : found = false;
  return found;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let wildArray = [47, 82, 34];
function sumAll(array ) {
  let sum = 0
  // TODO: loop to add items
  for(i=0; i < array.length; i++) {
    sum+=array[i];
  }
  return sum;
}
console.log(sumAll(wildArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positives(array) {
  let arrayCopy = [];
  for(value of array) {
    if(value > 0) {
      arrayCopy.push(value)
    }
  }
  return arrayCopy;
}
let buttVille = [1, -2, 3, -4, 5];
console.log(positives(buttVille))
console.log(buttVille);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
