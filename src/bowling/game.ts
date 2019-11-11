// class constructor
/**
 * Represents a game of bowling.
 */
export class Game {
  private total: number = 0;
  public strikes: number = 0;
  //
  /**
  * Scores a frame.
  * @constructor
  * @param {number} rollOne The first roll.
  * @param {number} rollTwo The second roll.
  */
  public scoreFrame(rollOne: number, rollTwo: number = 0): void {
    const strike = 10;
    if (rollOne === strike) {
      this.total += 15;
      ++this.strikes;
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
