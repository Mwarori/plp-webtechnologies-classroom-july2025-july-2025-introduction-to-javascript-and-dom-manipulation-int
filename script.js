// 🚀 Part 1: Variables & Conditionals
let number = 7;
let message = "";

if (number % 2 === 0) {
  message = `${number} is Even`;
} else {
  message = `${number} is Odd`;
}
document.getElementById("checkNumber").innerText = message;

// ❤️ Part 2: Functions
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function square(n) {
  return `The square of ${n} is ${n * n}`;
}

// Display greeting
document.getElementById("greeting").innerText = greet("Student");

// 🔁 Part 3: Loops
let fruits = ["Apple", "Banana", "Orange", "Mango"];
let list = document.getElementById("list");

// Example 1: for loop
for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.innerText = fruits[i];
  list.appendChild(li);
}

// Example 2: while loop
let count = 1;
while (count <= 3) {
  console.log("Count: " + count);
  count++;
}

// 🌐 Part 4: DOM Manipulation
// Change text
document.getElementById("title").innerText = "JavaScript in Action!";

// Toggle class on click
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("box").classList.toggle("active");
  alert("Button clicked! DOM updated.");
});
