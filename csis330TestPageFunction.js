// ----------------------------------------- VARIABLES AND SETUP ----------------------------------------
/**
 * Provides the function for the CSIS 330 Assignment 11 webpage.
 *
 * @type {HTMLElement} index.html
 * @author astephan18@georgefox.edu
 */

// Getting buttons
let startBtn = document.getElementById("startButton");
let leftInputTile = document.getElementById("leftInputTile");
let rightInputTile = document.getElementById("rightInputTile");
// let datePicker = document.getElementById("start");
let leftShowDataBtn = document.getElementById("leftShowDataButton");
let rightShowDataBtn = document.getElementById("rightShowDataButton");
let leftDataArea = document.getElementById("leftDataDiv");
let rightDataArea = document.getElementById("rightDataDiv");
let leftInputClickText = document.getElementById("leftInputClickCount");
let leftInputTimeText = document.getElementById("leftInputCompletionTime");
let leftInputErrText = document.getElementById("leftInputErrorCount");
let rightInputClickText = document.getElementById("rightInputClickCount");
let rightInputKeystrokesText = document.getElementById("rightInputKeystrokeCount");
let rightInputErrText = document.getElementById("rightInputErrorCount");
let rightInputTimeText = document.getElementById("rightInputCompletionTime");


let startStopState = "stopped";
let startTime;
let endTime;
let leftInputClickCount = 0;
let leftInputErrCount = 0;
let rightInputClickCount = 0;
let rightInputKeypressCount = 0;
let rightInputKeypressErrCount = 0;
let rightInputClickErrCount = 0;

//-------------------------------------------- FUNCTIONS ------------------------------------------------


function updateData() {
    let taskTime = String(((startTime - endTime)/1000).toFixed(2)).replace("-","") + "s";
    leftInputClickText.innerHTML = String(leftInputClickCount + 2);
    rightInputClickText.innerHTML = String(rightInputClickCount);

    rightInputKeystrokesText.innerHTML = String(rightInputKeypressCount);

    if (leftInputClickCount !== 0) {
        leftInputTimeText.innerText = taskTime;
    }
    else if (rightInputClickCount !==0) {
        rightInputTimeText.innerText = taskTime;
    }

    if ((leftInputClickCount + 2) > 7) {
        leftInputErrCount = (leftInputClickCount + 2) - 7;
    }
    if (rightInputClickCount > 2) {
        rightInputClickErrCount = rightInputClickCount - 2;
    }

    leftInputErrText.innerHTML = String(leftInputErrCount);
    rightInputErrText.innerHTML = String(rightInputClickErrCount + rightInputKeypressErrCount);
}

function startStopRecording() {
    if (startStopState === "stopped") {
        startTime = new Date();
        startStopState = "started";
        startBtn.innerText = "Stop";
        startBtn.classList.add("running");
    }
    else {
        endTime = new Date();
        startStopState = "stopped";
        startBtn.innerHTML = "Start";
        startBtn.classList.remove("running");
    }
    updateData();

}

function countClicksInLeft(event) {
    if ((startStopState === "started") && (event.target.id !== "rightInputTile")) {
        leftInputClickCount++;
    }
    console.log("left click " + leftInputClickCount);
}

function countClicksInRight() {
    if (startStopState === "started") {
        rightInputClickCount++;
    }
    console.log("right click " + rightInputClickCount);
}

function countKeystrokesInRight(keypress) {
    let button = keypress.key;
    if (startStopState === "started") {
        rightInputKeypressCount++;
        if ((button === "Backspace") || (button.includes("Arrow"))) {
            rightInputKeypressErrCount++;
        }
    }

    console.log("right keystroke error " + rightInputKeypressErrCount);
    console.log("right keystroke " + rightInputKeypressCount);
    console.log(keypress.key);
}

function showLeftData() {
    leftDataArea.hidden = !leftDataArea.hidden;
    if (startStopState === "started") {
        startStopRecording();
    }
    if (leftShowDataBtn.innerHTML === "Show Analysis") {
        leftShowDataBtn.innerHTML = "Hide Analysis";
    }
    else {
        leftShowDataBtn.innerHTML = "Show Analysis";
    }
    updateData();
}

function showRightData() {
    rightDataArea.hidden = !rightDataArea.hidden;
    if (startStopState === "started") {
        startStopRecording();
    }
    if (rightShowDataBtn.innerHTML === "Show Analysis") {
        rightShowDataBtn.innerHTML = "Hide Analysis";
    }
    else {
        rightShowDataBtn.innerHTML = "Show Analysis";
    }
}


//------------------------------------------ EVENT LISTENERS --------------------------------------------

startBtn.addEventListener('click', startStopRecording);
document.addEventListener('click', countClicksInLeft);
rightInputTile.addEventListener('click', countClicksInRight);
rightInputTile.addEventListener('keydown', countKeystrokesInRight);
leftShowDataBtn.addEventListener('click', showLeftData);
rightShowDataBtn.addEventListener('click', showRightData);
