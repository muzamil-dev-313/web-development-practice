// document.getElementById("#btn").innerHTML = 
// console.log(document.body.childNodes[1])
document.body.childNodes[1].innerText = "Hellow World!"
document.body.style.background = "yellow";

let Elementh1 = document.getElementById("myheading")
console.log(Elementh1)

let h2El = document.getElementById("H2ID");
h2El.innerText = h2El.innerText + " from Apna College.";

let access = document.querySelectorAll(".box");
console.log(access[0].innerText = "The text of first div has been changed.")
console.log(access[1].innerText = "The text of second div has been changed.")
console.log(access[2].innerText = "The text of third div has been changed.")

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
