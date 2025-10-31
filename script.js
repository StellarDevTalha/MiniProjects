// Day 1: JavaScript Basics
// Print something in console 
console.log("Welcome, StellarDevTalha! ")

// Declare variables
let name = "Talha";
let age = 22;
let country = "pakistan";
let goal = "Full Stack Web Developer";
let motivation = "Never stop learning!";

// Display variables in console
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:",country);
console.log("Goal:", goal);
console.log("Motivation:", motivation);

// Simple Calculation
let Item1= 200;
let Item2= 350 ;
let Item3 = 150;
let total = Item1+Item2+Item3;
console.log("Total Price:", total,"PKR");

// Show alert and prompt Demo
alert("Welcome to your JavaScript Journey" +name +"1");

let favoriteLang = prompt("What is your favourite programming language?");
console.log("You entered", favoriteLang);

// Add interactivity to button 
document.getElementById("startbtn").addEventListener("click", function() {
document.querySelector(".content").innerHTML=
`<h1> JavaScript is now running!<h1>
<p> Good job,${name}! You,ve compeleted Day 1 successfully.<p> `
}) ;
