// Practice Questions of DOM Manipulation 
// 1. Change Text on Button Click 
// <p id="text">Hello World</p>
// <button>Change Text</button>
// "Hello JavaScript"
let btn = document.querySelector(".btn");
let paragr = document.querySelector("#text")

// using Event listener with fat arrow function 
btn.addEventListener("click", () => {
    // document.querySelector("#text").textContent = "Hello JavaScript";
    paragr.textContent = "Hello JavaScript";
});

// using normal function and onclick
// btn.onclick = function (){
//     document.querySelector("#text").textContent = "Hello JavaScript"
// }

// 2. Change Background Color 
let changeColor = document.querySelector(".change_color");
changeColor.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});

// 3. Show Input Value 
let Input = document.querySelector("#name");
let inputBtn = document.querySelector(".btn-2");
let pa = document.querySelector("#result");

// inputBtn.addEventListener("click", ()=> {
//     pa.textContent = Input.value

// });

inputBtn.addEventListener("click", () => {
    if (Input.value === "") {
        pa.textContent = "Please type something first!"
    } else {
        pa.textContent = Input.value
    };
});


// 4. Hide a Paragraph 
let hide = document.querySelector(".hide");
let para = document.querySelector("#para");

hide.addEventListener("click", () => {
    para.style.display = "none";
});


// 5. Toggle Paragraph Visibility 
let hides = document.querySelector(".hides");
let paRa = document.querySelector("#paRa");
hides.addEventListener("click", () => {
    if (paRa.style.display === "none") {
        paRa.style.display = "block"
    } else {
        paRa.style.display = "none";
    };
});

// 6. Count Button Clicks

let count = 0;
let countBtn = document.querySelector(".countBtn");
let paraCount = document.querySelector(".paraCount");

countBtn.addEventListener("click", () => {
    count += 1
    paraCount.textContent = `Count: ${count}`
});
countBtn.addEventListener('dblclick', function () {
    count += 1
    paraCount.textContent = `Count: ${count}`
});

const onclik = document.querySelector("#clickButton");
const ondlc = document.querySelector("#dblclickButton");
onclik.addEventListener('click', () => {
    document.querySelector("#message").textContent = "Single clicked"
});
ondlc.addEventListener('dblclick', () => {
    document.querySelector("#message").textContent = "Double clicked"
});


// Select all <li> elements and print their text using a loop.
let ul = document.querySelectorAll("#my-list li");

ul.forEach((element, index) => {
    console.log(`${index + 1}: ${element.textContent}`);
    element.classList.add("fruits")
});

for (let index = 0; index < ul.length; index++) {
    const element = ul[index].textContent;
    console.log(element)
};

// How to get the src of an image using JavaScript?
const imag = document.querySelector(".imag");
console.log(imag.src);
console.log(imag.getAttribute("src"));

// What does setAttribute() do? setAttribute will change the attribute and their value.
imag.setAttribute("src", "img.jpg");

// select a link and updates its href to point to https://github.com/muzamil-dev-313

let update_a = document.querySelector(".updating");
update_a.href = "https://github.com/muzamil-dev-313"

// add a title attribute to a div dynamically.

let title = document.querySelector(".title");
title.setAttribute("title", "Here is the lorem22");

// Remove the disabled attribute from a button
const ReBtn = document.querySelector(".visit-now");
const myAccount = document.querySelector(".myAccount");
ReBtn.removeAttribute("disabled");
ReBtn.addEventListener("click", () => {
    // myAccount.href = "https://github.com/muzamil-dev-313";
    myAccount.setAttribute("href", "https://github.com/muzamil-dev-313")
});

let toggle = document.querySelector(".toogle");
toggle.classList.toggle("dark");
toggle.classList.toggle("toogle");

// Add a highlight class to every even item in a list. 
let ull = document.querySelectorAll(".ull li:nth-child(2n)");
ull.forEach(element => {
    element.classList.add("highlight")
});

