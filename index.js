//strings must be wrapped in quotes
//examples
let firstname = "Ziggy";
let msg = "Please do not feed the chimps!";
//single quotes works as well but be consistent
let animal = 'Dumbo Octopus';
//string inside a string
let myFirstName = "'Mr.' Ahmad Khairi";

//strings are indexed. Each character has a corresponding index (a positional number)
//example: HELLO !
//         0123456
// H has an index of 0, E has an index of 1, ..., space has an index of 5, etc
//example
let myLastName = "Hamzah";
//to access the string located inside the index:
myLastName[0]; // = "H"
myLastName[1]; // = "a"
myLastName[2]; // = "m"
//and so on...

//to know the length of the string
//example
myName.length; //
//we can combine strings (or known as concatenation-the action of linking things together in a series.)
myFirstName + myLastName; // = "'Mr.' Ahmad Khairi Hamzah"

//string methods
//syntax: string.method()
//example:
let greeting = "  hello hello helloooo!!   ";
greeting.trim();    //results: "hello hello helloooo!!""   (notice there's no whitespace)
greeting.toUpperCase(); //results:"  HELLO HELLO HELLOOOO!!   "
//combine more than 1 method: string.method1().method2()
greeting.trim().toUpperCase(); //results: "HELLO HELLO HELLOOOO!!"

