// document.getElementById("#btn").innerHTML = 
// console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText = "Hellow World!"
document.body.style.background = "yellow";

let Elementh1 = document.getElementById("myheading");
console.log(Elementh1);

let h2El = document.getElementById("H2ID");
h2El.innerText = h2El.innerText + " from Apna College.";

let access = document.querySelectorAll(".box");
console.log(access[0].innerText = "The text of first div has been changed.");
console.log(access[1].innerText = "The text of second div has been changed.");
console.log(access[2].innerText = "The text of third div has been changed.");

// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag. 

let NewBtn = document.createElement("button");
NewBtn.innerText = "click me";
let body = document.querySelector("body").prepend(NewBtn);
NewBtn.style.backgroundColor = "red";
NewBtn.style.color = "white";
NewBtn.style.border = "1px solid blue";
// NewBtn.innerHTML = "<i>click me</i>";

// Qs. Create a <p> tag in html, give it a class & some styling. 
// Now create a new class in CSS and try to append this class to the <p> element. 
// Did you notice, how you overwrite the class name when you add a new one? 
// Solve this problem using classList. 
const element = document.querySelector(".paragraph");
element.classList.add("New-para");
// element.classList.remove("New-para");
// element.classList.toggle("paragraph");

const p01 = document.getElementById("para-01");
console.log(p01.firstChild);

let span = document.querySelector("span");
// document.querySelector("span").innerHTML = "<strong>Hey there I am  span</strong>";
span.innerHTML = "<strong>Hey there I am  span</strong>";
span.style.color = "blue";
console.dir(span);
// span.hidden = true; 
// span.style.visibility = "hidden"

let anchorTag = document.querySelector("a");
// anchorTag.href = "https://www.youtube.com/"; // Overview is that, you can convert href of any A tag. you can chnage it directly.
console.dir(anchorTag);
anchorTag.setAttribute("href", "https://www.google.com/");
console.log(anchorTag.getAttribute("href"));
// anchorTag.removeAttribute("href");


let src = document.querySelector("div img");
src.setAttribute("src", "img.jpg");


let test = document.createElement("p");
test.textContent = "Hello World!"
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
document.body.removeChild(test);


let divheading = document.createElement("h1");
divheading.textContent = "Hey main baahar se aaya hu";
document.querySelector("div:last-of-type").appendChild(divheading);

let Div = document.querySelector("div:last-of-type");

let target = Div.querySelector("h1:nth-of-type(3)");
Div.removeChild(target);

// 1. Change Text on Button Click 
// <p id="text">Hello World</p>
// <button>Change Text</button>
// "Hello JavaScript"
let btn = document.querySelector("button:last-of-type");
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
