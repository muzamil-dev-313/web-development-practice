function myFunction() {
    console.log("Hello, Today we are gonna write a Javascript functions")
    console.log("While writing a code of JS we will learn also.")
}
myFunction();

function sum(x, y) {
    s = x + y
    return s

}
console.log(sum(9, 8))

function getVal(val) {
    if (val < 50)
        return 'D'
    else if (val <= 65)
        return 'C'
    else if (val <= 75)
        return 'B'
    else if (val <= 100) return 'A'
}
console.log(getVal(75));

// Write a function getGrade(score) that:
// Takes a student's marks (0 to 100)
// Returns the grade based on this logic:

// 90—100 A+
// 80-89 A
// 70-79 B
// 60-69 c
// 33-59 D
// 0-32 Fail
// Anything else  // Invalid marks X

function getGrade(score) {
    if (score >= 90 && score <= 100)
        return "A+";
    else if (score >= 80 && score < 90)
        return "A";
    else if (score >= 70 && score < 80)
        return "B";
    else if (score >= 60 && score < 70)
        return "C";
    else if (score >= 33 && score < 60)
        return "D";
    else if (score >= 0 && score < 33)
        return "Fail";
    else if (score > 100)
        return "Number should be under 0 to 100";
    else if (score < 0)
        return "Marks should be positive ";
    else
        return "Invalid marks";
};
console.log(getGrade(88));

function rps(user, computer) {
    if (user === computer) return "Draw";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";
    if (user === "rock" && computer === "scissor") return "user";
    return "computer"
};
console.log(rps("scissor", "rock"));




/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1.It takes two numbers as input from the user
2.It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times. 

let num = Math.random(); 
console.log(num);

*/

const mul = (a, b) => {
    return a * b;
}
console.log(mul(2, 3));

// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            count++;
        };
    };
    return count;
};
console.log(countVowels("Muzamil"));

// Qs. Create an arrow function to perform the same task.
const Vowels = (str) => {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (vowels.includes(letter)) {
            count++;
        };
    };
    return count;
};
console.log(Vowels("JavaScript is one of the most popular language"));
