// ----------------------------------------- VARIABLES AND SETUP ----------------------------------------
/**
 * Provides the function for the CSIS 330 Assignment 11 webpage.
 *
 * @type {HTMLElement} index.html
 * @author astephan18@georgefox.edu
 */

console.log("HIII");

// Getting buttons
let startBtn = document.getElementById("startButton");
let leftInputTile = document.getElementById("leftInputTile");
let rightInputTile = document.getElementById("rightInputTile");
// let btnsArray = [animalFactsBtn, uselessFactsBtn, factsGameBtn];
//
// // Getting tiles
// let animalFactsTile = document.getElementById("animalFactsTile");
// let tilesArray = [animalFactsTile, uselessFactsTile, factsGameTile];
//
// // Getting document properties
// let screenWidth = screen.width;
// let htmlRoot = document.querySelector(":root");

let startStopState = "stopped";
let leftInputClickCount = 0;
let rightInputClickCount = 0;

//-------------------------------------------- FUNCTIONS ------------------------------------------------
// /**
//  * Display an option tile with text and highlight the associated button when there is a hover event.
//  *
//  * @param index The index in the button and tile arrays (declared above) where the relevant
//  *              button and tile are.
//  */
// function displayTile(index) {
//     btnsArray[index].classList.add("btnHover");
//     document.getElementsByClassName("navTileText")[index].style.display = "block";
//     tilesArray[index].style.cursor = "pointer";
// }
//
// /**
//  * Hide an option tile and its text, then de-highlight the associated button when the user is
//  * no longer hovering over the tile.
//  *
//  * @param index The index in the button and tile arrays (declared above) where the relevant
//  *              button and tile are.
//  */
// function hideTile(index) {
//     btnsArray[index].classList.remove('btnHover');
//     document.getElementsByClassName("navTileText")[index].style.display = "none";
// }


function startStopRecording() {
    if (startStopState === "stopped") {
        startStopState = "started";
        startBtn.innerText = "Stop";
        startBtn.classList.add("running");
    }
    else {
        startStopState = "stopped";
        startBtn.innerHTML = "Start";
        startBtn.classList.remove("running");
    }
}

function countClicksInLeft() {
    if (startStopState === "started") {
        leftInputClickCount++;
    }
    console.log("left " + leftInputClickCount);
}

function countClicksInRight() {
    if (startStopState === "started") {
        rightInputClickCount++;
    }
    console.log("right " + rightInputClickCount);
}

//------------------------------------------ EVENT LISTENERS --------------------------------------------
// /**
//  * For loop to add event listeners for mouseover and mouseout on each of the link button/tiles.
//  */
// for (let i = 0; i < 3; i++) {
//     tilesArray[i].addEventListener('mouseover', () => {displayTile(i)});
//     tilesArray[i].addEventListener('mouseout', () => {hideTile(i)});
// }
//
// /**
//  * Listener to update page width in the stylesheet every time the page is resized.
//  */
// onresize = () => {
//     updatePageWidth();
// };

startBtn.addEventListener('click', () => startStopRecording());
leftInputTile.addEventListener('click', () => countClicksInLeft());
rightInputTile.addEventListener('click', () => countClicksInRight());
