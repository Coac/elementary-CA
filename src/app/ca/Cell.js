class Cell {
  constructor(state) {
    this.state = state;
  }

  clone() {
    return new Cell(this.state);
  }
}

export default Cell;
