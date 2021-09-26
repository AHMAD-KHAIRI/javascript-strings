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





