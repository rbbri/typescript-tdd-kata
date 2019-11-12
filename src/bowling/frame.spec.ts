import { Frame } from './frame';

describe('Frame', () => {
  test('it records the score the rolls', () => {
    const frame: Frame = new Frame(1, 3);
    expect([frame.rollOne, frame.rollTwo]).toEqual([1, 3]);
  });
  test('it can take one roll as a parameter', () => {
    const frame: Frame = new Frame(10);
    expect([frame.rollOne, frame.rollTwo]).toEqual([10, 0]);
  });
  test('it throws an error if a roll is greater than 10', () => {
    try {
      new Frame(11, 5);
      expect(true).toBe(false);
    } catch (exception) {
      expect(exception.message).toBe('Invalid roll');
    };
  });
  test('it throws an error if a roll is less than 0', () => {
    try {
      new Frame(-1, 3);
      expect(true).toBe(false);
    } catch (exception) {
      expect(exception.message).toBe('Invalid roll');
    };
  });

  describe('isStrike', () => {
    test('returns true for a strike', () => {
      const frame: Frame = new Frame(10);
      expect(frame.isStrike()).toBe(true);
    });
    test('it returns false when not a strike', () => {
      const frame: Frame = new Frame(1, 5);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('isSpare', () => {
    test('it returns true for a spare', () => {
      const frame: Frame = new Frame(5, 5);
      expect(frame.isSpare()).toBe(true);
    });
    test('it returns false for a strike', () => {
      const frame: Frame = new Frame(10);
      expect(frame.isSpare()).toBe(false);
    });
    test('it returns false when not a spare', () => {
      const frame: Frame = new Frame(1, 4);
      expect(frame.isSpare()).toBe(false);
    });
  });
});
