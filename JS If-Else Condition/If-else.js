// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 18pm: Good afternoon!
// Otherwise: Good evening!

let hour = 19;

if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
}
else {
    console.log("Good evening!");
}

let is_student = false; // It's flase. if the boolean is true then it will execute the first statment otherwise else condition statment will.
if (is_student) {
    console.log("You are a student!")
}
else {
    console.log("You are Not a student!")
}

console.log("Hello World!")

// let age = prompt("Enter your age: ");
let age = 15;

if (age > 18) {
    console.log("You are eligible to create an ID card.");
}
else {
    console.log("You are not eligible to create an ID card.");
}

// ----------------------------------------------------------------  

// Arithmetic Operators 

let sum = 5 + 2; 
console.log(sum)

let difference = 10 - 4;
console.log(difference) 

let num1 = 5;
let num2 = 2;

console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 / num2);
console.log(num1 % num2);

// -----------------------------------------------------------------

// Assignment Operators

let n = 6;
let n1 = 5;
n += n1
console.log(n)
n -= n1
console.log(n)

n *= n1
console.log(n)

n /= n1
console.log(n)

n **= n1
console.log(n)

n %= n1
console.log(n)

// Comparison Operators

// ==  :	5 == "5"	true
// !=  :	5 != "6"	true
// === :	5 === "5"	false |  5 === 5 true   | === equal to will see both the values and type
// !==	:	5 !== "5"	true
// >	:	10 > 5	true
// <	:	3 < 7	true
// >=	:	5 >= 5	true
// <=	:	4 <= 5	true
// ?    : turnary operator 

height = 5.5;

if (height >= 5.5) {
    console.log("You are selected for running competition")
    
}
else {
    console.log("You are not allowed for this competition.")
}

// Logical operator 
// && : logical and 
// || : logical or 
// !  : logical not 

a = 5;
b = 10;

a!= b && b!= a   //true
a!= b && b == a  // false

a!= b || b == a  // true 

a!= b   // true
