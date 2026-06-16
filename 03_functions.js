// ==========================================
// TOPIC 3: Functions in JavaScript
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// 1. Defining the function (Storing the recipe)
function calculateTotalWithTax(price, taxRate) {
    let taxAmount = price * taxRate;
    let finalPrice = price + taxAmount;
    return finalPrice; // Sends the final answer back out
}

// 2. Invoking/Calling the function (Actually running it)
// We pass 800 as the price, and 0.15 as the taxRate
let laptopPrice = calculateTotalWithTax(800, 0.15); 

// 3. Displaying it on the screen
headingElement.innerHTML = `Total Laptop Price: $${laptopPrice}`;
headingElement.style.color = "black";
statusElement.innerHTML = "Functions workspace loaded completely.";


// ------------------------------------------
// EXPERIMENT 3.1: THE CURRENCY CONVERTER
// ------------------------------------------


function convertToBirr(dollars){
    let CurrenyinBirr = dollars*57;
    return  CurrenyinBirr;

}

let birrAmount = convertToBirr(100); 
statusElement.innerHTML = `$100 USD is exactly ${birrAmount} ETB`;



// ------------------------------------------
// EXPERIMENT 3.2: THE STUDENT GRADE EVALUATOR
// ------------------------------------------
function checkExamResult(studentScore) {
    if (studentScore >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}

let resultStatus = checkExamResult(75); // Try passing 45 to test the FAIL block!
headingElement.innerHTML = `Exam Evaluation Result: ${resultStatus}`;

if (resultStatus === "PASS") {
    headingElement.style.color = "green";
    statusElement.innerHTML = "Great job, you are moving forward!";
} else {
    headingElement.style.color = "red";
    statusElement.innerHTML = "Please review the material and try again.";
}