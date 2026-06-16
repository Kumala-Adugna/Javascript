// ==========================================
// TOPIC 4: Arrays & Array Methods
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// // 1. Creating an array (Index positions start at 0!)
// let techStack = ["HTML", "CSS", "Node.js"];

// // 2. Modifying the array using built-in methods
// techStack.push("TypeScript"); // Adds "TypeScript" to the very end

// // 3. Displaying it on the screen
// headingElement.innerHTML = `My Tech Stack: ${techStack.join(" ➔ ")}`;
// statusElement.innerHTML = `Total items in array: ${techStack.length}`;



// // ------------------------------------------
// // EXPERIMENT 4.1: THE GROCERY LIST MODIFIER
// // ------------------------------------------

// let groceries = ["Milk", "Eggs", "Bread"];
// groceries.shift(); // Removes "Milk" automatically
// groceries.push("Bananas");
// headingElement.innerHTML = `The final array is: ${groceries.join(" | ")}`;




// ------------------------------------------
// EXPERIMENT 4.2: THE SKILL CHECKER
// ------------------------------------------

let mySkills =["HTML", "CSS", "Java"];
let check = mySkills.includes("TypeScript");

if(check == true){
    statusElement.innerHTML = "Ready for modern web dev!";
    statusElement.style.color = "green"
}
else{
    statusElement.innerHTML = "Time to learn TypeScript!";
    statusElement.style.color = "orange"
}

