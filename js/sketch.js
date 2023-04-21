const drawingCanvas = document.querySelector(".container");
const canvasSize = drawingCanvas.offsetWidth;
const userColor = '#00ffff';
const resetButton = document.getElementById('reset');
const gridButton = document.getElementById('gridsize');
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
let setGridSize = 16;

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
    row.style.display = 'flex';
    row.style.width = `${canvasSize}px`;
    row.style.height = `${canvasSize / gridsize}px`;
    row.style.backgroundColor = '#FFFFFF';
    for (let j = 0; j < gridsize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('square');
      cell.style.flexGrow = '1';
      cell.style.width = '100%';
      cell.style.border = '1px solid lightgrey';
      row.appendChild(cell);
    }
    drawingCanvas.appendChild(row);
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener('mouseover', colorSquare));
  }
}
function colorSquare() {
  this.style.backgroundColor = getRandomColor();
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
}
drawGrid(setGridSize);

resetButton.addEventListener('click', resetGrid);
gridButton.addEventListener('click', getGridSize);
