import { Frame } from './frame';

export class Game {
  public strikes: number = 0;
  public total: number = 0;
  public frames: Frame[] = [];
  public currentFrame: number = 0;

  public scoreFrame(rollOne: number, rollTwo: number = 0): void {
    const frame = new Frame(rollOne, rollTwo);
    if (this.currentFrame > 0) {
      const previousFrame = this.frames[this.currentFrame - 1];
      if (previousFrame.isSpare()) {
        this.total += rollOne;
      }
    }

    if (frame.isStrike()) {
      ++this.strikes;
    }

    if (this.currentFrame < 10) {
      this.total += rollOne;
      if (!frame.isStrike()) {
        this.total += rollTwo;
      }
    }


    this.frames.push(frame);
    ++this.currentFrame;
  }

  public getScore(): number {
    if (this.strikes == 12) {
      return 300;
    } else {
      return this.total;
    }
  }
}
