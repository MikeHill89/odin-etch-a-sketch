const drawingCanvas = document.querySelector(".container");
const userColor = '#00ffff';
const resetButton = document.getElementById('reset');
const gridButton = document.getElementById('gridsize');
const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
const getGridSize = () => {
  return parseInt(prompt("what grid size do you want"));
};

function drawGrid() {
  drawingCanvas.replaceChildren();
  let setGridSize = getGridSize();
  if (setGridSize > 100 || setGridSize < 16) {
    setGridSize = 0;
    alert("Sorry, you need to have a positive grid of atleast 16 to a maximum of a 100")
    drawGrid();
  }
  const canvasWidth = drawingCanvas.offsetWidth;
  const squareSize = (canvasWidth / setGridSize) - 2;

  for (let index = 0; index < setGridSize * setGridSize; index++) {
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
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.addEventListener('mouseover', colorSquare));
}

function colorSquare() {
  this.style.backgroundColor = getRandomColor();
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.style.backgroundColor = "");
}


resetButton.addEventListener('click', resetGrid);
gridButton.addEventListener('click', drawGrid);
drawGrid();
