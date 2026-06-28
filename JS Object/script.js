let x = null;
console.log(typeof(x))

const student = {
    name : "Muzamil",
    age : 21,
    marks : 920,
    isPass : true,
};

// ---------------------------------------------------------------------------------------------

// When we use [] square brackets so we will add a quotes ""
// When we you .isPass so we won't add quotes
console.log(student["marks"]);

student["age"] = student["age"] + 1;
student["name"] = "Ali Ahmed";

console.log(student.name);
console.log(student.age);
console.log(typeof(student));

// ---------------------------------------------------------------------------------------------

const prodect = {
    name : "pen",
    price : 270,
    ratingStar : 4,
    isDeal : true,
    offer : 5
};
console.log(prodect);

// ---------------------------------------------------------------------------------------------

const profile = {
    userName : "_.mz4_11__",
    following : 143,
    followers : 247,
    post : 5, 
    isMonetize : false,
    isFollow : true,
    Bio : "Less perfection, more authenticity 🖤 🧠 Where logic meets ambition 💻 Crtl + S | before life crashes 😊",       
    link : "github.com/muzamil-dev-313",
};
profile.userNumber = "313"
console.log(profile);
console.log(typeof profile["userName"])
console.log(typeof(profile["followers"]))

// ---------------------------------------------------------------------------------------------

const Student = {
    name : "Juma Khan",
    "Phone Number" : 239021935,
    marks : 1000,
};
Student.isHandsome = true;
console.log(Student)
console.log(typeof(Student))

let role = "admin" ;

let ob = {
    name: "Muzamnil",
    age: 21,
    occupation: "Student",
    address : {
        city : "Quetta"
    },
    [role] : "Muzamil", // computed Property
};
// console.log(ob);
console.log(ob.name);
let l = "age";
console.log(ob[l]);

for (const key in ob) {
    const element = ob[key];
    console.log(key, element);
};

let obj = JSON.parse(JSON.stringify(ob)); // Deep Clone
console.log(JSON.stringify(ob));
obj = {...ob}; // It passes the reference. And this is spread operator uses in objects. (Spread Operator)
let obj1 = Object.assign({}, ob); // This is Object.assign. It works as same like spread operator. (Objecr.assign)
console.log(obj1);
console.log(obj);
obj.address.city = "Lahore";
console.log(obj);
console.log(ob);

console.log(ob?.address?.city); // Optional chaining

console.log(ob);

// Create an object for a student with name, age, and isEnrolled. 

let Stdnt = {
    name : "Mudasir",
    age : 19,
    is_Enrolled : true,
};
console.log(Stdnt);

// Can an object key be a number or boolean? Try this 
// The answer is yes the key may be in boolean and numbers. 

let BooNum = {
    true : "Boolean",
    20 : "Number",
};
console.log(BooNum);
// console.log(Object.keys(BooNum))

// Access the value of "first-name" from this object: 
let Name = {
    "first-name": "Muzamil",
};
console.log(Name["first-name"]);

// Given a dynamic key let "age", how will you access user[key] ? 

const key = "age";
const Age = {
    age : 21,
};
console.log(Age[key]);

// From the object below, print the latitude:

const location = {
    city: "Quetta",
    coordinate: {
        lat: "30.18327° N",
        lng: "66.99645° E",
    },
};
console.log(location.coordinate.lat);

// What will happen if coordinates is missing? How can you prevent errors?
const locations = {
    city: "Quetta",
    coordinat: {
        lat: "30.18327° N",
        lng: "66.99645° E",
    },
};
console.log(location.coordinat?.lat); // Optional Chaining

// Destructure the city and lat from the location object above.

let loc = {city} = locations;
let co = {lat} = locations.coordinat;
console.log(loc);
console.log(co);

// Destructure- the- key "first—name" as G wariable called firstName.
let Na = {
    "first-name": "Muzamil",
};
let {"first-name": firstName} = Na
console.log(firstName)

// Use for—in to log all keys in this object: 
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};
for (const key in course) {
    if (!Object.hasOwn(course, key)) continue;
    const element = key;
    console.log(element);
};

// Use Object.entries() to print all key—value pairs as:
console.log(Object.entries(course))
Object.entries(course).forEach(function(val){
    console.log(val);
});

// Deep clone the obj2 safely. 
// const obj2 = {info: { score: 80 }};
// const clone = {...obj2};
// clone.info.score = 100;
// console.log(clone)
// console.log(obj2)

const obj2 = {info: { score: 80 }};
const copied = JSON.parse(JSON.stringify(obj2))
copied.info.score = 100;
console.log(obj2)
console.log(copied)

// Rewrite this safely using optional chaining: 
const person = {};
// console.log( person.profile.name);
console.log(person?.profile?.name); // This will not give us error. It will give us undefined.

// Use a variable to dynamically assign a property 
const keys = "role";
let Info = {
    "First-name": "Juma",
    age: 25,
    [keys] : "student",
};
console.log(Info)
