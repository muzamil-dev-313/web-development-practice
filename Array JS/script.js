let student = ["Muzamil", "Ali Reza", "Wajdan Ali", "Ahsan Ali", "Rehman Ali",];
console.log(student.length);
console.log(student);

let mark = [34, 97, 23, 54, 34, 55, 76];
console.log(mark);
console.log(mark.length);
console.log(mark[0]);
console.log(student[3]);
let result = student[2] = "Juma Lala";
console.log(result);
console.log(student);

// Lopping over an array
console.log(student[0])
console.log(student[1])
console.log(student[2])
console.log(student[3])

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    console.log(element)
};
// Print each element using a loop. 
let nums = [10, 20, 30, 40, 50];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
};


for (let i = 0; i < nums.length; i++) {
    console.log("i =", i, "value =", nums[i]);
}

// Find total sum of all numbers. 
let num = [5, 10, 15, 20];
let sum1 = 0;
for (let i = 0; i < num.length; i++) {
    sum1 += num[i]
};
console.log(sum1)


// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
// My logic 
let arr = [85, 97, 44, 37, 76, 60];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    totelSum = 85 + 97 + 44 + 37 + 76 + 60
    Avg = totelSum / arr.length
};
console.log("Average of the entire class is:", Avg)


// Logic of Apna College 
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`)


// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.
// My logic
let itms = [250, 645, 300, 900, 50];

for (let index = 0; index < itms.length; index++) {
    discount = itms[index] * 10 / 100;
    final_price = itms[index] - discount
    // console.log(final_price)
    itms[index] = final_price
}
console.log(itms)
// Logic of Apna College 
let items = [250, 645, 300, 900, 50 ];
let i = 0;
for(let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

// Find maximum number:
let n = [12, 45, 7, 89, 23];
let max = n[0]
for (let idx = 0; idx < n.length; idx++) {
    if (n[idx] > max) {
        max = n[idx];
    }
}
console.log(max)

// Find minimum number:
let nu = [12, 45, 7, 89, 23];
let min = nu[0]
for (let idx = 0; idx < n.length; idx++) {
    if (nu[idx] < min) {
        min = nu[idx];
    }
}
console.log(min)

let arra = [1, 2, 3, 4, 5, 6, 10, 12, 232];
let count = 0;

for (let i = 0; i < arra.length; i++) {
    let element = arra[i];
    if (element % 2 === 0) {
        console.log(`${element} is an even number`)
        count++;
    } else {
        console.log(`${element} is an odd number`)
    }
}
console.log(count)
