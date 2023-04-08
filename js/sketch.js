const drawingCanvas = document.querySelector(".container");
const userColor = '#00ffff';
const resetButton = document.getElementById('reset');
const gridSize = 128;
const canvasWidth = drawingCanvas.offsetWidth;
const squareSize = canvasWidth / gridSize - 2;
function drawGrid() {

  for (let index = 0; index < gridSize * gridSize; index++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("square");
    gridBlock.style.width = `${squareSize}px`;
    gridBlock.style.margin = '0px';
    gridBlock.style.padding = '0px';
    gridBlock.style.height = `${squareSize}px`;
    gridBlock.style.border = '1px solid lightgrey';
    gridBlock.style.backgroundColor = '#ffffff';
    drawingCanvas.appendChild(gridBlock);
  }

}
drawGrid();

const squares = document.querySelectorAll('.square');
function colorSquare() {
  this.style.backgroundColor = userColor;
}

function resetGrid() {
  squares.forEach(square => square.style.backgroundColor = "");
}

squares.forEach(square => square.addEventListener('mouseover', colorSquare));

resetButton.addEventListener('click', resetGrid);


