// Event Listener

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
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
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

// 7. Change Image on Click
// HTML:
// <img id="img" src="image1.jpg" width="200">
// <button>Change Image</button>
// Task:
// When the Button click then image source should be change.
let changedSRC = document.querySelector("#imgBTN");
let SRC = document.querySelector("#img");
changedSRC.addEventListener("click", () => {
    SRC.setAttribute("src", "image2.jpg");
});


// 8. Add Item to List
// HTML:
// <input type="text" id="item">
// <button>Add</button>
// <ul id="list"></ul>

// Task:
// Input mein jo text hai usko new <li> bana kar list mein add karo.
const inPut = document.querySelector("#item");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

// addBtn.addEventListener("click", ()=> {
//     const lies = document.createElement("li");
//     const trimValue = inPut.value.trim();

//     if(trimValue === "") {
//         lies.textContent = "Sorry, please write something here!"
//         list.appendChild(lies)
//     } else {
//         lies.textContent = inPut.value
//         list.appendChild(lies)
//         inPut.value = ""
//     };
//     // console.log("Character count:", inPut.value.length); 
// });

function handleItems() {
    const lies = document.createElement("li");
    const trimValue = inPut.value.trim();

    if (trimValue === "") {
        lies.textContent = "Sorry, please write something here!";
        list.appendChild(lies);
    } else {
        lies.textContent = trimValue
        list.appendChild(lies)
        inPut.value = ""
    };
};
addBtn.addEventListener("click", handleItems);

inPut.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        handleItems();
    };
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
toggle.classList.toggle("ToggleHasBeenAdded");
toggle.classList.toggle("toogle"); // This one wil remove

// Add a highlight class to every even item in a list. 
let ull = document.querySelectorAll(".ull li:nth-child(2n)");
ull.forEach(element => {
    element.classList.add("highlight")
});

let hover = document.querySelector(".div-box");
// hover.addEventListener('onmouseover', ()=> {
//     console.log('This is a div box')
// })
hover.onmouseover = () => {
    console.log("This Text is inside div box"); // If we handle our event as inline event and also js file. So the priority should be given to js file not inline event.
};
// If you again write a code on this div so the first code will overwrite then, the last code will appear.
hover.onmouseover = () => {
    console.log("I'm a div"); // now the first one overwrite, This one will print on console.
};

// Event Objects
const event = document.querySelector('#event')
event.onclick = (event) => {
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX)
    console.log(event.clientX, event.clientY)
}

hover.onmouseover = (event) => {
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.clientX)
    console.log(event.clientX, event.clientY)
}

// home when mouse over on something then it should happens something in the document, anything you want 
