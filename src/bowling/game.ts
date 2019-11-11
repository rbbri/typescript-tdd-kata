// class constructor
/**
 * Represents a game of bowling.
 */
export class Game {
  private total: number = 0;
  //
  /**
  * Scores a frame.
  * @constructor
  * @param {number} rollOne The first roll.
  * @param {number} rollTwo The second roll.
  */
  public scoreFrame(rollOne: number, rollTwo: number): void {
    const strike = 10;
    if (rollOne === strike) {
      this.total += 5;
    }
    if (rollTwo === strike) {
      this.total += 5;
    }
    this.total += rollOne + rollTwo;
  }
  //
  /**
   * Returns the total score
   * @return {number}
   */
  public getScore(): number {
    return this.total;
  }
}
