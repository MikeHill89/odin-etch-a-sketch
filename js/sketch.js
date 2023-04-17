const drawingCanvas = document.querySelector(".container");
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
    return drawGrid();
  }
};
  

function drawGrid() {
  drawingCanvas.replaceChildren();
  const canvasWidth = drawingCanvas.offsetWidth;
  const squareSize = ((100 / setGridSize) * canvasWidth / 100) - 2;


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
  squares.forEach((square) => square.addEventListener('mouseenter', colorSquare));
}

function colorSquare() {
  this.style.backgroundColor = getRandomColor();
}

function resetGrid() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = "";
    baseOpacity = 0.1;
  });
}
drawGrid();

resetButton.addEventListener('click', resetGrid);
gridButton.addEventListener('click', getGridSize);
