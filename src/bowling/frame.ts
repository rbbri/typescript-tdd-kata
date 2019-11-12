export class Frame {
  public rollOne: number;
  public rollTwo: number;

  constructor(rollOne: number, rollTwo: number = 0) {
    if (rollOne > 10 || rollTwo > 10 || rollOne < 0 || rollTwo < 0) {
      throw new Error('Invalid roll');
    }
    this.rollOne = rollOne;
    this.rollTwo = rollTwo;
  }

  isStrike(): boolean {
    return this.rollOne == 10 ? true : false;
  }

  isSpare(): boolean {
    return this.rollOne + this.rollTwo == 10 && !this.isStrike() ? true : false;
  }
}
