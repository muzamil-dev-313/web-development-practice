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

// Q1. Print numbers from 1 to 10 using a for loop. 
for (i = 1; i <= 10; i++) {
    console.log(i);
};

// Q2. Print numbers from 10 to 1 using a while loop. 
i = 11;
while (i > 0) {
    i--;
    console.log(i);
};

// Q3. Print even numbers from 1 to 20 using a for loop. 
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};

// Q4. Print odd numbers from 1 to 15 using a while loop.
i = 1;
while (i <= 15) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
};

// Q5. Print the multiplication table of 5 (i.e.5x1 = 5 ...,5 x 10 = 50)
for (let i = 1; i < 11; i++) {
    console.log(`5 * ${i} = ${i * 5}`);
};

// Q6. Find the sum of numbers from 1 to 100 using a loop. 
sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
};
console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3 
for (let index = 1; index <= 50; index++) {
    if (index % 3 === 0) {
        console.log(index);
    };
};

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd. (e.g., "1" is odd" "2" is even" ,...) 
let x = prompt("Enter a number: ");
for (let i = 0; i < x; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else{    
        console.log(`${i} is odd`);
    }
};

// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.

for (let i = 1; i < 101; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} is divisible by 3 and 5`);
    };
};
