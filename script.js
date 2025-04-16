'use strict'

// --- INITIALIZER --- //
const DEFAULT_GRID_BACKGROUND ="#e3e3e3";
const DEFAULT_GRID_COLOR ='#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = '50';

// --- SELECTORS --- //
const gridContainer = document.querySelector('.grid-container');
const slideContainer = document.querySelector('.slide-container');
const slideInput = document.querySelector('#slider-range');

// --- DECLERATIONS --- //
let currentGridColor = DEFAULT_GRID_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

// --- APP LOGIC --- //
const createGrid = function() {
  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild);
  };

  currentSize = slideInput.value;
  let squareSize = 600 / currentSize;

  for (let i = 0; i < currentSize * currentSize; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    gridContainer.appendChild(square);
  }
};

createGrid();
console.log(slideInput.value);


// ===== Grid Creation =====
// - Clear all existing squares from .game-container
// - Get current slider value (squaresPerSide)
// - Calculate total squares = squaresPerSide * squaresPerSide
// - For each square (0 to totalSquares):
    // - Create a new div
    // - Add class "grid-square"
    // - Set width/height to 600 / squaresPerSide (in px)
    // - Append to .game-container

// ===== Mode Selection =====
// - Listen for button clicks inside .button-container
// - On click:
    // - Set currentMode = clicked button’s mode
    // - Remove "active" class from all buttons
    // - Add "active" class to clicked button

// ===== Color Button =====
// - On color button click:
    // - Prompt user for color input
    // - Set currentColor = selected color

// ===== Clear Button =====
// - On clear button click:
    // - Loop through all .grid-square elements
    // - Reset background color to default

// ===== Hover Draw Logic =====
// - Add mouseover listener to each square after grid creation
// - On hover:
    // If currentMode === "color"
        // - Set background to currentColor
    // Else if currentMode === "shading"
        // - Increase opacity by 10% (max 100%)
    // Else if currentMode === "lighten"
        // - Decrease opacity by 10% (min 0%)
    // Else if currentMode === "rainbow"
        // - Set background to random RGB value
    // Else if currentMode === "eraser"
        // - Set background to default color

// ===== Dark Mode Toggle =====
// - On dark mode button click:
    // - Add "dark-mode" class to main container
    // - Show light mode button
    // - Hide dark mode button
// - On light mode button click:
    // - Remove "dark-mode" class
    // - Show dark mode button
    // - Hide light mode button