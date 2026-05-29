let a = "Chitori";
let str = "Hello_World!";
let str2 = "          Muza\tmil";
let str3 = "JavaScript is one of the best language.";
let str4 = " JUMA LALA";

console.log(str2);
console.log(str.length);
console.log(str[6]);
console.log(str2[5]);
// Template Literals `    `  
console.log(`The number of text are ${str2.length} string text.`);

// UpperCase and Lower case Method + trim Method
console.log(str3.toUpperCase());
console.log(str4.toLowerCase());

console.log(str2.toUpperCase());
console.log(str2.trim()); // removes the space from starting and ending.

// concatination method
console.log(a.concat(str4));
// Slicing Method
console.log(a.slice(3, 6));

// Replace and ReplaceAll Method
console.log(str4.replace("JUMA", "KHAN"));

let result = str.replace("llo_World!", "y, What's up bro?");
console.log(result);

let res = str.replace("lo", "p the");

console.log(str.replaceAll("l", "p"));

// Character Method str.cahrAt(idx)

let char = "JavaScript";
let results = char.charAt(0);
let resul = char.charAt(4);
let resu = char.charAt(6);
console.log(results, resul, resu, char[3]);

char[0] = "H";
console.log(char) // Output should be HavaScript but it will not CHANGE with it because String are Immutable. If we want to change the string in char variable so, in that case we should create a new string. This one that we did, it's not possible to change directly the string indexes to any other character words. So we should generate a new string. Whenever we want to change it with any other words so, we can replace it but we can not change it.
// for example 
char = char.replace("J", "H");
console.log(char);


// Qno: 1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @ followed by their full name and ending with the fullname length.
// eg: user name = "Muzamil" , username should be "@Muzamil7"

// My logic 
let fullName = prompt("Enter your full name: ");

let userName = ("@".concat(fullName));
let r = fullName.length;
let total_result = userName.concat(r);
console.log(total_result);

// Logic of Apna College 
let fullName = prompt ("enter your fullname without spaces");
let username = "@" + fullName + fullName. length;
console. log (username) ;
