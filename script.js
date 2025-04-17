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
      currentMode = 'eraser';
      removeActive();
      clickedButton.classList.add('active');
      break;
    
    case 'clear-button':
      createGrid()
  };
});

inputColor.addEventListener('input', () => {
  currentGridColor = inputColor.value;
});

const applyHoverListeners = () => {
  const gridSquares = document.querySelectorAll('.grid-square');
  gridSquares.forEach(square => {
    square.addEventListener('mouseover', handleDraw);
  });
};

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
    square.setAttribute('draggable', false);
    gridContainer.appendChild(square);
  }

  applyHoverListeners();
};  

const removeActive = () => {
  gameButtons.forEach(button => {
    button.classList.remove('active');
  });
};

// --- FUNCTION CALLS --- //
createGrid();

// ===== Hover Draw Logic =====
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