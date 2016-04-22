import CellState from './CellState';

class CellRule {
  constructor() {
    this.ruleSet = [CellState.DEAD, CellState.LIVE, CellState.LIVE, CellState.DEAD, CellState.LIVE, CellState.LIVE, CellState.LIVE, CellState.DEAD];
  }

  setRuleSet(ruleSet) {
    this.ruleSet = ruleSet;
  }

  getNextState(left, cell, right) {
    if (left === CellState.LIVE && cell === CellState.LIVE && right === CellState.LIVE) {
      return this.ruleSet[0];
    } else if (left === CellState.LIVE && cell === CellState.LIVE && right === CellState.DEAD) {
      return this.ruleSet[1];
    } else if (left === CellState.LIVE && cell === CellState.DEAD && right === CellState.LIVE) {
      return this.ruleSet[2];
    } else if (left === CellState.LIVE && cell === CellState.DEAD && right === CellState.DEAD) {
      return this.ruleSet[3];
    } else if (left === CellState.DEAD && cell === CellState.LIVE && right === CellState.LIVE) {
      return this.ruleSet[4];
    } else if (left === CellState.DEAD && cell === CellState.LIVE && right === CellState.DEAD) {
      return this.ruleSet[5];
    } else if (left === CellState.DEAD && cell === CellState.DEAD && right === CellState.LIVE) {
      return this.ruleSet[6];
    } else if (left === CellState.DEAD && cell === CellState.DEAD && right === CellState.DEAD) {
      return this.ruleSet[7];
    }
    return CellState.DEAD;
  }

}

export default CellRule;
