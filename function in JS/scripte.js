function myFunction() {
    console.log("Hello, Today we are gonna write a Javascript functions")
    console.log("While writing a code of JS we will learn also.")
}
myFunction();

function sum(x, y) {
    s = x + y
    return s

};
console.log(sum(9, 8))

function getVal(val) {
    if (val < 50)
        return 'D'
    else if (val <= 65)
        return 'C'
    else if (val <= 75)
        return 'B'
    else if (val <= 100) return 'A'
};
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

// ---------------------------------------------------------------

const mul = (a, b) => {
    return a * b;
};
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


array = [1, 2, 3, 4, 5];
array.forEach(function printVal(val) { // forEach funtion 
    console.log(val)
});

let names = ["Muzamil", "Wajdan Ali", "Ali Reza"]
names.forEach((name, i) => {
    console.log(name.toUpperCase(), i) // forEach arrow function 
});

// Qs. For a given array of numbers, print the square of each value using the forEach loop.

let arr = [11, 22, 33, 44, 55];

arr.forEach(element => {
    console.log(element ** 2)
});


// Map methods 
let nums = [78, 90, 33];
let ar = nums.map((val) => {
    // console.log(val) 
    return val;
});
console.log(ar);


// Filter methods 
let newArr = arr.filter((value) => {
    return value % 2 === 0;
});
console.log(newArr);

let red = [3, 4, 8, 10, 9];

let rde = red.reduce((last, New) => {
    // return last + New;
    if (last > New) {
        return last;
    } else {
        return New;
    };
    // return last > New ? last : New
});
console.log(rde)


// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+. 

let marks = [50, 60, 87, 93, 75, 80, 90, 95, 100];

const filtered = marks.filter((score) => {
    if (score >= 90) {
        return score
    };
});
console.log(filtered);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n. 
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array. 

let a = prompt("Enter n number: ")
let b = [];

for (let i = 1; i <= a; i++) {
    b[i - 1] = i
};
console.log(b);
let total = b.reduce((first, second) => {
    return first + second;
});
console.log(total);
let product = b.reduce((first, second) => {
    return first * second;
});
console.log(product);
