// ==========================================
// MILESTONE 1: ARMOR OF GOD TRACKER
// ==========================================
let headingElement = document.getElementById("Heading1");
let statusElement = document.getElementById("Status1");

// 1. OBJECT SPECIFICATION: believerState

let believerState = {
    name: "Paul",
    faithPoints:100,
    pray: function (){
        this.faithPoints +=30;
        console.log(`Folded hands in prayer. Spiritual strength renewed!`)
    },
    takeSpiritualHit: function (){
        this.faithPoints -=20;
        console.log(`The shield wavered! Took a spiritual hit.`);
    }

};

// 2. ARRAY SPECIFICATION: dailyTrials
// - Must contain 4 stage objects with 'obstacle' and 'intensity' properties:

let dailyTrials = [
    {obstacle:"Anxiety", intensity:"High"},
    {obstacle:"Procrastination", intensity:"Medium"},
    {obstacle:"Doubt", intensity:"High"},
    {obstacle:"Distraction", intensity:"Low"}

];

console.log("--- Starting the Day in Faith ---");

// 3. DEVOTIONAL ENGINE LOOP SPECIFICATION
// - Run a standard 'for' loop to cycle through dailyTrials array index by index.
for (let i = 0; i < dailyTrials.length; i++) {
    let currentTrial = dailyTrials[i];
    console.log(`\nFacing daily obstacle: ${currentTrial.obstacle}...`);
    
    // TASK A: Automatically subtract 15 from believerState.faithPoints to simulate the daily mental weight
    believerState.faithPoints -=15;
    
    // TASK C: Conditional Logic State Machine
    // - Check 1: If believerState.faithPoints drops below 40, execute the believer's pray() method.
         if(believerState.faithPoints<40){
            believerState.pray();

         }
    // - Check 2: Else if the currentTrial.intensity is "High", execute the believer's takeSpiritualHit() method.
       else if(currentTrial.intensity== "High"){
        believerState.takeSpiritualHit();
       }
    // - Check 3: Else (if faith is high and intensity is manageable), log that the believer overcame the trial through praise!
         else{
            console.log(`The believer overcame the trial through praise!`);
         }
    // TASK B: Critical failure check! 
    // If faithPoints <= 0, log a spiritual burnout failure statement to console and stop loop instantly with 'break;'
    if (believerState.faithPoints<=0){
        console.log(`spiritual burnout failure`);
        break;
    }

}

// 4. DOM REPORTING SPECIFICATION (OUTSIDE THE LOOP)
if (believerState.faithPoints > 0) {
    headingElement.innerHTML = `Walked in Victory Today! 🛡️`;
    headingElement.style.color = "green";
    statusElement.innerHTML = `Day complete. Remaining Faith Points: ${believerState.faithPoints}`;
} else {
    headingElement.innerHTML = `Spiritual Burnout!`;
    headingElement.style.color = "red";
    statusElement.innerHTML = `Spiritual burnout. Retreat to a quiet place to recharge.`;
}