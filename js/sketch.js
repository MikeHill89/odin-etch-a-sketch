const drawingCanvas = document.querySelector(".container");
const canvasSize = drawingCanvas.offsetWidth;
const resetButton = document.getElementById('reset');
const gridButton = document.getElementById('gridsize');
let isDragging = false;
const rainbow = document.getElementById('rainbow-color');
const colorPicker = document.getElementById("color-picker");
let selectedColor = "#000000";
colorPicker.value = selectedColor;
colorPicker.addEventListener("change", () => {
  selectedColor = colorPicker.value;
});

const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return selectedColor = `#${randomColor}`;
}

let setGridSize = 32;

const getGridSize = () => {
  let newGridSize = parseInt(prompt("what grid size do you want"));
  if (newGridSize < 16 || newGridSize > 100) {
    alert("Minimum gridsize is 16 and max 100");
    getGridSize();
  } else {
    setGridSize = newGridSize;
    return drawGrid(setGridSize);
  }
};

function drawGrid(gridsize) {
  drawingCanvas.replaceChildren();
  for (let i = 0; i < gridsize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.outline = 'none'
    row.style.display = 'flex';
    row.style.width = `${canvasSize}px`;
    row.style.height = `${canvasSize / gridsize}px`;
    row.style.backgroundColor = '#FFFFFF';
    for (let j = 0; j < gridsize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('square');
      cell.style.outline = 'none';
      cell.style.flexGrow = '1';
      cell.style.width = '100%';
      cell.style.border = '1px solid lightgrey';
      row.appendChild(cell);
    }
    drawingCanvas.appendChild(row);

    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        isDragging = true;
      }
    }));
    squares.forEach((square) => square.addEventListener('mousemove', colorSquare));
    squares.forEach((square) => square.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        isDragging = false;
      }
    }));
    document.querySelectorAll('.square').forEach(square => {
      square.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    });

  }
}
  
function colorSquare() {
  if ( isDragging && rainbow.checked){
    this.style.backgroundColor = getRandomColor();
  } else if (isDragging) {
    selectedColor = colorPicker.value;
    this.style.backgroundColor = selectedColor;
  }
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
}

resetButton.addEventListener('click', resetGrid);
gridButton.addEventListener('click', getGridSize);

drawGrid(setGridSize);
