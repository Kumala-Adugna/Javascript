// 1. PRACTICING DATATYPES

// 1. Declare two variables
let age = "21"; 
let yearsToAdd = 5; 

// 2. Try to add them together
let newAge = Number(age) + yearsToAdd;

// 3. Print the result to your browser's console
console.log("Result:", newAge);
console.log("Type of age:", typeof age);

const name = "Kumala";
let score = 0;

// Update the score variable directly
score = score + 10; 

// This targets Heading1
document.getElementById("Heading1").innerHTML = `Welcome ${name}, your score is ${score}`;


// Experiment 1: The String vs Number difference
let dynamicText = "50"; 
let absoluteNumber = 50;

console.log("Is text the same as number?", dynamicText === absoluteNumber); 

// Experiment 2: Working with Booleans
let isPassed = true;

// FIX: Target the new "Status1" ID so it doesn't overwrite Heading1
let statusHeading = document.getElementById("Status1"); 

if (isPassed) {
    statusHeading.innerHTML = "Status: Access Granted";
} else {
    statusHeading.innerHTML = "Status: Access Denied";
}