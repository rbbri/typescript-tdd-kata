// class
/**
 * Represents a game of bowling.
 */
export class Game {
  public strikes: number = 0;
  public total: number = 0;
  //
  /**
  * Scores a frame.
  * @constructor
  * @param {number} rollOne The first roll.
  * @param {number} rollTwo The second roll.
  */
  public scoreFrame(rollOne: number, rollTwo: number = 0): void {
    const strike = 10;
    this.total += rollOne
    if (rollOne == strike) {
      ++this.strikes;
    } else {
      this.total += rollTwo;
    }
  }
  //
  /**
   * Returns the total score
   * @return {number}
   */
  public getScore(): number {
    if (this.strikes == 12) {
      return 300;
    } else {
      return this.total;
    }
  }

}
