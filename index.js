//strings must be wrapped in quotes
//examples
let firstname = 'Ziggy';
let msg = 'Please do not feed the chimps!';
//single quotes works as well but be consistent
let animal = 'Dumbo Octopus';
//string inside a string
let myFirstName = '"Mr." Ahmad Khairi';

//strings are indexed. Each character has a corresponding index (a positional number)
//example: HELLO !
//         0123456
// H has an index of 0, E has an index of 1, ..., space has an index of 5, etc
//example
let myLastName = 'Hamzah';
//to access the string located inside the index:
myLastName[0]; // outputs 'H'
myLastName[1]; // outputs 'a'
myLastName[2]; // outputs 'm'
//and so on...

//to know the length of the string using .length() method
//example
myName.length; //
//we can combine strings (or known as concatenation-the action of linking things together in a series.)
myFirstName + myLastName; // = "'Mr.' Ahmad Khairi Hamzah"

//string methods
//syntax: string.method()
//examples:
let greeting = '  hello hello helloooo!!   ';
//             '0123456789
// .trim() method
greeting.trim();    //results: "hello hello helloooo!!""   (notice there's no whitespace)
// .toUpperCase() method
greeting.toUpperCase(); //results:"  HELLO HELLO HELLOOOO!!   "
//it's possible to combine more than 1 method: string.method1().method2()
greeting.trim().toUpperCase(); //results: "HELLO HELLO HELLOOOO!!"
// .indexOf(arg) method
greeting.indexOf('hello');  //outputs 2 --> refer line 32 for index num
greeting.indexOf('o');  //outputs 6
// .slice() method
//syntax .slice(beginIndex)
greeting.slice(2);  //outputs 'hello hello helloooo!!   '
greeting.slice(2, 7); //outputs 'hello'
// .replace(regexp, newSubstr) method
greeting.replace('hello', 'hi'); //outputs "  hi hello helloooo!!   "
// .repeat(count) method
greeting.repeat(2); //outputs "  hello hello helloooo!!     hello hello helloooo!!   "

//exercise
/*
Goal is to use string methods on word, so that you end up with the string 'beard'.
1. Use a string method to extract the "board" part of "skateboard" (using the slice method)
2. Replace the "o" in "board" with an "e" (using the replace method)
3. Save the result in a variable called facialHair
*/
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:
let facialHair = word.slice(5).replace('o', 'e');   //outputs 'beard'


//null and undefined
let loggedInUser = null;    //value is explicityly nothing

//math object - contains properties and methods for mathematical constants and functions
//example:
Math.PI; //outputs 3.14159...
Math.round(4.9); //rounding a number to the nearest integer - outputs 5
Math.round(4.1); // outputs 4
Math.abs(-456); //absolute value - outputs 456
Math.pow(2, 5); //raises 2 to the power of 5 - outputs 32 [it's the same as 2 ** 5]
Math.floor(3.999); //removes decimal - outputs 3
Math.ceil(3.999); //rounds a number to the next largest integer - outputs 4
Math.ceil(3.1); //outputs 4
Math.random(); //returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
Math.floor(Math.random() * 5); //returns a random int in the range of 0 to 5 (including the num 0)
Math.floor(Math.random() * 5) + 1; //returns a random int from 1 to 5;

//string template literal exercise
/*
die1 and die2 variables represents six-sided dice. Each variable holds a randomly generated int 
from 1 to 6. Create a new variable called roll, which will be a string that displays each dice
as well as their sum. Follow this pattern:
 - die1 : 3
 - die2 : 5
 - roll : "You rolled a 3 and a 5. They sum to 8"
*/
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
let roll = 'You rolled a ' + die1 + ' and a ' + die2 + '. They sum to ' + (die1 + die2);






