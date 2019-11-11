import { Game } from '../bowling/game';

describe('game', () => {
  test('it should score a gutter game', () => {
    const game: Game = new Game();
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(0, 0);
    }
    expect(game.getScore()).toBe(0);
  });

  test('it should score a game of all ones', () => {
    const game: Game = new Game();
    for (let i = 0; i < 10; ++i) {
      game.scoreFrame(1, 1);
    }
    expect(game.getScore()).toBe(20);
  });
});
