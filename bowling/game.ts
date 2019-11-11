export class Game {

  private total: number = 0;

  constructor() {

  }

  public scoreFrame(rollOne: number, rollTwo: number): void {
    this.total += rollOne + rollTwo
  }

  public getScore(): number {
    return this.total;
  }
}
