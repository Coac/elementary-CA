import Cell from './Cell';
import CellState from './CellState';
import CellRule from './CellRule';

class Grid {
  constructor(size) {
    this.size = size;
    this.resetGrid();
  }

  set(grid) {
    this.grid = grid;
    this.size = grid.length;
  }

  fillRnd() {
    this.grid = [];
    for (let i = 0; i < this.size; i++) {
      let state = CellState.DEAD;
      if (Math.random() > 0.5) {
        state = CellState.LIVE;
      }
      this.grid.push(new Cell(state));
    }
  }

  resetGrid() {
    this.grid = [];
    for (let i = 0; i < this.size; i++) {
      this.grid.push(new Cell(CellState.DEAD));
    }
  }

  forEach(func, context) {
    for (let i = 0; i < this.size; i++) {
      func.call(context, this.grid[i]);
    }
  }

  iterate() {
    let cellRule = new CellRule();
    let generation = [];
    for (var i = 0; i < this.size; i++) {
      let left = i - 1 > 0 ? this.grid[i - 1].state : CellState.DEAD;
      let cell = this.grid[i].state;
      let right = i + 1 < this.size ? this.grid[i + 1].state : CellState.DEAD;

      generation.push(new Cell(cellRule.getNextState(left, cell, right)));
    }
    this.grid = generation;
  }

  clone() {
    let clonedGrid = new Grid(this.size);
    for (var i = 0; i < this.size; i++) {
      clonedGrid.grid[i] = this.grid[i].clone();
    }
    return clonedGrid;
  }

}

export default Grid;
