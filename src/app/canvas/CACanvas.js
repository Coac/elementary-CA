import Grid from '../ca/Grid';
import CellState from '../ca/CellState';

class CACanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.cellSize = 5;
    this.maxGrid = this.canvas.height / this.cellSize;
    this.maxCellOnOneGrid = this.canvas.width / this.cellSize;

    this.grids = [];
    for (var i = 0; i < this.maxGrid; i++) {
      this.grids.push(new Grid(this.maxCellOnOneGrid));
    }

    let grid = new Grid(this.maxCellOnOneGrid);
    grid.fillRnd();
    this.grids[2] = grid;
  }
  shift() {
    for (var i = this.maxGrid - 1; i > 0; --i) {
      this.grids[i + 1] = this.grids[i];
    }
    this.grids[2] = this.grids[3].clone();
    this.grids[2].iterate();
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  draw() {
    this.context.beginPath();
    let height = 0;
    this.grids.forEach(function(grid) {
      let i = 0;
      grid.forEach(function(cell) {
        if (cell.state === CellState.LIVE) {
          this.context.fillRect(i * this.cellSize, height, this.cellSize, this.cellSize);
        }
        i++;
      }, this);

      height += this.cellSize;
    }, this);
    this.shift();
    this.context.stroke();
    this.context.closePath();
  }

}

export default CACanvas;
