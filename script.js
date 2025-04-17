'use strict'

// --- INITIALIZER --- //
const DEFAULT_GRID_BACKGROUND ="#e3e3e3";
const DEFAULT_GRID_COLOR ='#000000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = '50';


// --- SELECTORS --- //
const gridContainer = document.querySelector('.grid-container');
const slideContainer = document.querySelector('.slide-container');
const buttonContainer = document.querySelector('.button-container');

const slideInput = document.querySelector('#slider-range');
const rangeValueSpan = document.querySelector('#range-value');

const gameButtons = document.querySelectorAll('.game-button');
const colorButton = document.querySelector('#color-button');
const inputColor = document.querySelector('#input-color');

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

const removeActive = () => {
  gameButtons.forEach(button => {
    button.classList.remove('active');
  });
};

// --- EVENT HANDLERS --- //
slideInput.addEventListener('click', () => {
  if(slideInput.value < 4){
    currentSize = 4;
    rangeValueSpan.innerHTML = `${slideInput.value}`;
    createGrid();
  }else {
    currentSize = slideInput.value;
    rangeValueSpan.innerHTML = `${slideInput.value}`;
    createGrid();
  };
});

buttonContainer.addEventListener('click', (e) => {
  let clickedButton = e.target;
  console.log(clickedButton);

  switch(clickedButton.id){
    case 'color-button':
    case 'input-color':  
      currentMode = 'color';
      removeActive();
      colorButton.classList.add('active');
      break;


    case 'shading-button':
      currentMode = 'shading';
      removeActive();
      clickedButton.classList.add('active');
      break;
    
    case 'lighten-button':
      currentMode = 'lighten';
      removeActive();
      clickedButton.classList.add('active');
      break;

    case 'rainbow-button':
      currentMode = 'rainbow';
      removeActive();
      clickedButton.classList.add('active');
      break;

    case 'eraser-button':
      currentMode = 'shading';
      removeActive();
      clickedButton.classList.add('active');
      break;
    
    case 'clear-button':
      createGrid()
  };
});

inputColor.addEventListener('input', (e) => {
  currentGridColor = inputColor.value;
});

// --- FUNCTION CALLS --- //
createGrid();


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