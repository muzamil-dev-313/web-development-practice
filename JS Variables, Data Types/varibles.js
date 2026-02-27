var x = "Hey, this is me. Muzamil a web developer."
var y = 7
var z = 5.5
var _x = "Ali Reza"

var c = 987

{
    var c = 88;
    console.log(c)

    // var is a globally scope, it does't have a blocke scope, when  I am doing C here 88  and then I have made C as 987 so as soon as C comes here, it will be 88 globally and here when I print it, it will be 88 and here also it will 88 both the place will be 88 but let will not be like this.
}
console.log(c)


let d = 345

{
    let d = 55;
    console.log(d)

    // let is block scope
}
console.log(d)
// --------------------------------------------------------------- 

// Variables can not start with a number. like 3z = 32

// -----------------------------------------------------------------

console.log(x)
console.log(y)
console.log(z)

console.log(y + z)
console.log(typeof x, typeof y, typeof z,)

const a = 6;
// a = 4 + 1;    The const never allowed any data to be change.
console.log(a)

let f = "JavaScript"
var h = 32
let j = true
const q = false
let r = undefined
var v = null

console.log(f, h, j, q, r, v)
console.log(typeof f, typeof h, typeof j, typeof q, typeof r, typeof v)


// object 
let k = {
    name: "Muzamil",
    age: 21,
    "Postal Code": 87300,
    "is_student": true,

}
console.log(k)
k.is_teacher = false,
    console.log(k)

// Question 
// write a javaScript program to store name, phone number and marks of a student using object 

let o = {
    is_student: true,
    name: "Ali Muhammad",
    phone: 3303092985,
    marks: "1100/920",
}
console.log(o)

//-----------------------------------------------------------------------------

// problem No 01 
// create a variable type string and try to add a number to it 

f = "74"
j = f + 7
console.log(j)

//-----------------------------------------------------------------------------

// Problem No 02

// Use typeof operator to find the datatype of the string in last question 

console.log(typeof f)

//-----------------------------------------------------------------------------

// Problem No 03

// create a const object in JavaScript. Can you change it to hold a number later? 
// The answer is No

const l = {
    name: "Ahmed",
    age: 22,
};
// console.log(l)
l.age = 25
console.log(l)

// Trying to make it hold a number
// l = 42;       
// l = 100; 
// The const we never change it to hold a number but in that age we only change the property of that.

//-----------------------------------------------------------------------------

// Problem No 04

// Try to add a new key to the const object in problem 3. Were you able to do it ?
// The answer us Yes 
l.country = "Pakistan";
l.city = "Quetta";
console.log(l)

//-----------------------------------------------------------------------------

// Problem 05

// Write a JS program to create a word-meaning dictionary of 5 words 

let word_with_Meaning = {
    Rival: "Person who wants and tries to get the same thing as another; one who tries to equal or do better than another",
    opponent: "person who is on the other side of a fight, game, or discussion; person fighting, struggling or speaking againt another",
    Happy: "Feeling or showing pleasure and contentment.",
    Please: "A polite word used to make requests.",
    Sorry: "An expression of regret or apology for a mistake."
}
console.log(word_with_Meaning)

// i can access individual words meanings like this below: 

console.log(word_with_Meaning.Happy)              // Just shows the meaning of "Happy"
console.log(word_with_Meaning["Rival"])          // Another way to access
