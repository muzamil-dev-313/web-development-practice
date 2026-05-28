for (const element of "Muzamil") {
    console.log(element)
};
let i = 0;

while (i < 6) {
    console.log(i)
    i++;
};

// for loop
let timer = 3;

while (timer > 0) {
    console.log("Time remaining: " + timer);
    timer--; // Subtract 1 each time
}

console.log("Blast off!");

// // 12345

let sum = 25;

for(let i = 1; i <= 5; i ++ ) {
    sum  = sum + i; // 40
}
console.log("sum =", sum )


// // while loop
let k = 1;

while(k <= 5) {
    console.log(k)
    k++;
};


// // do-while loop
let j = 20;
do {
    console.log("JavaScript is one of the most popular language.");
    j++;
} while (j <= 10);
  
// for-of loop 
let str = "Hello World!";
let size = 0;
for (const element of str) {
    console.log(element)
    size++;
}
console.log("string size =", size)

// for-in loop  

const student = {
    name : "Muzamil",
    age : 21,
    CGPA : 2.9,
    isPass : true,
} 
for (const key in student) {
    
    const element = student[key];
    console.log(key)
    console.log(key ,student[key])
}


// printing 1 to 100 using for loop, while loop and do while loop 

for(i = 1; i <= 100; i++){
    console.log(i)
}
    
let huh = 1
while(huh <= 100) {
    console.log(huh)
    huh++;
}

let num = 1;

do {
    console.log(num)
    num++;
} while (num <= 100);

// Print all even numbers from 0 to 100.
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}


// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let guessnumber = 55;
let user;
while (user != guessnumber) {
    console.log("Please try again.")
    user = prompt("Guess the game number: ");
    
}
console.log("Congratulation you have been found the lucky number. It's", i)
